import React, { useContext }  from "react";
import { CartContext } from "../../context/CartProvider";
import CartItem from "./CartItem";



const CartItems:React.FC = () =>{

   const {items,addMeal,removeMeal} =  useContext(CartContext);

    return <ul>        
            {items.length>0 &&items.map(meal=>{
                return  <CartItem meal={meal} addMeal={addMeal} removeMeal={removeMeal} key={meal.id} />}) }      
        </ul>
}

export default CartItems;