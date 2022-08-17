const calculator = require('./calculator');

describe('Add function', () => {
    test('could add 0 and 0', () => {
		expect(calculator.add(0,0)).toBe(0);
	});

	test('could add positive numbers', () => {
		expect(calculator.add(2,6)).toBe(8);
	});

    test('could add negative numbers', () => {
        expect(calculator.add(-3,-9)).toBe(-12);
    })

    test('could add string numbers, too', () => {
        expect(calculator.add("5","-9")).toBe(-4);
    })
});

describe('Subtract function', () => {
    test('could subtract 0 and 0', () => {
		expect(calculator.subtract(0,0)).toBe(0);
	});

    test('could subtract positive numbers', () => {
		expect(calculator.subtract(23,7)).toBe(16);
	});

    test('could subtract negative numbers', () => {
		expect(calculator.subtract(-11,-6)).toBe(-5);
	});

    test('could subtract string numbers, too', () => {
		expect(calculator.subtract("31","-9")).toBe(40);
	});
});

describe('Division function', () => {
	test('could divide 0 and 0', () => {
		expect(calculator.divide(0,0)).toBe("undefined"); // 0 / 0 = undefined
	});

    test('could divide a number with 0', () => {
		expect(calculator.divide(6,0)).toBe("undefined"); // 6 / 0 = undefined
	});

	test('could divide positive numbers', () => {
		expect(calculator.divide(18,3)).toBe(6);
	});

	test('could divide negative numbers', () => {
		expect(calculator.divide(-36, -4)).toBe(9);
	});

	test('could divide string numbers, too', () => {
		expect(calculator.divide("75","-15")).toBe(-5);
	});
});

describe('Multiply function', () => {
	test('could multiply 0 and 0', () => {
		expect(calculator.multiply(0,0)).toBe(0);
	});

    test('could multiply a number with 0', () => {
		expect(calculator.multiply(4,0)).toBe(0);
	});

	test('could multiply positive numbers', () => {
		expect(calculator.multiply(7,4)).toBe(28);
	});

    test('could multiply negative numbers', () => {
		expect(calculator.multiply(-9,-6)).toBe(54);
	});

    test('could multiply string numbers, too', () => {
		expect(calculator.multiply("34","-4")).toBe(-136);
	});
});