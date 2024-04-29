import React from "react";
import styles from './CartItem.module.css';
import { mealType } from "../../Types/Types";


const CartItem:React.FC<{
    meal:mealType,
    removeMeal:(meal:mealType)=>void,
    addMeal:(meal:mealType)=>void
}> = ({meal,removeMeal,addMeal}) =>{
    return  <li className={styles["cart-item"]} key={meal.id}>
                <p>
                    {meal.name} X {meal.count}
                </p>
                <p className={styles["cart-item-actions"]}>
                    <button data-testid="decrement" className={styles["cart-item-button"]} onClick={e=> removeMeal(meal)}>-</button> 
                      {meal.count}
                    <button data-testid="increment" className={styles["cart-item-button"]} onClick={e=> addMeal(meal)}>+</button>                   
                </p>
            </li>
}

export default CartItem;