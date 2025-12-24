import { createSlice } from "@reduxjs/toolkit";
const AuthSlice =createSlice({
   name:"auth",
   initialState:{
    loading:false,
    user:null
   },
   reducers:{
    // actions
    setLoading:(state,action)=>{
      state.loading = action.payload;
    },
    setUser:(state,action)=>{
      state.user = action.payload;
    },
   }
})
export const {setLoading, setUser} = AuthSlice.actions;
export default AuthSlice.reducer;