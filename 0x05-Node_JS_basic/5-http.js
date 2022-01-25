const http = require('http');

const fs = require('fs');

const hostname = '127.0.0.1';

const port = 1245;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, rows) => {
      if (!err) {
        const res = [];
        const data = `${rows}`.split('\n');
        let length = data.length - 1;
        res.push(`Number of students: ${length}`);
        if (data[length].length === 0) {
          length -= 1;
        }
        const arr = [];
        for (let i = 1; i <= length; i += 1) {
          arr.push(data[i].split(','));
        }
        const uniqueFields = [...new Set(arr.map((item) => item[3]))];
        for (let i = 0; i < uniqueFields.length; i += 1) {
          const result = arr.filter((items) => items[3] === uniqueFields[i]);
          const names = result.map((name) => name[0]).join(', ');
          res.push(`Number of students in ${uniqueFields[i]}: ${result.length}. List: ${names}`);
        }
        resolve(res);
      } else {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

const app = http.createServer((req, res) => {
  const { url } = req;
  const path = process.argv.slice(2)[0];
  if (url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  }
  if (url === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    countStudents(path)
      .then((data) => {
        res.end(`This is the list of our students\n${data.join('\n')}`);
      })
      .catch((error) => {
        res.end(error);
      });
  }
});

app.listen(port, hostname, () => {
});

module.exports = app;
