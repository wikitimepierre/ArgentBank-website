import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { resetStore } from '../../actions';

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

      thunkAPI.dispatch(userAuth({
        email: JSON.parse(loginCredentials).email,
        token: data.body.token
      }));

      thunkAPI.dispatch(profilePOST(data.body.token));
      //alert('email: ' + JSON.parse(loginCredentials).email + ' token: ' + data.body.token);

      return data;
    } else {
      console.error(await response.json());
      alert("login - " + response.status + " - " + response.statusText);
      return thunkAPI.rejectWithValue(await response.json());
    }
  }
);

export const profilePOST = createAsyncThunk(
  'users/POST',
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

export const profilePUT = createAsyncThunk(
  'users/profilePUT',
  async ({ token, newUserName }, thunkAPI) => {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ userName: newUserName })
    });
    if (response.ok) {
      const data = await response.json();
      thunkAPI.dispatch(userInfo({
        userName: data.body.userName,
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
    userAuth: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    userInfo: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.userName = action.payload.userName;
      state.id = action.payload.id;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(resetStore, () => {
      return {
        email: null,
        token: null,
        firstName: null,
        lastName: null,
        userName: null,
        id: null
      };
    });
  },
});

export const { userAuth, userInfo } = userSlice.actions;
export default userSlice.reducer;

