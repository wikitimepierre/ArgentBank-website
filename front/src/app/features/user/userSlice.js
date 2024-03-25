import { createAsyncThunk } from '@reduxjs/toolkit';

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
      console.log(data);
      alert("login - " + response.status + " - " + data.message);
      thunkAPI.dispatch(profile(data.token));
      //TODO save data.token in the store
      //TODO save userinfo in the store (email)
      //TODO appeler user profile pour avoir les infos de l'utilisateur
      return data;
    } else {
      console.error(await response.json());
      alert("login - " + response.status + " - " + response.statusText);
      return thunkAPI.rejectWithValue(await response.json());
    }
  }
);

//{
//    "status": 200,
//    "message": "User successfully logged in",
//    "body": {
//        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjFlNWEwOGM2NGE5MmE1NDZhYWE1NSIsImlhdCI6MTcxMTI5Njk5NiwiZXhwIjoxNzExMzgzMzk2fQ.9ARtXCCeT1NOUdzV44onGbp8nLX_X0HB23pcZY7uJw0"
//    }
//}

export const profile = createAsyncThunk(
  'users/login',
  async (token, thunkAPI) => {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
      //body: ''
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      alert("userInfo - " + data.message + " firstName:" + data.firstName + " lastName:" + data.lastName + " userName:" + data.userName + " id:" + data.id);
      //TODO save userinfo in the store (fisrtName, lastName, userName, id)
      return data;
    } else {
      console.error(await response.json());
      alert("userInfo - " + response.status + " - " + response.statusText);
      //alert('Invalid credentials');
      return thunkAPI.rejectWithValue(await response.json());
    }
  }
);

//{
//  "status": 200,
//  "message": "Successfully got user profile data",
//  "body": {
//    "email": "tony@stark.com",
//    "firstName": "Tony",
//    "lastName": "Stark",
//    "userName": "Iron",
//    "id": "65f1e5a08c64a92a546aaa55"
//  }
//}