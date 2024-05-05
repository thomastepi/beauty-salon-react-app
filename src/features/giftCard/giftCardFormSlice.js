import { createSlice } from "@reduxjs/toolkit";

const giftCardFormSlice = createSlice({
  name: "giftCardForm",
  initialState: {
    recipientEmail: "",
    senderName: "",
    message: "",
  },
  reducers: {
    updateRecipientEmail(state, action) {
      state.recipientEmail = action.payload;
    },
    updateSenderName(state, action) {
      state.senderName = action.payload;
    },
    updateMessage(state, action) {
      state.message = action.payload;
    },
    resetForm(state) {
      state.recipientEmail = "";
      state.senderName = "";
      state.message = "";
    },
  },
});

export const {
  updateRecipientEmail,
  updateSenderName,
  updateMessage,
  resetForm,
} = giftCardFormSlice.actions;

export default giftCardFormSlice.reducer;
