const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = 0
let location1 = 'RSA'
let customers = 1
let currency = null
let shipping = null
const shoes = 300 * 1
const toys = 100 * 5
const shirts = 150 * NONE_SELECTED
const batteries = 35 * 2
const pens = 5 * NONE_SELECTED

console.log(typeof 1, typeof '1', typeof 1 == typeof '1', typeof 1 === typeof '1' )


function calcShipping(){
	if (location1 === 'RSA') { 
		shipping = 400 
		currency = 'R' 
	} else if (location1 === 'NAM') { 
		shipping = 600 
		currency = '$' 
	} else { 
		shipping = 800 
		currency = '$' 
	}
}

if (location1 === 'RSA' && shoes + batteries + pens + shirts + toys > 1000 && currency === 'R' && customers === 1 ) {
    shipping = 0
} else if (location1 === 'NAM' && shoes + batteries + pens + shirts + toys > 60 && currency === '$' && customers === 1 ) {
	shipping = 0
} else {
	calcShipping()
}

if (shipping === 0 && customers !== 1) { 
	console.log(FREE_WARNING) 
}

location === 'NK' ? console.log(BANNED_WARNING) : console.log('price', currency, shoes + batteries + pens + shirts + toys + shipping)

