import { ADD_ORDER,SET_ORDER } from "../orderAction";
import Order from "../../../models/orderItem";

const initialState={
    orders:[]
}


export default(state=initialState,action)=>{
    
    switch(action.type){
        case SET_ORDER:
            return{
                orders:action.orders
            }
       case ADD_ORDER:
           const newOrder = new Order(
               action.orderData.id,
               action.orderData.items,
               action.orderData.amount,
               action.orderData.date
           )
           return{
               ...state,
               orders:state.orders.concat(newOrder)
           }
    }
    
    
    return state;


}