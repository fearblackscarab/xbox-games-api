const express=require('express');
const router=express.Router();

router.use(express.static('public'));

const gamesRoute=require('./api/gamesRoute');
const singleRoute=require('./api/singeRoute');

router.get('/games',gamesRoute);
router.get('/games/:id',singleRoute);

router.get('/',(req,res)=>{
    res.render('pages/home',{
        title:'Xbox Games Home Page',
        name:'Xbox Games'
    })
});

module.exports=router;