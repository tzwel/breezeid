const { breezeid } = require('./breezeid')

const ids = []

for (let i = 0; i < 200000; i++) {
	ids.push(breezeid(7))
}

function hasDuplicates(array) {
	return (new Set(array)).size !== array.length;
}

if (hasDuplicates(ids)) {
	console.log('has duplicates!!!');
} else {
	console.log('unique!');
}