import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    popupNotification: { display: false, message: null },
    modal: false,
    contentBottomHit: false,
  },
  reducers: {
    toggleNotification(state, action) {
      state.popupNotification.display = !state.popupNotification.display;
      state.popupNotification.message = action.payload;
    },
    toggleModal(state) {
      state.modal = !state.modal;
    },
    setContentBottomHit(state, action) {
      state.contentBottomHit = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
