module.exports = function toReadable (number) {
	const one = {
		"0": "zero",
		"1": "one",
		"2": "two",
		"3": "three",
		"4": "four",
		"5": "five",
		"6": "six",
		"7": "seven",
		"8": "eight",
		"9": "nine",
		"10": "ten",
		"11": "eleven",
		"12": "twelve",
		"13": "thirteen",
		"14": "fourteen",
		"15": "fifteen",
		"16": "sixteen",
		"17": "seventeen",
		"18": "eighteen",
		"19": "nineteen"
	}

	const ten = {
		"20": "twenty",
		"30": "thirty",
		"40": "forty",
		"50": "fifty",
		"60": "sixty",
		"70": "seventy",
		"80": "eighty",
		"90": "ninety"
	}

	if (number < 20) return one[number];

	if (number % 100 === 0) return one[number / 100] + ' hundred';

	const numberToString = '' + number;
	const numberLength = numberToString.length;
	const result = [];

	if (ten.hasOwnProperty(number)) return ten[number];

	if (numberLength < 3) {
		result.push(
			ten[numberToString.slice(0, 1) + 0],
			one[numberToString.slice(-1)]
		)
		return result.join(' ');
	} else {
		const hundred = one[numberToString.slice(0, 1)] + ' hundred';
		let second = '';

		if (Number(numberToString.slice(1)) < 20) {
			second = one[Number(numberToString.slice(1))];
		} else if (number % 10 === 0) {
			second = ten[numberToString.slice(1, 2) + 0];
		} else {
			second = ten[numberToString.slice(1, 2) + 0] + ' ' + one[numberToString.slice(-1)];
		}

		result.push(hundred, second)

	}

	return result.join(' ').trim();
}