import React from 'react';

import './App.css';


export default class MyComponent extends React.Component {


		render(){
			const {name, Company} = this.props

				return(
						<div>
						<h1 >Helo from MyC,
						This is {name} from {Company}
						 </h1>
						</div>	
					  );
			}


}


