import React, { useState } from "react";
import styles from './CartCheckout.module.css';
import { customerInputTypes ,customerType} from "../../Types/Types";


const CartCheckout:React.FC<{
    placeCustomerOrder:(customer:customerType)=>void
}> = ({placeCustomerOrder}) =>{

    const [customerInfo,setCustomerInfo] = useState<customerInputTypes>({
        name:{
            value:"",
            error:null
        },
        email:{
            value:"",
            error:null
        },
        street:{
            value:"",
            error:null
        },
        postal:{
            value:"",
            error:null
        },
        city:{
            value:"",
            error:null
        }
    })

    const handelCustomerInfo = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setCustomerInfo(customerInfo => ({
            ...customerInfo,
            [e.target.name]:{
                value: e.target.value,
                error:null
            }
        }))
    }

    const placeOrder = (e: React.FormEvent<HTMLFormElement>) =>{
            
            e.preventDefault();

            const invalidName = customerInfo.name.value.trim() === "",
            invalidEmail = customerInfo.email.value.trim().trim() === "" || !customerInfo.email.value.includes("@"),
            invalidPostalCode = customerInfo.postal.value.trim().trim() === "",
            invalidStreet = customerInfo.street.value.trim().trim() === "",
            invalidCity = customerInfo.city.value.trim().trim() === "";


            if(invalidName){
                setCustomerInfo(customerInfo => ({
                    ...customerInfo,
                    name:{
                        value: customerInfo.name.value,
                        error:"Please write full name"
                    }
                }))
            }
            
            if(invalidEmail){
                setCustomerInfo(customerInfo => ({
                    ...customerInfo,
                    email:{
                        value: customerInfo.email.value,
                        error:"Please write valid email"
                    }
                }))
            }
            if(invalidPostalCode){
                setCustomerInfo(customerInfo => ({
                    ...customerInfo,
                    postal:{
                        value: customerInfo.postal.value,
                        error:"Please write valid postal code"
                    }
                }))
            }
            if(invalidStreet){
                setCustomerInfo(customerInfo => ({
                    ...customerInfo,
                    street:{
                        value: customerInfo.street.value,
                        error:"Please write your street"
                    }
                }))
            }
            if(invalidCity){
                setCustomerInfo(customerInfo => ({
                    ...customerInfo,
                    city:{
                        value: customerInfo.city.value,
                        error:"Please write your city"
                    }
                }))
            }

            if(!invalidName &&!invalidEmail && !invalidPostalCode && !invalidStreet && !invalidCity){
                console.log(customerInfo)

                const customerData= {
                    name:customerInfo.name.value,
                    email:customerInfo.email.value,
                    postal:customerInfo.postal.value,
                    street:customerInfo.street.value,
                    city:customerInfo.city.value,
                }

                placeCustomerOrder(customerData)
            }            
    }

    return  <form className={styles["control"]} onSubmit={placeOrder}>
        <div className={styles["control-row"]}>
            <label>Full name</label>
            <input type="text" name="name" onChange={handelCustomerInfo} value={customerInfo.name.value} />
            {customerInfo.name.error && <p className={styles.error}>{customerInfo.name.error}</p>}
        </div>

        <div className={styles["control-row"]}>
            <label>Email address</label>
            <input type="text"  name="email" onChange={handelCustomerInfo} value={customerInfo.email.value}/>
            {customerInfo.email.error && <p className={styles.error}>{customerInfo.email.error}</p>}
        </div>

        <div className={styles["control-row"]}>
            <label>Street</label>
            <input type="text" name="street" onChange={handelCustomerInfo} value={customerInfo.street.value} />
            {customerInfo.street.error && <p className={styles.error}>{customerInfo.street.error}</p>}
        </div>

        <div className={styles["control-row"]}>
            <label>Postal Code</label>
            <input type="text" name="postal" onChange={handelCustomerInfo} value={customerInfo.postal.value}/>
            {customerInfo.postal.error && <p className={styles.error}>{customerInfo.postal.error}</p>}
        </div>

        <div className={styles["control-row"]}>
            <label>City</label>
            <input type="text" name="city" onChange={handelCustomerInfo} value={customerInfo.city.value}/>
            {customerInfo.city.error && <p className={styles.error}>{customerInfo.city.error}</p>}
        </div>

        <button type="submit" className={styles["cart-checkout-button"]}>Submit</button>

    </form>
}

export default CartCheckout;