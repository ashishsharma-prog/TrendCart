import CartItem from "../../../models/cartItem";
import { ADD_TO_CART,REMOVE_FROM_CART } from "../cartAction";
import { ADD_ORDER } from "../orderAction";
import { DELETE_PRODUCT } from "../productAction";

const initialState={
    items:{},
    totalAmount:0
}

export default(state=initialState,action)=>{
    switch(action.type){
       case ADD_TO_CART:
           const addedProduct = action.product;
           const prodPrice = addedProduct.price;
           const prodTitle = addedProduct.title;
           const prodImage = addedProduct.imageUrl

           let updatedOrNewProduct;
           if(state.items[addedProduct.id])
           {
               updatedOrNewProduct= new CartItem(
                   prodImage,
                   state.items[addedProduct.id].quantity + 1,
                   prodTitle,
                   prodPrice,
                   state.items[addedProduct.id].total + prodPrice
               )
           }
           else
           {
               updatedOrNewProduct=new CartItem(prodImage,1,prodTitle,prodPrice,prodPrice)
           }
           return{
            ...state,
            items:{...state.items,[addedProduct.id]:updatedOrNewProduct},
            totalAmount:state.totalAmount + prodPrice
        };
        case REMOVE_FROM_CART:
            const selectedCartItem= state.items[action.pid]
            const currentQty = selectedCartItem.quantity;
            let updatedCartItems;
            if(currentQty>1)
            {
               const  updatedNewCartItems = new  CartItem(
                   selectedCartItem.imageUrl,
                   selectedCartItem.quantity-1,
                   selectedCartItem.productTitle,
                   selectedCartItem.productPrice,
                   selectedCartItem.total - selectedCartItem.productPrice
               );
               updatedCartItems={...state.items,[action.pid]:updatedNewCartItems}
            }
            else{
                updatedCartItems={...state.items}
                delete updatedCartItems[action.pid]
            }
            return{
                ...state,
                items:updatedCartItems,
                totalAmount:state.totalAmount-selectedCartItem.productPrice
            }
            case ADD_ORDER:
                return initialState;
          case DELETE_PRODUCT:
              if(!state.items[action.pid]){
                  return state;
              }
              const updatedItems = {...state.items}
              const updatedTotal = state.items[action.pid].total
              delete updatedItems[action.pid]

              return{
                ...state,
                items :updatedItems,
                totalAmount :state.totalAmount - updatedTotal
              }
        
    }
    return state;
}