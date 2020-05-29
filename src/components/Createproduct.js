import React, {Component} from 'react';

class Createproduct extends Component {
    constructor(){
        super()
        this.state= {
            name: '',
            price: '',
            image: ''

        }
    }

    handleChange = ({name, value}) => {
        this.setState({[name]: value}) //name is a value on the state object and name is in brackets because it is a key (key value pairs)
    }

    render(){
        const {name, price, image} = this.state
        const {submitProduct} = this.props;
        return(
            <div>
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
                <button onClick = {() => {
                    submitProduct({name, price, image})
                    this.setState({name: '', price: '', image: ''})
                }}>Submit</button>
            </div>
        )
    }

}
export default Createproduct