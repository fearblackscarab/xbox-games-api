const express=require('express');
const router=express.Router();
const fetch=(...args)=>import('node-fetch').then(({default: fetch})=>fetch(...args));

router.get('/games',(req,res)=>{
    url='https://api.sampleapis.com/xbox/games';
    fetch(url).then(res=>res.json()).then(data=>{
        res.render('pages/games',{
            title:'All Xbox Games',
            name:'xbox games list',
            data
        })
    })
});

module.exports=router;