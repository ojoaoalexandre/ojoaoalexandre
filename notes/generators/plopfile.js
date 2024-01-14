const fs = require('node:fs')
const path = require('node:path')

const pathCourses = path.resolve(__dirname, "../courses")
const courses = fs.readdirSync(pathCourses)

const pathMilestones = path.resolve(__dirname, "../milestones")
const milestones = fs.readdirSync(pathMilestones)

module.exports = (plop) => {
  plop.setGenerator('Article', {
    description: 'Starting a new article',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the title of book?'
      }
    ],
    actions: function () {
      const pathToBooks = path.resolve(__dirname, '../books')
      const countFiles = fs.readdirSync(pathToBooks).length
      const versionFile = (countFiles + 1).toString().padStart(4, "0")

      return [
        {
          type: 'add',
          path: `../books/${versionFile}_{{snakeCase name}}.md`,
          templateFile: 'templates/book.md.hbs'
        }
      ]
    }
  })

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
      const pathToBooks = path.resolve(__dirname, '../books')
      const countFiles = fs.readdirSync(pathToBooks).length
      const versionFile = (countFiles + 1).toString().padStart(4, "0")

      return [
        {
          type: 'add',
          path: `../books/${versionFile}_{{snakeCase name}}.md`,
          templateFile: 'templates/book.md.hbs'
        }
      ]
    }
  })

  plop.setGenerator('Course', {
    description: 'Starting a new course or a new chapter',
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
      const newCourse = data.course === 'Add a New Course'
      const pathToBooks = newCourse ? path.resolve(__dirname, `../courses`) : path.resolve(__dirname, `../courses/${data.course}`)
      const countFiles = fs.readdirSync(pathToBooks).length
      const versionFile = (countFiles + 1).toString().padStart(4, "0")

      if (newCourse) {
        return [
          {
            type: 'add',
            path: `../courses/${versionFile} {{ name }}/0001_README.md`,
            templateFile: 'templates/book.md.hbs'
          }
        ]
      }

      return [
        {
          type: 'add',
          path: `../courses/{{ course }}/${versionFile}_{{snakeCase name}}.md`,
          templateFile: 'templates/book.md.hbs'
        }
      ]
    }
  })

  plop.setGenerator('Milestone', {
    description: 'Starting a new milestone or a new month',
    prompts: [
      {
        type: 'list',
        name: 'milestone',
        message: 'Choose a milesone',
        choices: [...milestones, 'Add a New Milestone']
      }, {
        type: 'input',
        name: 'name',
        message: 'Whats the milestone?'
      }
    ],
    actions: function (data) {
      const newMilestone = data.milestone === 'Add a New Milestone'
      const pathToBooks = newMilestone ? path.resolve(__dirname, `../milestones`) : path.resolve(__dirname, `../milestones/${data.milestone}`)
      const countFiles = fs.readdirSync(pathToBooks).length
      const versionFile = (countFiles + 1).toString().padStart(4, "0")

      if (newMilestone) {
        return [
          {
            type: 'add',
            path: `../milestones/${versionFile} {{ name }}/0001_README.md`,
            templateFile: 'templates/book.md.hbs'
          }
        ]
      }

      return [
        {
          type: 'add',
          path: `../milestones/{{ milestone }}/${versionFile}_{{snakeCase name}}.md`,
          templateFile: 'templates/book.md.hbs'
        }
      ]
    }
  })
}