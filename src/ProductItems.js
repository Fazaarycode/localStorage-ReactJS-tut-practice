import React from 'react';

export default class ProductItems extends React.Component {
constructor(props){
	super(props);
			
			this.onDelete = this.onDelete.bind(this);
					
}

onDelete(){

	const {onDelete, name} = this.props;

	onDelete(name);
	
}

render(){
	const {name, price} = this.props;
				return(
						<div>

						<span> {name} </span>

						{` | `} 

						<span>{price} </span>

						<button onClick={this.onDelete}> Delete </button>
						</div>
						);
		}
}




