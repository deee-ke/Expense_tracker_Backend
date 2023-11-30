//import json server library in index,js file
const jsonServer =  require('json-server')

//create server using json-server library
const expenseTrackerServer =  jsonServer.create()

//create a path to db.json
const router = jsonServer.router('db.json')

//middleware to convert js to json
const middleware = jsonServer.defaults()

//connect
expenseTrackerServer.use(middleware)
expenseTrackerServer.use(router)

//set port for server
const port = 5500 || process.env.PORT 

//monitor 4000
expenseTrackerServer.listen(port,()=>{
    console.log(`Expense tracker is listening to ${port}`);
})