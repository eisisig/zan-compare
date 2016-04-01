# zan compare

I needed a small lib to compare a shape of an object to predefined validation object. We were planning on using zan for propTypes so with this we could use zan to compare 2 objects and validate.

See **zan** for more info [zan](https://github.com/kolodny/zan)

## Usage

### compare(shape, data [, returnErrors:bool])

```javascript
const zan = require('zan');
const compare = require('zan-compare');

const { recursive, types } = zan;
const { number, string } = types;

const shape = recursive({
	age: number,
	name: string,
	emails: [string]
});

const data = {
	age: 32,
	name: 'Eisi Sig',
	emails: false
};

const isValid = compare(shape, data);
// isValid = false, emails is expected to be an array
```
