import React from 'react';

class CartItem extends React.Component {

    render() {

        const { price, title, qty } = this.props.product;
        return (
            <div className="cart-item">
                <div className="left-block" >
                    <img alt="" style={styles.image} />
                </div>
                <div className="right-block" >
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: '#777' }}>{price}</div>
                    <div style={{ color: '#777' }}>Qty: {qty}</div>
                    <div className="cart-item-actions" >
                        {/* Button */}
                        <img alt="increase"
                            className="action-icons"
                            src="https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1617959181~hmac=9a894fa33e947907036169e21839befd"
                            onClick={() => this.props.onIncreaseQuantity(this.props.product)}
                        />
                        <img
                            alt="decrease"
                            className="action-icons"
                            src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1617959273~hmac=365343c586bfab07ebe0dabbee04ea7f"
                            onClick={() => this.props.onDecreaseQuantity(this.props.product)}
                        />
                        <img alt="delete" className="action-icons"
                            src="https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1617959212~hmac=729ad9f4166bafc4968cf4274143322d"
                            onClick={() => this.props.onDeleteProduct(this.props.product.id)}
                        />
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
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;