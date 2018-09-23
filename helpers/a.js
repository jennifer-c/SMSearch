const WolframAlphaAPI = require('wolfram-alpha-api');
const waApi = WolframAlphaAPI('LK9TLV-2JWH4EJ7WL');
const formatAnswer = answer => `${answer}`;
function getData() {
    waApi.getShort('20! seconds in years').then((data) => {
      return (formatAnswer(data));
    }).catch(console.error);
  }
console.log(getData())
var a = getData();
console.log(a);
waApi.getShort("what is pie").then(console.log).catch(console.error);

waApi.getShort('20! seconds in years').then((data) => {
  console.log(formatAnswer(data));
}).catch(console.error);

/*const formatAnswer = answer => `${answer}`;
waApi.getShort('20! seconds in years').then((data) => {
  var x = (formatAnswer(data));
  console.log(formatAnswer(data));
  console.log(x)
}).catch(console.error);*/