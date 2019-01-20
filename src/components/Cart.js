import React from 'react'

const Cart = ({fruits, decrementCount, incrementCount, deleteItem, bill}) => {
    return(
       <div>
           <h1>Your Basket</h1>
           {fruits && fruits.map((fruit, index) => (
               <div key={index}>
                   <div className="basket">
                        <p>{fruit.itemName} - {fruit.count} @ ${fruit.count * fruit.price * 1.00} </p>
                        <div className="basket-btn">
                            <button
                            onClick={() => decrementCount(fruit)}
                            disabled={fruit.count === 0}>
                                -
                            </button>
                            <button
                            onClick={() => incrementCount(fruit)}
                            disabled={fruit.count === fruit.quantityRemaining}>
                                +
                            </button>
                            <button
                            onClick={() => deleteItem(fruit)}
                            disabled={fruit.count === fruit.quantityRemaining}>
                                🚮
                            </button>
                        </div>
                    </div>
                </div>
           ))}
           <button onClick={() => deleteItem()}>Empty Cart</button>
           <p>Total bill = ${bill()}</p>
           <button onClick={() => alert('Congratulations!! you\'re now broke!')}
            className="final"
            disabled={bill() == 0.00}>Proceed to checkout</button>
       </div> 
    )
}

export default Cart