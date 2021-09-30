const willDie = require('./HelperMethods').willDie;
const updateStartPos = require('./HelperMethods').updateStartPos;

var startxPos;
var startyPos; 


test('checks to see if checkDeath function works', () => {
  expect(willDie(1, 2)).toBe(true);
});

test('checks to see if updateStartPos works', () => {
	updateStartPos("top");
	expect(updateStartPos("top")).toBe("650,0");
}); 