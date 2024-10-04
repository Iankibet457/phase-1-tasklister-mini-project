document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById("create-task-form")
  // console.log(form)
  form.addEventListener("submit",function(e){
    e.preventDefault()
    let myValue = document.getElementById("new-task-description").value
    // console.log(myValue)
    let user_name = document.getElementById("user").value.toUpperCase()
    // console.log(user_name)
    let list = document.getElementById("tasks")
    // console.log(list)
    let listItem = document.createElement("li")
    listItem.textContent = `${user_name}  :  ${myValue}`
    list.appendChild(listItem)
    let completed = document.createElement("button")
    completed.textContent = "Done"
    listItem.appendChild(completed)
    completed.addEventListener("click",function(){
      listItem.style.color = "blue"
    })
    let remove = document.createElement("button")
    remove.textContent = "delete"
    listItem.appendChild(remove)
    remove.addEventListener("click" , function(){
      this.parentElement.remove()
    })
    form.reset()
  })
});
