const express = require('express');
const app = express();
const  sum =require ('./sum');
const PORT = 3000;

app.use(express.json());

// Function mapper - maps numbers to different functions

app.get("/hello",(req,res)=>{
    res.send("hello is working")
})

app.get("/getsum/:a/:b",(req,res)=>{
   const {a,b}=req.params;
  res.json({
    ans:sum(parseInt(a),parseInt(b))
  });
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
