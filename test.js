var fs = require('fs')

fs.readFile('./test.txt', (error, data) => {
  if (error) throw error;
  console.log(JSON.parse(data));
});
