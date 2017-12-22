import React from 'react';

// Import sub-components
import Form from './Children/Form';
import Results from './Children/Results';

// Helper Function
import helpers from './utils/helpers.js';

class Main extends React.Component{

	constructor(props){

		super(props);

		this.state = {
			searchTerm: "",
			startDate:"",
			endDate:"",
			results: ""
		}

		this.setTerm = this.setTerm.bind(this);
		this.setStartDate = this.setStartDate.bind(this);
		this.setEndDate = this.setEndDate.bind(this);
	}

	setTerm(term){
		this.setState({
			searchTerm: term
		})
	}

	setStartDate(start){
		this.setState({
			startDate:start
		})
	}

	setEndDate(end){
		this.setState({
			endDate:end
		})
	}

	componentDidUpdate(prevProps, prevState){

		if(prevState.searchTerm != this.state.searchTerm){
			console.log("UPDATED");

			helpers.runQuery(this.state.searchTerm,this.state.startDate,this.state.endDate)
				.then((data)=>{
					if (data != this.state.results)
					{
						console.log("HERE");
						console.log(data);

						this.setState({
							results: data
						})		
					}

				// This code is necessary to bind the keyword "this" when we say this.setState 
				// to actually mean the component itself and not the runQuery function.
				})		
		}
	}

	render(){
		return(

			<div className="container">

				<div className="row">

					<div className="jumbotron">
						<h1 className="text-center">The New York Times MERN App!</h1>
						<p className="text-center"><em>Enter a topic to search for within the New York Times Database!</em></p>
					</div>

					<div className="col-md-12">
					
						<Form setTerm={this.setTerm} setStartDate={this.setStartDate} setEndDate={this.setEndDate} />

					</div>
				</div>
				<div className="row">

					<div className="col-md-12">
				
						<Results results={this.state.results} />

					</div>

				</div>

			</div>
		)		
	}

}

//test query

export default Main;