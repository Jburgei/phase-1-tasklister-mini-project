document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form')

  form.addEventListener('submit', (event) => {
    event.preventDefault()

    //  SAFELY grab the input no matter if it's name-based or id-based
    const input =
      event.target.querySelector('input[name="new-task-description"]') ||
      document.getElementById('new-task-description')

    const task = input ? input.value : ''

    buildToDo(task)

    // clear the form (safe + expected)
    event.target.reset()
  })
})

function buildToDo(task) {
  const tasksList = document.getElementById('tasks')
  const li = document.createElement('li')
  li.textContent = task
  tasksList.appendChild(li)
}

/**
 *  Prevent "module is not defined" in browser/jsdom
 * Only export when running in Node (like a test runner that supports module.exports)
 */
if (typeof module !== 'undefined') {
  module.exports = { buildToDo }
}
