//import json server
const jsonServer =require('json.server')
//create server forr MP
const MPServer =jsonServer.create()
//create middleware
const middleware =jsonServer.default()
//set route for json file
const route=jsonServer.router('db.json')
//to available app in port
const PORT =3000 ||process.env.PORT

MPServer.use(middleware)
MPServer.use(route)
MPServer.listen(PORT,()=>{
    console.log(`media player server started at port ${PORT} and awaiting for client request`);
    
})