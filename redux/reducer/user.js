import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserBiodataById } from "../../util/user";

export const retrieveUserById = createAsyncThunk(
  'user/retrieveUserById',
  async (id) => {
    // TODO
    const resp = await getUserBiodataById(id)
    const data = {
      uid: id,
      email: resp.email,
      job: resp.job,
      age: resp.age,
      profileUrl: resp.profileUrl
    }
    return data
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState: {
    uid: null,
    email: null,
    job: null,
    age: null,
    profileUrl: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(retrieveUserById.fulfilled, (state, action) => {
      state = action.payload
      return state
    })
  }
})

export const userAction = userSlice.actions
export default userSlice