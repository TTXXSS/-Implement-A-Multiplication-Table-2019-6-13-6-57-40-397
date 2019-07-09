const main = require('../main');
const isOutOfRange = main.isOutOfRange;
const isStartLessThanEnd = main.isStartLessThanEnd;
const createMultiplyTable= main.createMultiplyTable;

it ('should start less than end', () => {
    expect(isStartLessThanEnd(2, 4)).toBe(true);
});

it ('should start and end are in range', () => {
    expect(isOutOfRange(1, 1000)).toBe(true);
});
let answer="2*2=4\n"+"2*3=6 "+"3*3=9\n"+
"2*4=8 "+"3*4=12 "+"4*4=16\n";
it ('create multiplyTable', () => {
    expect(createMultiplyTable(2, 4,true,true)).toBe(answer);
});