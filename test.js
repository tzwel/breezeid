/*



	this file contains many unorganized tests
	here be dragons



*/

// wertyuopasdfghjkzxcvbn12356789WRTYUOPASFGHJKLZXCVBN
// 367CDFGHJKMNPRTWX

// function get(length = 16) {
// 	return new Promise((resolve, reject) => {
// 		crypto.randomBytes(length, (err, buf) => {
// 			if (err) throw err;

// 			let result = '';
// 			for (let i = 0; i < length; i++) {
// 				result += charset[buf[i] % charset.length];
// 			}
// 			resolve(insertHyphens(result))
// 		});
// 	})
// }




// const profanities = ['fuck', 'boob', 'spit', 'suck', 'cum', "5h1t", "5hit", "anus", "arse", "cock", "clit", "cunt", "dick", "nigg", "gays", "kike", "hell", "homo", "nips", "peni5", "piss", "slut", "slop", 'yaoi', 'yiff', 'jerk', 'bewb', 'n1gg', 'thug', 'lgbt', 'dupa', 'nazi', 'oral', 'anal', 'poop', 'scat', 'sexy', 'scum', 'smut', ' tits', 'twat', 'rape', 'jerk', 'fagg', 'turd', 'spic', 'kike', 'porn', 'lube',"0rgasm","1d10t","1d1ot","1di0t","1diot","1mbec11e","1mbec1le","1mbeci1e","1mbecile","ah01e","ah0le","aho1e","ahole","ana1","anal","anus","arse","b00b","b0ob","b1tch","bitch","bo0b","boob","c0ck","c11t","c1it","ch1nk","chink","cl1t","clit","cock","cracker","crap","cum","cunt","d11d0","d11do","d1ck","d1ld0","d1ldo","damn","di1d0","di1do","dick","dild0","dildo","dyke","enema","fag","fuck","id10t","id1ot","idi0t","idiot","imbec11e","imbec1le","imbeci1e","imbecile","j1zz","jerk","jizz","k1ke","kike","masturbat10n","masturbat1on","masturbate","masturbati0n","masturbation","n1gger","negr0","negro","nigger","orgasm","p00p","p0op","p0rn","pen1s","penis","po0p","poop","porn","pr1ck","prick","pussy","rape","retard","s1ut","sexy","sh1t","shit","slut","stup1d","stupid","sucker","test1c1e","test1cle","testic1e","testicle","turd","twat","vag1na","vagina","wank"]

const { breezeid } = require('./breezeid');
const {profanities} = require('./profanities')

let test = {}
function addCharacters(input) {
	if (input.includes('unde')) {
		console.log(input);
	}
	if (profanities.some(function(v) { return input.toLowerCase().indexOf(v) >= 0; })) {
		console.log(input)
		// .replaceAll('-', '')
	}
	for (let index = 0; index < input.length; index++) {
		if (test[input[index]]) {
			test[input[index]] += 1
		} else {
			test[input[index]] = 1
		}
	}
}
for (let index = 0; index < 50000; index++) {
	addCharacters(
		breezeid()
	)
}

console.log(test);

// for (let index = 0; index < 2200; index++) {
// 	const id = breezeid(127)
// 	if (id.includes('n')) {
// 		console.log(index, id);
// 	}
// }

