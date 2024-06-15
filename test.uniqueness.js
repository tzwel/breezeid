const { breezeid } = require('./breezeid')

const ids = []

for (let i = 0; i < 2000000; i++) {
	ids.push(breezeid())
}

function hasDuplicates(array) {
	return (new Set(array)).size !== array.length;
}

if (hasDuplicates(ids)) {
	console.log('has duplicates!!!');
} else {
	console.log('unique!');
}