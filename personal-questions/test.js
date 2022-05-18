import fs from 'fs'
const values = fs.readFileSync('./input.txt', 'utf-8').split('\r\n')


values.shift();

values.map((item, i) => {const answer = item.replace("\r", "");console.log(`resposta ${i + 1}: ${answer}`); });
