document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Load saved tasks on page load
  loadTasks();

  /**
   * Load tasks from Local Storage and render them
   */
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // false: don't save again
  }

  /**
   * Add a task to the list and optionally save to Local Storage
   * @param {string} taskText - Task description
   * @param {boolean} save - Save to localStorage (default true)
   */
  function addTask(taskText = taskInput.value.trim(), save = true) {
    if (taskText === '') {
      alert('Please enter a task');
      return;
    }

    // Create list item and set text
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create Remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');

    // Remove button event: remove from DOM and update storage
    removeBtn.onclick = () => {
      taskList.removeChild(li);
      updateLocalStorageAfterRemoval(taskText);
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Save task if needed
    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
      taskInput.value = ''; // Clear input only if user added task
    }
  }

  /**
   * Update Local Storage after removing a task
   * @param {string} taskText - Task to remove
   */
  function updateLocalStorageAfterRemoval(taskText) {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const updatedTasks = storedTasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  // Event listeners
  addButton.addEventListener('click', () => addTask());
  taskInput.addEventListener('keypress', event => {
    if (event.key === 'Enter') addTask();
  });
});

