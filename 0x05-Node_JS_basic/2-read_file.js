const fs = require('fs');

function countStudents(path) {
  try {
    let data = fs.readFileSync(path, 'utf8');
    data = data.split('\n');
    let length = data.length - 1;
    if (data[length].length === 0) {
      length -= 1;
    }
    console.log(`Number of students: ${length}`);
    const arr = [];
    for (let i = 1; i <= length; i += 1) {
      arr.push(data[i].split(','));
    }
    const uniqueFields = [...new Set(arr.map((item) => item[3]))];
    for (let i = 0; i < uniqueFields.length; i += 1) {
      const result = arr.filter((items) => items[3] === uniqueFields[i]);
      const names = result.map((name) => name[0]).join(', ');
      console.log(`Number of students in ${uniqueFields[i]}: ${result.length}. List: ${names}`);
    }
  } catch {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
