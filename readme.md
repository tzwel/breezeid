# 🍃 Breeze ID
**Easily generate human-first IDs**

Breeze ID is a library that generates unique IDs of any length meant to be easily communicated via speech, that contain no profanities and consist of unambigous characters that can be read easily. Breeze ID's goal is to eliminate human error and still be cryptographically secure.

Breeze ID is best used wherever your IDs:
- are exposed to end users (for example: public user IDs, error codes... Remember: no profanities!)
- need to be easily communicated via speech
- need to be URL safe
- need to be unique (you can increase the length to improve uniqueness)

But Breeze ID will perform great in any other context too. These are just its strong parts.

## Install
```
npm i @tzwel/breezeid
```

## Use
```javascript
const { breezeid } = require('@tzwel/breezeid') // or { BreezeID }

// Get ID of default (16) length
breezeid() // => 9NU6-XQLZ-BDIH-6HKE

// Specify custom length (excluding hyphens):
breezeid(8) // => Q228-VQUR

```

### Breeze ID is

## For humans
Breeze ID uses an alphabet carefully designed to be easily read and said.

Here's an example ID: `WQYW-3AWT-X4R2-97KC`. (Notice the uppercasing. It's intentional as I find them easier to read and the alphabet was designed with them in mind, but lowercasing the IDs surely makes them look better. Go with whatever you want.)

Breeze Id automatically inserts hyphens every four characters for easier reading.

The characters used are unambigous, meaning they can't be confused between each other. For example, `1` could be confused with `I`, so `1` is absent from the alphabet.

Breeze ID also blocks profanities by default. It uses an efficient algorithm that at first tries to regenerate the detected profane part of an ID (this succeeds almost every time). However, if it generates another profanity, the profane part is just reversed to omit unecessary calls to the OS. This makes Breeze ID completely **profanity free**.

## Unique
Breeze ID uses `crypto.randomBytes` internally, meaning you get cryptographically secure entropy from your OS.
The characters from the alphabet are then picked by the `modulo` operator. There's no modulo bias introduced as the carefully picked alphabet consists of exatly 32 characters.

## URL safe
BreezeID is completely safe to use in URLs. No need for any encoding, it's built in. 