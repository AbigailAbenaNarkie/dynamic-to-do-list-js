document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
      alert('Please enter a task');
      return;
    }

    // Create new list item and set text
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create remove button and add class using classList.add
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');

    // Assign onclick event to remove this task
    removeBtn.onclick = () => {
      taskList.removeChild(li);
    };

    // Append remove button to list item
    li.appendChild(removeBtn);

    // Append list item to task list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = '';
  }

  // Add event listener to the addButton for clicks
  addButton.addEventListener('click', addTask);

  // Add event listener to input for Enter key press
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});

