const express = require('express'); 
const app = express(); 
const port = 5000; 

const customMiddleWare = (req, res, next)=>{
    // Website you wish to allow to connect
   res.setHeader('Access-Control-Allow-Origin', '*');

   // Request methods you wish to allow
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');

   // Request headers you wish to allow
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

   // Set to true if you need the website to include cookies in the requests sent
   // to the API (e.g. in case you use sessions)
   res.setHeader('Access-Control-Allow-Credentials', true);
    next()
}


app.use(customMiddleWare)
app.use(express.json())

app.get("/home", (req, res) => {
    res.send({"message": "Welcome to the Sum of 2 Numbers API"})
})

app.post("/sum/", (req, res)=>{
    //  let {number1, number2}  = req.body 
    console.log(req.body)
    let number1 = req.body.number1
    let number2 = req.body.number2
     let sum = +(number1) +  +(number2)
     res.send({"sum": sum})
})



app.listen(port, () => console.log(`Sum of 2 Number app listening on port ${port}!`));