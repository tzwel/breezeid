const crypto = require('node:crypto')
const charset = 'AEIUQWTYPSDFGRHJKLZXCVBNM2346789'

const profanities = ['fuck', 'boob', 'spit', 'suck', 'cum', "5h1t", "5hit", "anus", "arse", "cock", "clit", "cunt", "dick", "nigg", "gays", "kike", "hell", "homo", "nips", "peni5", "piss", "slut", "slop", 'yaoi', 'yiff', 'jerk', 'bewb', 'n1gg', 'thug', 'lgbt', 'dupa', 'nazi', 'oral', 'anal', 'poop', 'scat', 'sexy', 'scum', 'smut', ' tits', 'twat', 'rape', 'jerk', 'fagg', 'turd', 'spic', 'kike', 'porn', 'lube', 'ass', 'fag', 'jizz', 'shit', 'dyke', 'wank', 'damn', 'crap', 'cuck', 'pawg']

function hasProfanity(input) {
	return profanities.some(function(v) { return input.toLowerCase().indexOf(v) >= 0; })
}

function breezeid(length = 4 * 4) {
	return insertHyphens(genChars(length))
}

function genChars(length) {
	const pool = crypto.randomBytes(length)
	let result = '';
	for (let i = 0; i < length; i++) {
		result += charset[pool[i] % charset.length];
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