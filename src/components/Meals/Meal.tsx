import { useContext } from 'react';
import styles from './Meal.module.css';
import { mealType } from "../../Types/Types";
import Button from '../Layout/Button';
import {formatPrice} from "../../Utils/Utils"
import { CartContext } from '../../context/CartProvider';


const Meal:React.FC<{meal:mealType}> = ({meal:{id,name,price,description,image}}) =>{

   const {addMeal} =  useContext(CartContext);
   const addMealToCart = ()=>{
        const meal = {
            id,
            name,
            price,
            description,
            image,
            count:1
        };
        addMeal(meal)
   }
    
    return <li className={styles["meal-item"] }>
        <article>
            <img src={`http://localhost:3000/${image}`} alt={name} />
            <h3>{name}</h3>
            <span data-testid="meal-price" className={styles['meal-item-price']}>{formatPrice(+price)}</span>
            <p className={styles['meal-item-description']}>{description}</p>           
            <div className={styles['meal-item-actions ']}>
                <Button onClick={addMealToCart}>Add product</Button>
            </div>
        </article>

     </li>
}

export default Meal;