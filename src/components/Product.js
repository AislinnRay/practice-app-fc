import React, {Component} from 'react';

class Product extends Component{
    constructor(){
        super()
        this.state={
            edit: false,
            productName: '',
            productPrice: '',
            productImage: ''

        }
    }
    componentDidMount() {
        const {productName, productPrice, productImage} = this.props.product
        this.setState({productName, productPrice, productImage})
    }

    handleChange = ({name, value}) => {
        this.setState({[name]: value}) //name is a value on the state object and name is in brackets because it is a key (key value pairs)
    }

    editToggle = () => {
        this.setState({ edit: !this.state.edit})
    }

    render(){
        const {product_id, product_name, product_price, product_image} = this.props.product;
        const {deleteProduct, editProduct} = this.props;
        const {edit, productName, productPrice, productImage} = this.state;
        return(
            <div>
                {!edit ? <div>
                    <h1>{product_name}</h1>
                    <h1>{product_price}</h1>
                    <img src={product_image} alt="book">Book</img>
                        <button onClick= {() => this.editToggle()}>Edit</button>
                        <button onClick={() => deleteProduct(product_id)}>Delete</button>
                    </div>
                : <div>
                        <input input name='productName'
                            value={productName}
                            placeholder='enter name'
                            onChange={(e) => this.handleChange(e.target)}></input>
                        <input name='productPrice'
                            value={productPrice}
                            placeholder='enter price'
                            onChange={(e) => this.handleChange(e.target)}></input>
                        <input name='productImage'
                            value={productImage}
                            placeholder='enter image URL'
                            onChange={(e) => this.handleChange(e.target)}></input>
                        <button onClick = {() =>
                            this.editToggle()}>Cancel</button>
                            <button onClick= {() => editProduct({productName, productPrice, productImage})}></button>
                </div>
                }
            </div>
        )
    }
}
export default Product