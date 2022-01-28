const readDatabase = require('../utils');

const path = process.argv.slice(2)[0];

class StudentsController {
  static getAllStudents(request, response) {
    let resp = 'This is the list of our students\n';
    const arr = [];
    readDatabase(path)
      .then((students) => {
        for (const [key, value] of Object.entries(students)) {
          arr.push(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
        }
        resp = resp.concat(arr.join('\n'));
        response.status(200).send(resp);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    let resp;
    const { major } = request.params;
    if (major === 'CS' || major === 'SWE') {
      readDatabase(path)
        .then((students) => {
          for (const [key, value] of Object.entries(students)) {
            if (major === key) {
              resp = `List: ${value.join(', ')}`;
              break;
            }
          }
          response.status(200).send(resp);
        })
        .catch(() => {
          response.status(500).send('Cannot load the database');
        });
    } else {
      response.status(500).send('Major parameter must be CS or SWE');
    }
  }
}

module.exports = StudentsController;
