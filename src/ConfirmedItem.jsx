import './ConfirmedItem.css'

export function ConfirmedItem ( {image, name, price, quantity} ) {
    return (
        <div className="order-item">
            <img src={image} alt={name} className='order-image'/>
            <div className="order-Details">
                <h3 className="order-itemTitle">{name}</h3>
                <div className="order-priceQuantity">
                    <p className="order-quantity">{quantity}x</p>
                    <p className="order-price">@ ${price.toFixed(2)}</p>
                </div>
            </div>
            <p className="order-total">${(price * quantity).toFixed(2)}</p>
        </div>
    )
}