import { createSlice } from "@reduxjs/toolkit";

const giftCardFormSlice = createSlice({
  name: "giftCardForm",
  initialState: {
    recipientEmail: "",
    senderName: "",
    message: "",
  },
  reducers: {
    updateId(state, action) {
      state.id = action.payload;
    },
    updateRecipientEmail(state, action) {
      state.recipientEmail = action.payload;
    },
    updateSenderName(state, action) {
      state.senderName = action.payload;
    },
    updateMessage(state, action) {
      state.message = action.payload;
    },
  },
});

export const {
  updateRecipientEmail,
  updateSenderName,
  updateMessage,
  updateId,
} = giftCardFormSlice.actions;

export default giftCardFormSlice.reducer;
