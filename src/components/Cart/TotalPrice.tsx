import React from "react";
import styles from './TotalPrice.module.css';
import {formatPrice} from "../../Utils/Utils"

const TotalPrice:React.FC<{
    totalPrice:number
}> = ({totalPrice}) =>{

    return <div data-testid="cart-total" className={styles["cart-total"]}>
       <span>Total price: {formatPrice(totalPrice)}</span>
    </div>
}

export default TotalPrice;