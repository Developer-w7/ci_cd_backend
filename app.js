const express= require('express');
const app= express();
app.use('/',(req,res)=>{
    res.json({"message":'Success'})

})

app.listen(3004);