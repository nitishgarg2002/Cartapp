import React from 'react'; 

class CartItem extends React.Component{
    constructor () {
        super();
        this.state = {
            price:999,
            title:'Phone',
            qty: '1',
            img: ''
        }
      //  this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    increaseQuantity =()=> {
        console.log(this.state);
    }
    render() {
        const {price,title,qty} =this.state;
        return (
            <div className="cart-item">
                <div className="left-block" >
                <img style={styles.image} />
                </div>
                <div  className="right-block" >
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>{price}</div>
                    <div style={{color:'#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions" >
                            {/* Button */}
                            <img alt="increase" 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1616937699~hmac=f9662fd55671d8c6079edaf185030f51"
                            onClick={this.increaseQuantity}
                            />
                            <img alt="decrease" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/104/104616.svg?token=exp=1616937726~hmac=ff9a3a660573adfa5fda03ae57dd51c2"/>
                             <img alt="delete" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1616937756~hmac=61beee9c0e20107ab9c328c35b529996"/>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius:4,
        background: '#ccc'
    }
}

export default CartItem;