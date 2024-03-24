### Prerequisites Argent Bank uses the following tech stack:
- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)
Please make sure you have the right versions and download both packages. You can verify this by using the following commands in your terminal:
# Check Node.js version: node --version - # Check Mongo version: mongo --version

### Instructions
Fork this repo, Clone the repo onto your computer, Open a terminal window in the cloned project, Run the following commands:
# Install dependencies: npm install
# Start local dev server: npm run dev:server
# Populate database with two users: npm run populate-db
Your server should now be running at http://locahost:3001 and you will now have two users in your MongoDB database!

## Populated Database Data
Once you run the `populate-db` script, you should have two users in your database: Tony Stark & Steve Rogers

## Design Assets
Static HTML and CSS has been created for most of the site and is located in: `/designs`.
For some of the dynamic features, like toggling user editing, there is a mock-up for it in `/designs/wireframes/edit-user-name.png`.
And for the API model that you will be proposing for transactitons, the wireframe can be found in `/designs/wireframes/transactions.png`.


## API Documentation
To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs

POST localhost:3001/api/v1/user/login
{"email": "tony@stark.com","password": "password123"}
{"email": "steve@rogers.com","password": "password456"}

{
    "status": 200,
    "message": "User successfully logged in",
    "body": {        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjFlNWEwOGM2NGE5MmE1NDZhYWE1NSIsImlhdCI6MTcxMTA0NTcxNiwiZXhwIjoxNzExMTMyMTE2fQ.QkcmUyy7vMB5xL6osEFxNJk5Yb9McsS3_Ab_NXYfr4M"
    }
}