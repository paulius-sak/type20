const addButton = document.getElementById('add-button')
const taskInput = document.getElementById('task')
const taskWrapper = document.getElementById('task-wrapper')


const localStorageTasks = JSON.parse(localStorage.getItem('tasks'))


let tasks = localStorageTasks || []

const generateCards = () => {
    [...tasks].reverse().forEach((t) => {
        const taskCard = document.createElement("div")
        taskCard.setAttribute('class', 'task-card')

        taskCard.addEventListener('click', () => {
            const index = tasks.findIndex((taskObj) => {
                return taskObj.title === t.title
            })
            tasks[index].isDone = !tasks[index].isDone
            localStorage.setItem('tasks', JSON.stringify(tasks))

            taskStatus.classList.remove("done", "in-progress")
            taskStatus.classList.add(tasks[index].isDone ? "done" : "in-progress")

            taskCard.removeChild(taskStatus)
            taskCard.append(taskStatus)

            console.log("Clicked card index:", index)
            console.log("Updated Task:", tasks[index])
            console.log(tasks[index])

            taskWrapper.innerHTML = ''

            generateCards()
        })

        const taskTitle = document.createElement('div')
        taskTitle.innerText = t.title

        const taskStatus = document.createElement('div')
        taskStatus.classList.add('status-bubble')
        taskStatus.classList.add(t.isDone ? "done" : "in-progress")
        taskCard.classList.add(t.isDone ? "task-card-done" : "task-card-in-progress")

        const taskDate = document.createElement('h6')
        const formattedDate = t.creationDate.toLocaleString('en-GB', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
        })
    
        taskDate.innerText = formattedDate;

        taskCard.append(taskTitle)
        taskCard.append(taskDate)
        taskCard.append(taskStatus)

        taskWrapper.append(taskCard)
    })
}


const onAddTask = () => {
    const taskTitle = taskInput.value.trim() // Trim to remove leading and trailing whitespaces

    if (taskTitle.length < 3) {
        alert('Task title must be at least 3 characters long.')
        return
    }
    
    let task = {
        title: taskInput.value,
        isDone: false,
        creationDate: new Date,
    }

    localStorage.setItem('tasks', JSON.stringify(tasks))

    tasks.push(task)
    console.log(tasks)
    

    taskInput.value = ''
    taskWrapper.innerHTML = ''

    generateCards()
}

addButton.addEventListener('click', onAddTask)

generateCards()

