const express=require('express');
const router=express.Router();
const fetch=(...args)=>import('node-fetch').then(({default: fetch})=>fetch(...args));

router.get('/games/:id',(req,res)=>{
    const id=req.params.id;
    url=`https://api.sampleapis.com/xbox/games/${id}`;
    fetch(url).then(res=>res.json()).then(data=>{
        res.render('pages/singleGame',{
            title:`${data.name}`,
            name:`${data.name}`,
            data
        })
    })
});

module.exports=router;