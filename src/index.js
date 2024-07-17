const submit = document.querySelector('input[type=submit]')

// Adding a new task below the button and removing it 
function handleNewTask(task) {
  const li = document.createElement('li')
  const removeTask = document.createElement('button')
  removeTask.textContent = 'x'
  li.textContent = task + ' '
  li.appendChild(removeTask)
  document.querySelector('#tasks').appendChild(li)

  // Removing a task that has been added 
  removeTask.addEventListener('click', e => {
    e.target.parentNode.remove()
  })
}

// Adding a new task after click
submit.addEventListener('click', function(e){
  e.preventDefault()
  const inputValue = document.querySelector('#new-task-description')

  // Handling a new task 
  handleNewTask(inputValue.value)
})