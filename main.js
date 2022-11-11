let myLeads = ["Dgdf", "xfvfbd", "fdgdf"]
const inputBtn = document.getElementById("input-btn")

const inputEl = document.getElementById("input-el")

const ulEl = document.getElementById("ul-El")


inputBtn.addEventListener('click', function(){
    myLeads.push(inputEl.value)
})

for(let i = 0; i < myLeads.length; i++){
    // let newLi = document.createElement("li")
    // let text = document.createTextNode("")
    // newLi.append(text)
    // ulEl.append(newLi)
    ulEl.innerHTML = "<li>" + myLeads[i] + "</li>"
}