const {fromDollarToYen, fromEuroToDollar, fromYenToPound} = require(`./app.js`)

test("6.5 dollars should be 950.7009345794393 yens", function() {
    const { fromDollarToYen } = require('./app.js');
    const yens = fromDollarToYen(6.5);
    const expected =(6.5 / 1.07) * 156.5; 
    expect(fromDollarToYen(6.5)).toBe(950.7009345794393);
})

test("9.5 dollars sent as string should be 1389.485981308411 yens", function() {
    const { fromDollarToYen } = require('./app.js');
    const yens = fromDollarToYen("9.5");
    const expected = (9.5 / 1.07) * 156.5; 
    expect(fromDollarToYen("9.5")).toBe(1389.485981308411);
})

test("The dollars amount sent as an empty string should be 0", function() {
    const { fromDollarToYen } = require('./app.js');
    const yens = fromDollarToYen("");
    const expected = 0; 
    expect(fromDollarToYen("")).toBe(0);
})

test("The dollars amount sent as a strange character should be NaN", function() {
    const { fromDollarToYen } = require('./app.js');
    const yens = fromDollarToYen("@");
    const expected = NaN; 
    expect(fromDollarToYen("@")).toBe(NaN);
})

test("3.5 euros should be 3.745 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07; 
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("7.5 euros sent as a string should be 8.025 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar("7.5");
    const expected = 7.5 * 1.07; 
    expect(fromEuroToDollar("7.5")).toBe(8.025);
})

test("The euros amount sent as an empty string should be 0", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar("");
    const expected = 0; 
    expect(fromEuroToDollar("")).toBe(0);
})

test("The euros amount sent as a strange character should be NaN", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar("@");
    const expected = NaN; 
    expect(fromEuroToDollar("@")).toBe(NaN);
})

test("4.5 yens should be 0.025015974440894567 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(4.5);
    const expected =(4.5 / 156.5) * 0.87; 
    expect(fromYenToPound(4.5)).toBe(0.025015974440894567);
})

test("8.5 yens sent as string should be 0.047252396166134185 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound("8.5");
    const expected = (8.5 / 156.5) * 0.87;
    expect(fromYenToPound("8.5")).toBe(0.047252396166134185);
})

test("The yens amount sent as an empty string should be 0", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound("");
    const expected = 0; 
    expect(fromYenToPound("")).toBe(0);
})

test("The yens amount sent as a strange character should be NaN", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound("@");
    const expected = NaN; 
    expect(fromYenToPound("@")).toBe(NaN);
})
