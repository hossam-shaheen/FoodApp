import { useEffect, useState } from "react";
import styles from './Meals.module.css';
import Meal from "./Meal";
import { mealType } from "../../Types/Types";

const Meals:React.FC = () =>{
    const [meals,setMeals] = useState<mealType[] | []>([]);
    const [error,setError] = useState<string>("");
    const [loading,setLoading] =useState<boolean>(false);

    useEffect(()=>{        
        const getMeals = async () =>{
            setLoading(true)
            try {
                const mealsResponse = await fetch("http://localhost:3000/meals");
                if(!mealsResponse.ok){
                    throw new Error("Failed to fetch the meals")
                }
                const currentMeals = await mealsResponse.json();      
                setMeals(currentMeals)
            } catch (error: Error|unknown) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError("An error occurred");
                }
            }
            setLoading(false);
        }        
        getMeals();
    },[])
    
    return <ul className={styles.meals}>
        {meals.length > 0 && !loading && !error && meals.map((meal)=><Meal key={meal.id} meal={meal} />)}
        {loading && !error && meals.length === 0 && <p>Loading ...</p>}
        {!loading && error && meals.length === 0 && <p>{error}</p>}
     </ul>
}

export default Meals;