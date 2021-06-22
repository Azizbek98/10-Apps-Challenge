const noteElement = document.querySelector('.notes');
const editBtn = document.querySelector('.edit');
const deleteBtn = document.querySelector('.delete');

editBtn.addEventListener('click', () => {
    main.classList.toggle('hidden');
})