import React, { createContext, useReducer, ReactNode } from "react";
import { mealType, CartContextType, actionType } from "../Types/Types";

export const CartContext = createContext<CartContextType>({
    items: [],
    addMeal: (meal) => {},
    removeMeal: (meal) => {},
    clearAllMeals:()=>{},
});

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const cartReducer = (state: mealType[] | [], action:actionType) => {

        switch (action.type) {
            case "ADD_MEAL":
                return [...state, action.payload];

            case "INCREASE_MEAL_COUNT":
                const increasedUpdatedMeals = [...state].map(meal=> meal.id === action.payload.id ? {
                    ...action.payload
                }:meal)
                return increasedUpdatedMeals;
            case "DECREASE_MEAL_COUNT":
                const decreasedUpdatedMeals = [...state].map(meal=> meal.id === action.payload.id ? {
                    ...action.payload
                }:meal)
                return decreasedUpdatedMeals;
            case "REMOVE_MEAL":
                return [...state].filter((item: mealType) => item.id !== action.payload.id);

            case "CLEAR_ALL_MEALS":
                    return [];
            default:
                return state;
        }
    };

    const initValue: mealType[] | [] = [];
    const [state, dispatch] = useReducer(cartReducer, initValue);

    const addMeal = (meal: mealType) => {
        const existMeal = state.find(currentMeal => currentMeal.id === meal.id );

        if(existMeal){
            dispatch({
                type: "INCREASE_MEAL_COUNT",
                payload: {
                    ...meal,
                    count:existMeal.count + 1
                }
            });
        }else{
            dispatch({
                type: "ADD_MEAL",
                payload: meal
            });
        }
      
        
    };

    const removeMeal = (meal: mealType) => {
        const existMeal = state.find(currentMeal => currentMeal.id === meal.id);

        if(existMeal && existMeal.count > 1){
            dispatch({
                type: "DECREASE_MEAL_COUNT",
                payload: {
                    ...meal,
                    count:existMeal.count - 1
                }
            });             
            return;
        }
        
        if(existMeal && existMeal.count === 1){
            dispatch({
                type: "REMOVE_MEAL",
                payload: meal
            });
            return;
        }
       
    };

    const clearAllMeals = () => {
      
            dispatch({
                type: "CLEAR_ALL_MEALS",
                payload: null!
            });
            return;
    };


    const cartCtx: CartContextType = {
        items: state,
        addMeal: addMeal,
        removeMeal: removeMeal,
        clearAllMeals:clearAllMeals
    };
    return <CartContext.Provider value={cartCtx}>{children}</CartContext.Provider>;
};

export default CartProvider;
