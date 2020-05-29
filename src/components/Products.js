import React, {Component} from 'react';
import Product from './Product';

class Products extends Component{
    constructor(){
        super()
        this.state={

        }
    }

    render(){
        const {deleteProduct} = this.props
        const list = this.props.list.map((element, index) => {
            return <Product key={index} product={element} deleteProduct={deleteProduct}/>
        })
        return(
            <div>{list}</div>
        )
    }
}

export default Products