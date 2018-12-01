import React from 'react';
import ProductItems from './ProductItems';
import Addproducts from './Addproducts';

const products = [
	{
	name: 'iPad',
	price: '200'

	},

	{
		name: 'iPhone',
		price:'600'
	}
];


localStorage.setItem('products',JSON.stringify(products));



export default class App extends React.Component {


	constructor(props){
		super(props);
				this.state ={
					products:JSON.parse(localStorage.getItem('products'))
				};
	this.onDelete = this.onDelete.bind(this);		
	this.onAdd = this.onAdd.bind(this);			
				
	}

	componentWillMount(){	
		
	
		const products= this.getProducts();
		this.setState({products});
	}

	getProducts(){

		return this.state.products;

	
	}	
	onAdd(name,price){

	const products = this.getProducts();

	products.push({
		name,
		price
	});

	this.setState({products});
	}
   
   onDelete(name){

   	const products= this.getProducts();	
   	const filteredProducts = products.filter(product =>{
   		return product.name !== name;
   	});

   	console.log(filteredProducts);

   	this.setState({products:filteredProducts });


   }


	render(){
		return(

			<div>
			<h1>Products Manager< /h1>

			<Addproducts 

			onAdd = {this.onAdd}
			/>
			<hr />
						{

							this.state.products.map(product =>{
								return(
								<ProductItems 
								key={product.name}
								{...product}
								onDelete={this.onDelete}
								/>

								);

							})

						}
			</div>
			

			);


	}

	
}
