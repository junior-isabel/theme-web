const todo = [
  {
    title: 'todo 1',
    description: 'production make'
  },
  {
    title: 'todo 2',
    description: 'i don\'t like you, never never'
  },
  {
    title: 'todo 3',
    description: 'eu amo a vida eu levo nem... você não sabe de nada!',
    img: './images/profile.png'
  }
]


const ui = document.querySelector('#todo-list')


todo.forEach(task => {
  let elm = document.createElement('li')
  const card = elm.appendChild(document.createElement('app-card'))
  card.setAttribute('class', 'primary-color')
  card.setAttribute('data-title', task.title)
  card.setAttribute('data-description', task.description),
  task.img && card.setAttribute('src', task.img)
  ui.appendChild(elm)
})