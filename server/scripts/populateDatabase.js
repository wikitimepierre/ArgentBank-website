const axios = require('axios')
const signupApi = 'http://localhost:3001/api/v1/user/signup'

const users = [
  {
    firstName: 'Tony',
    lastName: 'Stark',
    email: 'tony@stark.com',
    password: 'password123',
    userName: 'Iron'
  },
  {
    firstName: 'Steve',
    lastName: 'Rogers',
    email: 'steve@rogers.com',
    password: 'password456',
    userName: 'Captain'
  }
]

users.forEach(user => {
  axios
    .post(signupApi, user)
    .then(response => console.log(response))
    .catch(error => console.log(error))
})


const state = {
  students: [
    {
      firstName: "Jean",
      lastName: "De la Fontaine",
      average: 19.00
    },
    {
      firstName: "Albert",
      lastName: "Einstein",
      average: 19.50
    },
    {
      firstName: "Py",
      lastName: "Thagore",
      average: 20.00
    }
  ]
}

const getStudents = (state) => state.students
const getAverage = (state) => getStudents(state).reduce((prv, cur) => prv + cur.average, 0) / getStudents(state).length