import React, { useContext,useState }  from "react";
import styles from './Cart.module.css';
import { CartContext } from "../../context/CartProvider";
import CartItems from "./CartItems";
import TotalPrice from "./TotalPrice";
import CartCheckout from "./CartCheckout";
import { customerType} from "../../Types/Types";
import Alert from "../Layout/Alert";
import { ModalContext } from "../../context/ModalProvider";

const Cart:React.FC = () =>{

   const {items,clearAllMeals} =  useContext(CartContext);
   const {handelModal} = useContext(ModalContext)
   const [orderSuccessMessage,setOrderSuccessMessage] = useState<string>("")
   const [orderErrorMessage,setOrderErrorMessage] = useState<string>("")
   const totalPrice = items.reduce((acc,currentItem)=>acc + (currentItem.count * +currentItem.price),0);

   const closeModal = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>{
        e.preventDefault();
        handelModal()
   }
   const placeCustomerOrder = async (customerData:customerType) =>{

    const orderData= {
        items,
        customer:customerData
    }

    try {
        const response = await fetch("http://localhost:3000/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
              order:{ 
                id:Math.random(),
                ...orderData
              }
            })
        });

        if (!response.ok) {
            throw new Error("Failed to send order. Server responded with status: " + response.status);
        }

        const responseData = await response.json();
        setOrderSuccessMessage(responseData.message);
        setTimeout(()=>{
            setOrderSuccessMessage("");
            handelModal();
            clearAllMeals();
        },5000)
    } catch (error: Error|unknown) {

         if (error instanceof Error) {
            setOrderErrorMessage(error.message);
        } else {
            setOrderErrorMessage("An error occurred");
        }      

        setTimeout(()=>{
            setOrderErrorMessage("");
            handelModal()
        },5000)
    }
    
   }

    return <div className={styles.cart}>
            <h2><span>Cart</span> <a onClick={closeModal}>X</a></h2>
            
            {items.length >0  &&<CartItems/>}
            {totalPrice >0 && <TotalPrice totalPrice={totalPrice}/>}
            {items.length === 0  && <Alert className={"alert-danger"}>No meals items added yes</Alert>}
            {orderSuccessMessage && <Alert className={"alert-success"}> {orderSuccessMessage}</Alert>}
            {orderErrorMessage && <Alert className={"alert-danger"}>{orderErrorMessage}</Alert>}           
            {items.length >0  &&<CartCheckout placeCustomerOrder={placeCustomerOrder} />}        
    </div>
}

export default Cart;