// console.log("hello world!");

const addHeading = () => {
    const element = document.createElement("h2");
    element.setAttribute("class","heading2")
    element.innerText = "Append Child and creating new element"
    console.log(element);

    const existingDiv = document.getElementById("heading");
    console.log(existingDiv);
    existingDiv.appendChild(element);
}

// difference in innerText and innerHTML

const compare = () =>{
    const value = document.getElementById("test");
    console.log("innerHTML",value.innerHTML);
    console.log("innerText",value.innerText);
}


const taskList = [];

const addTask = () => {
    //save data in your array
    const name = document.getElementById("name").value;
    const tempObj = {
        id:1,
        taskName : name,
        completed: true
    }
    taskList.push(tempObj);
    addTaskOnScreen();
}


const addTaskOnScreen = ()=>{
    //show your objects of array as cards on screen
    const element = document.createElement("div");
    element.setAttribute("class", "child");

    element.innerText = taskList[taskList.length-1].taskName;
    console.log(taskList, element);
    
    const existingDiv = document.getElementById("tasks")
    existingDiv.appendChild(element);
}