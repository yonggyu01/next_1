import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Todotype} from '../model/mytype'


const initialState = {
    todo : [{
    isdone : false,
    create : "11시",
    content : '더미데이터야',
    id : 'dd'
    }] as Todotype[]
}
    


export const TodoList = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    add:(state,action:PayloadAction<Todotype>)=>{
        return {
            ...state,
            todo : [...state.todo, action.payload]
        }
    },
    update: (state,action:PayloadAction<Todotype>)=> {
      state.todo = state.todo.map((item)=>{
        if(item.id === action.payload.id){
          return item = {...action.payload, isdone : !item.isdone}
        }
         return item
        
      })      
    },
    delete:(state,action:PayloadAction<Todotype>)=>{
      state.todo = state.todo.filter(item=>item.id !== action.payload.id)
    }
  },
});

export const {
  update
} = TodoList.actions;
export default TodoList.reducer;