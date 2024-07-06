const crypto = require('node:crypto')
const charset = 'AEIUQWTYPSDFGRHJKLZXCVBNM2346789'
const { profanities } = require('./profanities')

const poolSize = 16 * 8 // default id length * 8 = 128
let pool;
let poolIndex = 0

fillPool()
function fillPool() {
	pool = crypto.randomBytes(poolSize)
}

function hasProfanity(input) {
	return profanities.some(function(v) { return input.toLowerCase().indexOf(v) >= 0; })
}

function breezeid(length = 4 * 4) {
	if (length > poolSize) {
		throw new Error(`breezeid: Max ID length (${poolSize}) exceeded. Increase the pool size in source.`)
	}

	return insertHyphens(genChars(length))
}

function genChars(length) {
	let result = '';
	
	// if amount to generate exceeds pool size, refill the pool
	if ((poolIndex + length) >= pool.length) {
		fillPool()
		poolIndex = 0
	}

	for (let i = 0; i < length; i++) {
		result += charset[pool[poolIndex] % charset.length];
		poolIndex++
	}
	return result
}

function insertHyphens(input, every = 4, joinBy = '-') {
	let result = []
	let position = 0
	for (let index = 0; index < (input.length / every); index++) {
		let fragment = input.slice(position, position + every)
		if (hasProfanity(fragment)) {
			fragment = genChars(fragment.length)
			if (hasProfanity(fragment)) {
				fragment = fragment.split("").toReversed().join("")
			}
		}

		result.push(
			fragment
		)

		position += every
	}
	return result.join(joinBy)
}

module.exports = { breezeid, BreezeID:breezeid };