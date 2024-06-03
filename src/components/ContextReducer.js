import React, { createContext, useContext, useReducer} from 'react'

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            const existingFood = state.find((food) => food.id === action.id && food.size === action.size);
            if (existingFood) {
                // If the same food with the same size exists, update its quantity
                return state.map((food) =>
                    food.id === action.id && food.size === action.size
                        ? { ...food, qty: parseInt(action.qty) + parseInt(food.qty), price: action.price + food.price }
                        : food
                );
            } else {
                // Add the new food item to the cart with quantity as an integer
                return [...state, { id: action.id, name: action.name, qty: parseInt(action.qty), size: action.size, price: action.price, img: action.img }];
            }
        case "REMOVE":
            let newArr = [...state]
            newArr.splice(action.index, 1)
            return newArr;
        case "DROP":
            let empArray = []
            return empArray
        case "UPDATE":
            let arr = [...state]
            return state.map((food) => {
                if (food.id === action.id) {
                    console.log(food.qty, parseInt(action.qty), action.price + food.price)
                    return { ...food, qty: parseInt(action.qty) + food.qty, price: action.price + food.price }
                }
                return food
            });
        default:
            console.log("Error in Reducer");
    }
};


export const CartProvider = ({children})=>{
    const[state,dispatch] = useReducer(reducer,[])
    return(
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
}

export const useCart = ()=> useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);