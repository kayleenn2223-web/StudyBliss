document.addEventListener('DOMContentLoaded', () => {
    // Simple typewriter effect for the hero title
    const typewriterElement = document.querySelector('.typewriter');
    if (typewriterElement) {
        const text = typewriterElement.innerHTML;
        typewriterElement.innerHTML = '';
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                typewriterElement.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 90);
            }
        }
        // The animation is handled by CSS, this is a fallback/alternative JS-driven approach
        // To use the pure CSS version, you can remove this JS
    }

    // To-Do List Logic
    const todoInput = document.getElementById('todo-input');
    const addTodoBtn = document.getElementById('add-todo-btn');
    const todoList = document.querySelector('.todos');

    if (todoInput && addTodoBtn && todoList) {
        addTodoBtn.addEventListener('click', addTodo);
        todoList.addEventListener('click', handleTodoClick);
    }

    function addTodo() {
        const taskText = todoInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.classList.add('todo-item');
        
        const checkboxId = `todo${Date.now()}`;

        li.innerHTML = `
            <input type="checkbox" id="${checkboxId}">
            <label for="${checkboxId}">${taskText}</label>
            <button class="delete-todo">×</button>
        `;

        todoList.appendChild(li);
        todoInput.value = '';
    }

    function handleTodoClick(e) {
        if (e.target.classList.contains('delete-todo')) {
            const item = e.target.parentElement;
            item.style.animation = 'fadeOut 0.3s ease';
            item.addEventListener('animationend', () => item.remove());
        }

        if (e.target.type === 'checkbox') {
            const item = e.target.parentElement;
            item.classList.toggle('completed');
        }
    }

    // Journal Logic
    const saveBtn = document.querySelector('.btn-save');
    const journalTextarea = document.querySelector('.journal-textarea');
    const moodSelectors = document.querySelectorAll('.mood-selector span');

    if (saveBtn && journalTextarea) {
        saveBtn.addEventListener('click', () => {
            localStorage.setItem('journalEntry', journalTextarea.value);
            alert('Journal entry saved!');
        });

        const savedEntry = localStorage.getItem('journalEntry');
        if (savedEntry) {
            journalTextarea.value = savedEntry;
        }
    }
    
    if(moodSelectors) {
        moodSelectors.forEach(mood => {
            mood.addEventListener('click', () => {
                moodSelectors.forEach(m => m.classList.remove('selected'));
                mood.classList.add('selected');
            });
        });
    }
});
