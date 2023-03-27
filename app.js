const express=require('express');
const port=process.env.PORT || 3000;
const app=express();

require('./db/conn');
app.use(express.json());

const router=require('./router/routing');
app.use(router);

// app.get('/access',(req,res)=>{
//     res.send('Helo from server')
// })


app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})