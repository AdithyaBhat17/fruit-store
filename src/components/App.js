import React from 'react'

import FRUITS from '../utils/store_items.json'
import Fruits from './Fruits.js';
import Cart from './Cart.js';

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            store: FRUITS,
            fruitsInStore: FRUITS,
            fruitsInCart: [],
        }
    }

    addToCart = (fruit) => {
      let { fruitsInCart, store } = this.state
      if(fruitsInCart.includes(fruit)){
        if(fruitsInCart[fruitsInCart.indexOf(fruit)].count < store[store.indexOf(fruit)].quantityRemaining){
            fruitsInCart[fruitsInCart.indexOf(fruit)].count += 1
            console.log(fruitsInCart)
            return this.setState({fruitsInCart})
        }
      } else {
            let { fruitsInCart } = this.state
            fruit.count = 1
            fruitsInCart.push(fruit)
            console.log(fruitsInCart)
            return this.setState({fruitsInCart})
        }
    }

    decrementCount = (fruit) => {
        let { fruitsInCart } = this.state
        fruitsInCart[fruitsInCart.indexOf(fruit)].count > 0 ? 
        fruitsInCart[fruitsInCart.indexOf(fruit)].count -=1 :
        fruitsInCart[fruitsInCart.indexOf(fruit)].count = 0
        this.setState({fruitsInCart})
    }

    incrementCount = (fruit) => {
        let { fruitsInCart } = this.state
        fruitsInCart[fruitsInCart.indexOf(fruit)].count < fruitsInCart[fruitsInCart.indexOf(fruit)].quantityRemaining ? 
        fruitsInCart[fruitsInCart.indexOf(fruit)].count +=1 :
        fruitsInCart[fruitsInCart.indexOf(fruit)].count = fruitsInCart[fruitsInCart.indexOf(fruit)].quantityRemaining
        this.setState({fruitsInCart})
    }

    deleteItem = (fruit = -1) => {
        if(fruit == -1)//empty cart
            return this.setState({fruitsInCart: []})
        let { fruitsInCart } = this.state
        fruitsInCart.splice(fruit, 1) // remove 1 item at index
        this.setState({fruitsInCart})
    }

    generateBill = () => {
        let { fruitsInCart } = this.state
        let bill = 0
        fruitsInCart.forEach(fruit => bill += fruit.count * fruit.price)
        return bill.toFixed(2)
    }

    render(){
        const { fruitsInCart, fruitsInStore, bill } = this.state
        return(
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-9 col-sm-12">
                            <div className="row">
                                {fruitsInStore && fruitsInStore.map((fruit, index) => (
                                    <Fruits 
                                     fruit={fruit}
                                     key={index}
                                     addToCart={() => this.addToCart(fruit)}/>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <Cart 
                             fruits={fruitsInCart}
                             decrementCount={this.decrementCount}
                             incrementCount={this.incrementCount}
                             deleteItem={this.deleteItem}
                             bill={this.generateBill}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
