let addBtn = document.querySelector('.add-btn');
let todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', () => {
  let task = prompt('Masukkan hal yang harus dilakukan');
  if (task) {
    let li = document.createElement('li');
    li.textContent = task;

    li.addEventListener('click', () => {
      let confirmed = confirm('Sudah mengerjakan tugas ini?');
      if (confirmed) {
        li.style.textDecoration = 'line-through';
        li.style.opacity = '0.6';
      }
    });

    todoList.appendChild(li);
  }
});
