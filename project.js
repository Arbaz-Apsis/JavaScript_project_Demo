// const submit = function formSumit(){
//     console.log("submit my form")
// }
// console.log(submit);

let newArray = [];
const todoForm = document.querySelector(".main-div");
const todoText = document.querySelector(".main-div input[type = 'text']");
const todoEmail = document.querySelector(".main-div input[type = 'email']");
const todoTable = document.getElementById("info-table");
const todoBtn = document.querySelector(".button")
let selectedId = null;

// const trRow = document.querySelector("Date.now()");

// todoForm.addEventListener("display", (e) => {
//     // localStorage.setItem(newTodoText,newTodoEmail);
   
// })
//todoTable.innerHTML = localStorage.getItem("todo");


function createInitalTable(){
    console.log(localStorage.getItem("todo"));
    let todoList = JSON.parse(localStorage.getItem("todo") ) || [];
    todoTable.innerHTML =""
    // const row = document.createElement('tr');
    // //  console.log(todoList,"todlIst"); 
    todoList.map((e)=> {
        const row = document.createElement('tr');
        row.id = e.id;
        row.innerHTML =  `    <td>${e.name}</td>
        <td>${e.email}</td>
        <td><button class="todo-btn btn edit">Edit</button>
            <button class="todo-btn btn remove">Remove</button></td>
       `
       todoTable.append(row);
    });
}
createInitalTable();


// function updatetable() {
//     console.log(localStorage.getItem("todo"));
//     let todoList = JSON.parse(localStorage.getItem("todo") ) || [];
    
//     todoTable.innerHTML =""
//     todoList.map((e)=> {
//         const row = document.getElementsByClassName('.trow');
//         const targetTr = e.target.parentNode.parentNode;
//         if (targetTr.id === row.id) {
//         row.id = e.id;
//         row.innerHTML =  `    <td>${e.name}</td>
//         <td>${e.email}</td>
//         <td><button class="todo-btn btn edit">Edit</button>
//             <button class="todo-btn btn remove">Remove</button></td>
//        `
//         }else{
//             console.log("Not functioning");
//         }
//     });
// }



todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTodoText = todoText.value;
    const newTodoEmail = todoEmail.value;
  

    if(!selectedId){
        const id = Date.now().toString();
        const row = document.createElement('tr');
        let todo = {
            id:id,
            name:newTodoText,
            email: newTodoEmail
        };
       
       
        newArray = JSON.parse(localStorage.getItem("todo")) ?? [];

        console.log(newArray);
        newArray.push(todo);
        localStorage.setItem("todo",JSON.stringify(newArray));
        row.id = id;

        // selectedId = id;
        // row.innerHTML =    `    <td>${newTodoText}</td>
        //                         <td>${newTodoEmail}</td>
        //                         <td><button class="todo-btn btn edit">Edit</button>
        //                             <button class="todo-btn btn remove">Remove</button></td>
        //                        `
        // todoTable.append(row);
        // todoText.value = "";
        // todoEmail.value = "";
        
        // todoForm.addEventListener("display", (e) => {
        //     // localStorage.setItem(newTodoText,newTodoEmail);
        //     todoTable.innerHTML = localStorage.getItem("todo");
        // })
        createInitalTable();
        todoBtn.value = "Add";
        todoText.value = "";
        todoEmail.value = "";
       
    }else{
        console.log(selectedId);
        // const row = document.getElementById(selectedId);
        // const upTodoText = todoText.value;
        // const upTodoEmail = todoEmail.value;
       
        // row.innerHTML =    
        //     `    <td>${upTodoText}</td>
        //          <td>${upTodoEmail}</td>
        //          <td><button class="todo-btn btn edit">Edit</button>
        //          <button class="todo-btn btn remove">Remove</button></td>
        //     `
        // console.log(row);
        
        // const arrayUp =  JSON.parse(localStorage.getItem("todo")) 
        // console.log(arrayUp);
        // const targetTr = e.target.parentNode.parentNode;
        // console.log(targetTr);
        // let finalArray =  arrayUp.splice(targetTr)
        // console.log(finalArray);
        // localStorage.setItem('todo',JSON.stringify(finalArray))


        const row = document.getElementById(selectedId);
        if(row.id == selectedId) {
            // console.log("1");
            row.innerHTML = "";
            let upTodoText = todoText.value;
            let upTodoEmail = todoEmail.value;
       
        row.innerHTML =    
            `    <td>${upTodoText}</td>
                 <td>${upTodoEmail}</td>
                 <td><button class="todo-btn btn edit">Edit</button>
                 <button class="todo-btn btn remove">Remove</button></td>
            `
        // console.log(row);
        //     var up = JSON.parse(localStorage.getItem("todo"));
        //     up.push(row);
        //     console.log(up);  //remaining
        let todoList = JSON.parse(localStorage.getItem("todo") ) || [];
        console.log(todoList,"-------------------");
        const id = Date.now().toString();
        let todo = {
            id:id,
            name: upTodoText,
            email: upTodoEmail
        };
            const upd_obj = todoList?.map((obj) => {
                console.log(obj.id, selectedId);
                if (obj.id == selectedId) {

                    
                
                return {...obj, name:upTodoText, email:upTodoEmail};
                
                }
                
                return obj;
                
                });
                console.log(upd_obj);
                // upArray = JSON.parse(localStorage.getItem("todo")) ?? [];

                // console.log(upArray);
                // upArray.push(todo);
                localStorage.setItem("todo",JSON.stringify(upd_obj));
                row.id = id; 

            // localStorage.setItem('todo', JSON.stringify(up))


            // localStorage.setItem(JSON.parse(localStorage.getItem("todo")), row);
            // const up = JSON.parse(localStorage.getItem("todo"));
            // up.push(row);

            // console.log(localStorage.getItem("todo"));
         } else {
            console.log("2");
            // clientsArr.push(clientObj);
            // localStorage.setItem('Users', JSON.stringify(clientsArr));
         }
        // // updatetable();

        selectedId=null
        todoBtn.value = "Add";
        todoText.value = "";
        todoEmail.value = "";
      
    }
    // todoForm.addEventListener("value", (e) => {
    //     localStorage.setItem(todoText,todoEmail);
    //     todoTable.innerHTML = localStorage.getItem(value);
    // })
    
   
});

//////////////////// reomve ///////////////

todoTable.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove")) {
        const targetTr = e.target.parentNode.parentNode;
        targetTr.remove(); 
        // const removeTd =  localStorage.getItem("todo");
        // localStorage.removeItem(removeTd[0]);
        // console.log(localStorage.getItem("newArray"));
        console.log(localStorage.getItem("todo")); 
        const arrayTd =  JSON.parse(localStorage.getItem("todo")) 
        let finalArray= arrayTd.filter(i => i.id!==targetTr.id)
        localStorage.setItem('todo',JSON.stringify(finalArray))



///////////////////// update ////////////////////
        
    }
    if (e.target.classList.contains("edit")) {
       
        const editTr = e.target.parentNode.parentNode;
        // editTr.style.textDecoration = "line-through";
        console.log(e.target.parentNode.parentNode);
        selectedId = e.target.parentNode.parentNode.id
        console.log(e.target.parentNode.parentNode.childNodes)
        todoText.value = e.target.parentNode.parentNode.childNodes[1].innerText;
        todoEmail.value = e.target.parentNode.parentNode.childNodes[3].innerText;
        todoBtn.value = "Update";
    

        todoBtn.addEventListener("click", (e) => {
            if (e.target.classList.contains("button")) {
                todoBtn.value = "Add Todo";
                
            }
        })

        todoForm.addEventListener("value", (e) => {
                localStorage.setItem(todoText,todoEmail);
                todoTable.innerHTML = localStorage.getItem(value);
            })

    }

})


//Date.now()    
      // const newTr = document.createElement("tr");  
 // const newTrInnerHtml = `<tr    id="${id}" >
    //                   <td>${newTodoText}</td>
    //                   <td>${newTodoEmail}</td>
    //                   <td><button class="todo-btn btn edit">Edit</button>
    //                     <button class="todo-btn btn remove">Remove</button></td>
                    
    //                </tr>`;
    // console.log(newTrInnerHtml);

 // newTr.innerHTML = newTrInnerHtml;
    // todoTable.append(newTr);