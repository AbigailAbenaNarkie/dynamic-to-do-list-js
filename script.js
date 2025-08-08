// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  /**
   * Adds a new task to the task list
   */
  function addTask() {
    // Get trimmed input value
    const taskText = taskInput.value.trim();

    // Validate input is not empty
    if (taskText === '') {
      alert('Please enter a task');
      return;
    }

    // Create a new list item for the task
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a remove button for the task
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // Attach click event to remove the task from the list
    removeBtn.onclick = () => {
      taskList.removeChild(li);
    };

    // Append the remove button to the list item
    li.appendChild(removeBtn);

    // Append the list item to the task list
    taskList.appendChild(li);

    // Clear the input field for new entries
    taskInput.value = '';
  }

  // Attach event listener for 'Add Task' button click
  addButton.addEventListener('click', addTask);

  // Attach event listener to input field for 'Enter' key press
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});

