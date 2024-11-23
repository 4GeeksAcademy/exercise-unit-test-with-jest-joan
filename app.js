
const oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}


const fromDollarToYen = function(dollars) {
    let euros = dollars / oneEuroIs["USD"];
    let yens = euros * oneEuroIs["JPY"];
    return yens;
}

console.log(fromDollarToYen(1))

const fromEuroToDollar = function(euro) {
    let dollars = euro * oneEuroIs["USD"];
    return dollars;
}

console.log(fromEuroToDollar(1))

const fromYenToPound = function(yen) {
    let euro = yen / oneEuroIs["JPY"]; 
    let pounds = euro * oneEuroIs["GBP"]
    return pounds;
}

console.log(fromYenToPound(1))

module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound}