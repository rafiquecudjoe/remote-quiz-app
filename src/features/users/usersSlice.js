import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    { id: 1, fullname: "Emmanuel Mensah", email: "emma@gmail.com" },
    { id: 1, fullname: "Emmanuel Kwofie", email: "emma1@gmail.com" }
];
const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers:{}
})
 


export default usersSlice.reducer