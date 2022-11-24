let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()

})



function renderLeads(){
    // const li = document.createElement("li")
    // li.innerHTML = "<a target = '_blank' href = https://" + myLeads[myLeads.length - 1] + ">" + myLeads[myLeads.length - 1] + "</a>"
    // ulEl.append(li)


    let listItems = ""
    for(let i = 0; i < myLeads.length; i++){
        listItems += `
            <li>
                <a href = "https://${myLeads[i]}.com" target = "_blank">www.${myLeads[i]}.com</a>
            </li>
        `
    }

    ulEl.innerHTML = listItems

}
