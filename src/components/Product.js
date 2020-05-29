import React, {Component} from 'react';

class Product extends Component{
    constructor(){
        super()
        this.state={
            edit: false,
            name: '',
            price: '',
            image: ''

        }
    }
    componentDidMount() {
        const {name, price, image} = this.props.product
        this.setState({name, price, image})
    }

    handleChange = ({name, value}) => {
        this.setState({[name]: value}) //name is a value on the state object and name is in brackets because it is a key (key value pairs)
    }

    editToggle = () => {
        this.setState({ edit: !this.state.edit})
    }

    render(){
        const {product_id, name, price, image} = this.props.product;
        const {deleteProduct, editProduct} = this.props;
        const {edit} = this.state;
        return(
            <div>
                {!edit ? <div>
                    <h1>{this.props.product.name}</h1>
                    <h1>{this.props.product.price}</h1>
                    <img src={this.props.product.image} alt="book">Book</img>
                        <button onClick= {() => this.editToggle()}>Edit</button>
                        <button onClick={() => deleteProduct(product_id)}>Delete</button>
                    </div>
                : <div>
                        <input input name='name'
                            value={name}
                            placeholder='enter name'
                            onChange={(e) => this.handleChange(e.target)}></input>
                        <input name='price'
                            value={price}
                            placeholder='enter price'
                            onChange={(e) => this.handleChange(e.target)}></input>
                        <input name='image'
                            value={image}
                            placeholder='enter image URL'
                            onChange={(e) => this.handleChange(e.target)}></input>
                        <button onClick = {() =>
                            this.editToggle()}>Cancel</button>
                            <button onClick= {() => editProduct({name, price, image})}></button>
                </div>
                }
            </div>
        )
    }
}
export default Product