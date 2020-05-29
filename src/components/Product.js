import React, {Component} from 'react';

class Product extends Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        const {product_id, product_name, product_price, product_image} = this.props.product
        const {deletePerson} = this.props
        return(
            <div>
                <h1>{this.props.product.product_name}</h1>
                <h1>{product_price}</h1>
                <img src={product_image} alt="book">Book</img>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        )
    }
}
export default Product