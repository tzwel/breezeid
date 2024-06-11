const { get } = require('./index')

const ids = []

for (let i = 0; i < 2000000; i++) {
	ids.push(get(4 * 8))
}

function hasDuplicates(array) {
	return (new Set(array)).size !== array.length;
}

// console.log(nonce)
// console.log(ids)

if (hasDuplicates(ids)) {
	console.log('has duplicates!!!');
} else {
	console.log('unique!');
}