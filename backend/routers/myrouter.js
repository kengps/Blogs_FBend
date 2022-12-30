const express = require('express');
const router = express.Router();
const path = require('path')













const indexPath = path.join(__dirname,'../../public/index.html')


router.get('/', (req, res) =>{
    const isName = [
        {name:'123', price:'500'},
        {name:'456', price:'5000'},
        {name:'789', price:'50000'},
    ]
    res.render('homepage', {data:isName} )

})

router.get('/manage', (req, res) =>{

    res.render('forminput' )
})

router.post('/create', (req, res) =>{

   console.log(req.body);
   res.redirect('/')
})

router.get('/path/:id', (req, res) =>{

    const pathId = req.params.id;
    if(pathId){
            res.end(`Welcome to the Path ${pathId}`)
    }
    
})

module.exports = router;