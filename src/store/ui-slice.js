import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    popupNotification: { display: false, message: null },
    modal: { display: false, data: null },
    contentContainerBottomHit: false,
  },
  reducers: {
    showNotification(state, action) {
      state.popupNotification.display = true;
      state.popupNotification.message = action.payload;
    },
    hideNotification(state) {
      state.popupNotification.display = false;
      state.popupNotification.message = null;
    },
    toggleModal(state, action) {
      state.modal.display = !state.modal.display;
      state.modal.data = action.payload;
    },
    setContentBottomHit(state, action) {
      state.contentContainerBottomHit = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
