// // console.log("Hello world");

// {/* <h2>Hello</h2> */}
// const addHeading = () => {
//     //creating element
//     const element = document.createElement("div");
//     element.setAttribute("class","heading2");
//     element.innerText = "Elevation Students"
//     console.log(element);


//     //get element on screen.
//     const emptyDiv = document.getElementById("newHeading");
//     emptyDiv.appendChild(element);

//     // const button = document.getElementById("button");
// }

// const accessingNewElement = () =>{
//     const newHeading = document.getElementById("heading2").innerText;
//     console.log(newHeading);
// }


var taskList = [];


function addTask () {
    const inputField = document.getElementById("task").value;
    // console.log(inputField);

    const tempObj = {
        name : inputField
    };

    taskList.push(tempObj);

    console.log(taskList);
    addTaskOnScreen();
}

function addTaskOnScreen () {
    const newCard = document.createElement("div");
    newCard.setAttribute("class", "child");

    newCard.innerText = taskList[taskList.length-1].name
    
    document.getElementById("parent").appendChild(newCard);
}