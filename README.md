# Deunicode

A simple function to replace unicode characters with their ascii counterparts. Most of the replacements come from [twilio](https://www.twilio.com/docs/messaging/services/smart-encoding-char-list).

## Installation

```bash
npm install deunicode
```

## Quickstart

```js
import { deunicode } from 'deunicode';

const text = '\uFF28\u1D07\u029f\u029f\u1D0F \u1D21\u1D0F\u0280\u029f\u1D05\uFE57';

console.log(text) // Ｈᴇʟʟᴏ ᴡᴏʀʟᴅ﹗
console.log(deunicode(text)) // HELLO WORLD!
```
