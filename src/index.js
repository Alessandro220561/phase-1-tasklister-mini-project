document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    newToDo(event.target.new_task_description.value)
    form.reset()
  })

  });

  function newToDo(todo){
    let p = document.createElement('p')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    p.textContent =  `${todo} `
    btn.textContent = 'x'
    p.appendChild(btn)
    document.querySelector('#list').appendChild(p) 
    console.log(p)
  }

  function handleDelete(e){
    e.target.parentNode.remove()
  }