# interval

[![Greenkeeper badge](https://badges.greenkeeper.io/axetroy/interval.svg)](https://greenkeeper.io/)

patch for interval

[Online Demo](https://axetroy.github.io/interval/)

### Installation

```bash
npm install @axetroy/interval
```

### Usage

```javascript
import interval from '@axetroy/interval';

let number = 1;

let cancel = interval(() => {
  number = number + 1;
  // block thread
  if (number % 5 === 0) {
    alert(number);
  }
  // cancelable
  if (number >= 20) {
    cancel();
  }
}, 1000);
```

### Run the Demo

```bash
git clone https://github.com/axetroy/interval.git
yarn
yarn start
```

### License

The [MIT License](https://github.com/axetroy/interval/blob/master/LICENSE)