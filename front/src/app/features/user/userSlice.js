import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk(
  'users/login',
  async (loginCredentials, thunkAPI) => {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: loginCredentials
      // body: JSON.stringify(loginCredentials);
    });
    if (response.ok) {
      const data = await response.json();

      thunkAPI.dispatch(userInfo({
        email: JSON.parse(loginCredentials).email,
        token: data.body.token
      }));

      thunkAPI.dispatch(profile(data.body.token));
      //alert('email: ' + JSON.parse(loginCredentials).email + ' token: ' + data.body.token);
      return data;
    } else {
      console.error(await response.json());
      alert("login - " + response.status + " - " + response.statusText);
      return thunkAPI.rejectWithValue(await response.json());
    }
  }
);

export const profile = createAsyncThunk(
  'users/profile',
  async (token, thunkAPI) => {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    if (response.ok) {
      const data = await response.json();
      thunkAPI.dispatch(userInfo({
        firstName: data.body.firstName,
        lastName: data.body.lastName,
        userName: data.body.userName,
        id: data.body.id
      }));
      return data;
    } else {
      console.error(await response.json());
      alert("userInfo - " + response.status + " - " + response.statusText);
      //alert('Invalid credentials');
      return thunkAPI.rejectWithValue(await response.json());
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: null,
    token: null,
    firstName: null,
    lastName: null,
    userName: null,
    id: null
  },
  reducers: {
    userInfo: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.userName = action.payload.userName;
      state.id = action.payload.id;
    }
  }
});

export const { userInfo } = userSlice.actions;
export default userSlice.reducer;

