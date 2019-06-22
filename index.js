const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/getrate', (req, res) => getRate(req, res))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

function getRate(req, res) {
	res.render('pages/getrate');
}

function getSmth('/something', (req, res) => {
    req.query.color1 === 'red'  // true
    req.query.color2 === 'blue' // true
}