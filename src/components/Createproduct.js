import React, {Component} from 'react';

class Createproduct extends Component {
    constructor(){
        super()
        this.state= {
            productName: '',
            productPrice: '',
            productImage: ''

        }
    }

    handleChange = ({name, value}) => {
        this.setState({[name]: value}) //name is a value on the state object and name is in brackets because it is a key (key value pairs)
    }

    render(){
        const {productName, productPrice, productImage} = this.state
        const {submitProduct} = this.props;
        return(
            <div>
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
                <button onClick = {() => {
                    submitProduct({productName, productPrice, productImage})
                    this.setState({productName: '', productPrice: '', productImage: ''})
                }}>Submit</button>
            </div>
        )
    }

}
export default Createproduct