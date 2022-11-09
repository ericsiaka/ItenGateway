import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isSendingMessage: false
}

const sendMessage = createAsyncThunk(
  'contact/send-message',
  async (_, thunkAPI) => {

  }
)

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    toggleIsSending(state) {
      state.isSendingMessage = state.isSendingMessage ? false : true;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(sendMessage.fulfilled, (state, action) => {

      })
      .addCase(sendMessage.rejected, (state, action) => {

      })
  }
})

const selectIsSending = state => state.contact.isSendingMessage;

const { reducer, actions } = contactSlice;

export const { toggleIsSending } = actions;

export { sendMessage, selectIsSending };

export default reducer;