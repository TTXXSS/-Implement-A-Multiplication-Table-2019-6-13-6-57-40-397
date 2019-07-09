const isStartLessThanEnd = require('../main');
const isOutOfRange = require('../main');
const createMultiplyTable= require('../main');

it ('should start less than end', () => {
    expect(isStartLessThanEnd(2, 4)).toBe(true);
});

it ('should start and end are in range', () => {
    expect(isOutOfRange(1, 1000)).toBe(true);
});
let answer="2*2=4\n"+"2*3=6  "+"3*3=9\n"+
"2*4=8 "+"3*4=12 "+"4*4=16\n"
it ('create multiplyTable', () => {
    expect(createMultiplyTable(2, 4,isStartLessThanEnd,isOutOfRange)).toBe(answer);
});