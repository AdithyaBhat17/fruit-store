import React from 'react'

const Fruits = ({fruit, addToCart}) => {
    return(
        <div className="col-md-4 col-sm-12">
            <div className="thumbnail">
                <img src={fruit.imgSrc} alt={fruit.itemName}/>
                <div className="price-div">
                <h4>{fruit.itemName}</h4>
                <h4>${fruit.price}</h4>
                </div>
                {(fruit.quantityRemaining > 0) ? (
                    <div>
                        <p>{fruit.count ? parseInt(fruit.quantityRemaining - fruit.count) : fruit.quantityRemaining} fruits in stock</p>                
                        <button
                        onClick={() => addToCart(fruit)} disabled={fruit.quantityRemaining - fruit.count === 0}>
                            Add to Cart
                        </button>
                    </div>
                ) : (
                    <p>Out of Stock</p>
                )}
            </div>
        </div>
    )
}

export default Fruits