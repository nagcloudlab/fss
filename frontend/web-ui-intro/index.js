


// using DOM Api
let cardBody = document.querySelector('.card-body');
let greetBtn = document.querySelector('.btn-primary');
let hideBtn = document.querySelector('.btn-danger');
let showBtn = document.querySelector('.btn-success');

greetBtn.addEventListener('click', function () {
    cardBody.innerHTML = 'Hello, Good Morning!';
});

hideBtn.addEventListener('click', function () {
    cardBody.style.display = 'none';
});

showBtn.addEventListener('click', function () {
    cardBody.style.display = 'block';
}); 


const top5TodosBtn = document.querySelector('#top5-todos');
top5TodosBtn.addEventListener('click', function () { 
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos?_limit=5', true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const todos = JSON.parse(xhr.responseText);
            const todoRows=todos.map(todo => {
                const todoRow = `
                    <tr>
                        <td>${todo.id}</td>
                        <td>${todo.title}</td>
                        <td>${todo.completed}</td>
                    </tr>
                `;
                return todoRow;
            });
            document.querySelector('#todos').innerHTML = todoRows.join('');
        }
    };
});