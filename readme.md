# Random fake User-Agent for nodejs

Most code com from [fake-user-agent](https://github.com/thiennq/fake-user-agent#readme)

Just random another package for generate a fake userAgent to bypass some guys

## How to install
```bash
npm install random-fake-user-agent
```

## How to use
```javascript
const fakeUa = require('fake-useragent');
console.log(fakeUa());
```

## In the real world ^o^

```javascript
const fakeUa = require('fake-useragent');
const request = require('request');

var url = 'https://www.google.com.vn/search?safe=off&hl=en&q=hello';
var headers = {
  'User-Agent': fakeUa()
};
request.get({ url: url, headers: headers }, function (e, r, body) {
  console.log(r, body)
});

```
