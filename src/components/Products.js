import React, {Component} from 'react';
import Product from './Product';

class Products extends Component{
    constructor(){
        super()
        this.state={

        }
    }

    render(){
        const {deleteProduct, editProduct} = this.props
        const list = this.props.list.map((element, index) => {
            return <Product key={index} product={element} deleteProduct={deleteProduct} editProduct = {editProduct}/>
        })
        return(
            <div>{list}</div>
        )
    }
}

export default Products