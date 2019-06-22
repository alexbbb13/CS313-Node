const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
	
express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(express.json())
  .use(express.urlencoded())
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .post('/getrate', (req, res) => res.render('pages/getrate', prepareData(req)))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

function prepareData(req){;
	console.log(req)
	const weight = Number(req.body.weight);
	const postageType = Number(req.body.postage_type);
	switch(postageType) {
	  case 0:
	  resultRes = calcLettersStamped(weight);
	    break;
	  case 1:
	  resultRes = calcLettersMetered(weight);
	    break;
	  case 2:
	  resultRes = calcLargeEnvelopes(weight);
	  	break;
	  case 3:
	  resultRes = calcFirstClass(weight);
	  	break;
	  default:
	  resultRes = 0;
	    // code block
	}

	return { calculatedRate: resultRes }
}

/*
 <option value="0">Letters (Stamped)</option>
          <option value="1">Letters (Metered)</option>
          <option value="2">Large Envelopes (Flats)</option>
          <option value="3">First-Class Package Service—Retail</option>
*/
function calcLettersStamped(weight) {
	var intvalue = Math.round( weight );
	Weight Not Over (oz.)	 
1	$0.55
2	0.70
3	0.85
3.53	1.00
	return 10;
}

function calcLettersMetered(weight) {
	return 20;
}

function calcLargeEnvelopes(weight) {
var rates = [25.50
,25.60
,25.70
,25.80
,25.85
,27.05
,30.95
,33.90
,37.25
,38.70
,40.75
,43.25
,45.50
,48.20
,50.40
,52.00];
var intvalue = Math.round( weight );
if(intvalue > 15) return -1
return(rates[intvalue]);
}

function calcFirstClass(weight) {
	return 40;
}
// function getSmth('/something', (req, res) => {
//     req.query.color1 === 'red'  // true
//     req.query.color2 === 'blue' // true
// }