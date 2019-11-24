const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/education',  (req, res) => { 
       res.render('education')
})
app.get('/certs',  (req, res) => { 
       res.render('certs')
})
app.get('/courses',  (req, res) => { 
  res.render('courses')
})
app.get('/lang',  (req, res) => { 
       res.render('lang')
})
app.get('/skills',  (req, res) => { 
       res.render('skills')
})
app.get('/work',  (req, res) => { 
       res.render('work')
})

app.listen(3000,(err) =>{
    if(err){
        console.log('It was not possible to start the CV server')
      }else{
        console.log('CV server os running...')
      }

})