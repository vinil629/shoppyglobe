import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],

    },
    reducers:{

        addItem:(state,action)=>{

            let item=state.items.find(
                item=>item.id==action.payload.id
            );

            const data={...action.payload,quantity:1}

            if(!item){
                state.items.push(data)
            }else{
                item.quantity+=1
            }

        },
        removeItem:(state,action)=>{
            let item=state.items.find(
                item=>item.id==action.payload.id
             );

             item.quantity--;


             if(item.quantity==0){
                const items=state.items.filter(
                    (item)=>item.id!=action.payload.id
                )
                state.items=items
             }

           
        },
        clearCart:(state,action)=>{
            state.items=[]
        }

    }
})

export const {addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;