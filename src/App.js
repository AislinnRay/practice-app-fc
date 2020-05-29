import React, {Component} from 'react';
import axios from 'axios';
import Products from './components/Products';
import Createproduct from './components/Createproduct'

class App extends Component{
  constructor() {
    super()
    this.state = {
      products: [], //products array will take in the data when it renders and mounts the data
      productsUrl: 'http://localhost:7676/api/products'
    }

    this.deleteProduct=this.deleteProduct.bind(this)
  }

  //This will get the data to display and come onto the front end
  componentDidMount(){
    const {productsUrl} = this.state;
    axios.get(productsUrl).then(results => {
      this.setState({products: results.data})
    }).catch(err => console.log(err))
  }

  deleteProduct(product_id){
    const {productsUrl} = this.state
    axios.delete(`${productsUrl}/${product_id}`).then(res => {
      this.setState({products: res.data})
    }).catch(err => console.log(err))
  }

  submitProduct = (product) => {
    const {productsUrl} = this.state
    axios.post(productsUrl, product).then(res => {
      this.setState({products: res.data})
    }).catch(err => console.log(err))
  }

  editProduct = (product) => {
    const {productsUrl} = this.state
    axios.put(`${productsUrl}/${product.product_id}`, product).then(res => {
      this.setState({product: res.data})
    }).catch(err => console.log(err))
  }

  render(){
    const {products} = this.state
    return(
      <div>
      <h1>Hello World</h1>
      <div><Products editProduct= {this.editProduct} list={products} deleteProduct = {this.deleteProduct}/><Createproduct submitProduct = {this.submitProduct}/></div>
      </div>
    )
  }
}
export default App
