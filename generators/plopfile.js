const fs = require('node:fs')
const path = require('node:path')

const pathCourses = path.resolve(__dirname, "../notes/courses")
const courses = fs.readdirSync(pathCourses)

module.exports = (plop) => {
  plop.setGenerator('Book', {
    description: 'Starting a new book',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the title of book?'
      }
    ],
    actions: function () {
      const pathToBooks = path.resolve(__dirname, '../notes/books')
      const countFiles = fs.readdirSync(pathToBooks).length
      const versionFile = (countFiles + 1).toString().padStart(4, "0")

      return [
        {
          type: 'add',
          path: `../notes/books/${versionFile}_{{snakeCase name}}.md`,
          templateFile: 'templates/book.md.hbs'
        }
      ]
    }
  })

  plop.setGenerator('Course', {
    description: 'Starting a new module in course',
    prompts: [
      {
        type: 'list',
        name: 'course',
        message: 'Choose a course',
        choices: [...courses, 'Add a New Course']
      }, {
        type: 'input',
        name: 'name',
        message: 'Whats the title of this chapter or Course?'
      }
    ],
    actions: function (data) {
      let pathToBooks = path.resolve(__dirname, `../notes/courses`)

      if (data.course === 'Add a New Course') {
        const countFiles = fs.readdirSync(pathToBooks).length
        const versionFile = (countFiles + 1).toString().padStart(4, "0")

        return [
          {
            type: 'add',
            path: `../notes/courses/${versionFile} {{ name }}/0001_README.md`,
            templateFile: 'templates/book.md.hbs'
          }
        ]
      }

      pathToBooks = path.join(pathToBooks, data.course)
      const countFiles = fs.readdirSync(pathToBooks).length
      const versionFile = (countFiles + 1).toString().padStart(4, "0")

      return [
        {
          type: 'add',
          path: `../notes/courses/{{ course }}/${versionFile}_{{snakeCase name}}.md`,
          templateFile: 'templates/book.md.hbs'
        }
      ]
    }
  })
}