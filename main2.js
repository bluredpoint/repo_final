// Получаем элемент для ввода задачи
const input = document.querySelector('.add-task input');

// Получаем кнопку для добавления задачи
const addButton = document.querySelector('.add-task .plus');

// Получаем контейнер для отображения задач
const tasksContainer = document.querySelector('.tasks-content');

// Получаем элементы для отображения счётчиков задач и выполненных задач
const taskCount = document.querySelector('.task-stats .tasks-count span');
const completedCount = document.querySelector('.task-stats .tasks-completed span');

function addTask() {
  // Получаем текст из поля ввода
  const task = input.value;

  // Если текст не пустой, добавляем задачу в контейнер
  if (task.trim() !== '') {
    const taskElement = document.createElement('span');
    taskElement.innerText = task;
    tasksContainer.appendChild(taskElement);

    // Добавляем кнопку «удалить»
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Удалить';
    deleteButton.classList.add('delete');
    taskElement.appendChild(deleteButton);
    updateCounts();

    // Очищаем поле ввода
    input.value = '';
  }
}

function deleteTask(task) {
  task.remove();
  updateCounts();
}

function markTaskCompleted(task) {
  task.classList.add('finished');
  updateCounts();
}

function updateCounts() {
  // Считаем количество задач
  const tasks = tasksContainer.querySelectorAll('span');
  taskCount.innerText = tasks.length;

  // Считаем количество выполненных задач
  let completedTasks = 0;
  tasks.forEach(task => {
    if (task.classList.contains('finished')) {
      completedTasks++;
    }
  });
  completedCount.innerText = completedTasks;

  // Проверяем наличие задач
  if (tasks.length > 0) {
    // Удаляем блок с текстом «Нет задач для отображения»
    document.querySelector('.no-tasks-message').remove();
  } else {
    // Добавляем блок с текстом «Нет задач для отображения», если задач нет
    document.querySelector('.tasks-content').insertAdjacentHTML('beforeend', '<span class="no-tasks-message">Нет задач для отображения</span>');
  }
}

// Привязываем события
addButton.addEventListener('click', addTask);
tasksContainer.addEventListener('click', (event) => {
  if (event.target.tagName === 'SPAN') {
    markTaskCompleted(event.target);
  } else if (event.target.classList.contains('delete')) {
    deleteTask(event.target.parentElement);
  }
});