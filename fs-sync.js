const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/firstfile.txt', 'utf8');

const second = readFileSync('./content/secondfile.txt', 'utf8');

writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`);