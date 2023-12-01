import { createSlice } from "@reduxjs/toolkit";

/**
 * React Redux store slice for initializing and storing cross-aplication interface state and defining its methods (reducers).
 */

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    popupNotification: { display: false, message: null, link: null },
    modal: { display: false, data: null },
    onBottom: false,
  },
  reducers: {
    showNotification(state, action) {
      state.popupNotification.display = true;
      state.popupNotification.message = action.payload.message;
      state.popupNotification.link = action.payload.link;
    },
    hideNotification(state) {
      state.popupNotification.display = false;
      state.popupNotification.message = null;
      state.popupNotification.link = null;
    },
    toggleModal(state, action) {
      state.modal.display = !state.modal.display;
      state.modal.data = action.payload;
    },
    setOnBottomTrue(state) {
      state.onBottom = true;
    },
    setOnBottomFalse(state) {
      state.onBottom = false;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
