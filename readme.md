# 🍃 Breeze ID
**Easily generate unique, human-first IDs**

[![GitHub Repo stars](https://img.shields.io/github/stars/tzwel/breezeid?style=flat&logo=Github&label=Star%20on%20Github&color=0e8c16)](https://github.com/tzwel/breezeid)
<a href="https://ko-fi.com/tzwel">
  <img src="https://img.shields.io/badge/support%20me%20on-ko--fi-pink?logo=ko-fi&logoColor=pink&logoWidth=20&style=flat"/>
</a>

Breeze ID is a library that generates unique IDs of any length meant to be easily communicated via speech, that contain no profanities and consist of unambigous characters that can be read easily. Breeze ID's goal is to eliminate human error and still be cryptographically secure.

Breeze ID is best used wherever your IDs:
- are exposed to end users (for example: public user IDs, error codes... Remember: no profanities!)
- need to be easily communicated via speech
- need to be URL safe
- need to be unique (you can increase the length to improve uniqueness)

But Breeze ID will perform great in any other context too. These are just its strong parts.

## Install
```
npm i breezeid
```

## Use
```javascript
const { breezeid } = require('breezeid') // or { BreezeID }

// Get ID of default (16) length
breezeid() // => 9NU6-XQLZ-BDIH-6HKE

// Specify custom length (excluding hyphens):
breezeid(8) // => Q228-VQUR

```

### Breeze ID is

## For humans
Breeze ID uses an alphabet carefully designed to be easily read and said.

Here's an example ID: `WQYW-3AWT-X4R2-97KC`. (Notice the uppercasing. It's intentional as I find them easier to read and the alphabet was designed with them in mind, but lowercasing the IDs surely makes them look better. Go with whatever you want.)

Breeze ID automatically inserts hyphens every four characters for easier reading.

The characters used are unambigous, meaning they can't be confused between each other. For example, `1` could be confused with `I`, so `1` is absent from the alphabet.

Breeze ID also blocks profanities by default. It uses an efficient algorithm that at first tries to regenerate the detected profane part of an ID (this succeeds almost every time). However, if it generates another profanity, the profane part is just reversed to omit unecessary calls to the OS. This makes Breeze ID completely **profanity free**.

## Unique
### Collisions
You would need to generate 156 *billion* IDs with default settings to reach 1% probability of collision.If you were to generate 1000 IDs every hour non-stop, it would take you ~18 thousand years. 

But these numbers can still be improved - if you generate Breeze IDs of `24` length, reaching 1% probability of collision while generating 1000 ids per **second** would take ~5 **million** years. If you were to care about 50% probability (which is common when testing random ID generating libraries), this would be ~43 million years.

### Entropy
Breeze ID uses `crypto.randomBytes` internally, meaning you get cryptographically secure entropy from your OS.
The characters from the alphabet are then picked by the `modulo` operator. There's no modulo bias introduced as the carefully picked alphabet consists of exactly 32 characters.

## URL safe
Breeze ID is completely safe to use in URLs. No need for any encoding, it's built in. 

## Performant
Breeze ID doesn't make unnecessary calls for entropy to your OS every time you generate an ID. Instead, it asks for entropy in big batches only when it needs to.