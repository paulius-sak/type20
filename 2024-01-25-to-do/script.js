const addButton = document.getElementById('add-button')
const taskInput = document.getElementById('task')
const taskWrapper = document.getElementById('task-wrapper')

const tasks = []

addButton.addEventListener('click', () => {
    const taskTitle = taskInput.value.trim(); // Trim to remove leading and trailing whitespaces

    if (taskTitle.length < 3) {
        // Display an error message or take appropriate action
        alert('Task title must be at least 3 characters long.');
        return // Stop execution if the validation fails
    }
    
    const task = {
        title: taskInput.value,
        isDone: false,
        creationDate: new Date,
    }



    tasks.push(task)
    console.log(tasks)
    console.log(taskTitle)

    taskInput.value = ''
    taskWrapper.innerHTML = ''

    tasks.reverse().forEach((t, index) => {
        const taskCard = document.createElement("div")
        taskCard.setAttribute('class', 'task-card')

        taskCard.addEventListener('click', () => {
            const index = tasks.findIndex((taskObj) => {
                return taskObj.title === t.title
            })
            tasks[index].isDone = !tasks[index].isDone
            taskStatus.classList.remove("done", "in-progress")
            taskStatus.classList.add(tasks[index].isDone ? "done" : "in-progress")

            taskCard.removeChild(taskStatus)
            taskCard.append(taskStatus)
            console.log("Clicked card index:", index)
            console.log("Updated Task:", tasks[index])
            console.log(tasks[index])
        })

        const taskTitle = document.createElement('div')
        taskTitle.innerText = t.title

        const taskStatus = document.createElement('div')
        taskStatus.classList.add('status-bubble')
        taskStatus.classList.add(t.isDone ? "done" : "in-progress")

        const taskDate = document.createElement('h6')
        const formattedDate = t.creationDate.toLocaleString('en-GB', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        });
    
        taskDate.innerText = formattedDate;

        taskCard.append(taskTitle)
        taskCard.append(taskDate)
        taskCard.append(taskStatus)

        taskWrapper.append(taskCard)
    })
})

