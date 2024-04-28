export type mealType = {
    id: string;
    name: string;
    price: string;
    description: string;
    image: string;
    count:number    
}

export type CartContextType = {
    items: mealType[] | [];
    addMeal: (meal:mealType) => void;
    removeMeal: (meal:mealType) => void;
    clearAllMeals:()=>void;
};

export type actionType = {
    type: string;
    payload: mealType;
};

type inputsType = {
    value:string;
    error:string|null
}
export type customerInputTypes = {
    name:inputsType;
    email:inputsType;
    street:inputsType;
    postal:inputsType;
    city:inputsType;
};

export type customerType =  {
    name: string;
    email: string;
    postal: string;
    street: string;
    city: string;
};