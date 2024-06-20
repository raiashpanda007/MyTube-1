import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    slider: 'Sidebar-Complete'
}
export const hamburgerSlice = createSlice({
    name: 'hamburger',
    initialState,
    reducers:{
        setSlider: (state, action) => {
            state.slider = action.payload
        }
    }
})
export const {setSlider} = hamburgerSlice.actions

export default hamburgerSlice.reducer