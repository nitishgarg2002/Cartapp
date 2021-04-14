import React from 'react';
import Navbar from './Navbar';
import Cart from './Cart';

class App  extends React.Component{
  constructor() {
    super();
    this.state = {
        products: [
            {
                price: 999,
                title: 'Phone',
                qty: 1,
                img: '',
                id: 1
            },
            {
                price: 9999,
                title: 'Tv',
                qty: 10,
                img: '',
                id: 2
            },
            {
                price: 99999,
                title: 'Laptop',
                qty: 4,
                img: '',
                id: 3
            }
        ]
    }
}
handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
        products
    })
}
handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty > 0) {
        products[index].qty -= 1;
        this.setState({
            products
        })
    }

}
handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
        products: items
    })
}
getCartCount = ()=>{
  const {products} = this.state;
  let count=0;
  products.forEach( 
    (product)=> {
      count+=product.qty;
    }
  );
  return count;
}
getCartTotal=() => {
  const {products} = this.state;
  let cartTotal = 0;
  products.map((product)=> {
    cartTotal= cartTotal+ product.qty* product.price;
  })
  return cartTotal;
}
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart 
        products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteProduct={this.handleDeleteProduct}
  
        />
        <div style={ {padding :10, fontSize:20}} >
          Total: {this.getCartTotal()}
        </div>
      </div>

    );
  }
  
}

export default App;
