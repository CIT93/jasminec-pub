import {FORM, TBL} from "./global.js";
import {cfpData, saveLS} from "./storage.js"

// Avg rendering - solution code
const calculateAvg = (data) => {
    const reduceTotal = data.reduce((sum, ea) => sum + ea.total, 0);
    const tableRef = document.getElementById("table-id")
    let newTR = tableRef.insertRow(-1)
    let newTD = newTR.insertCell(0)
    let newTD1 = newTR.insertCell(0)
    let newTD2 = newTR.insertCell(0)
    // let newTD3 = newTR.insertCell(0)
    // let newTD4 = newTR.insertCell(0)
    let newLabl = document.createTextNode(`Average Footprint`)
    let newText = document.createTextNode(`${Math.floor(reduceTotal/data.length)}`)
    newTD1.appendChild(newLabl);
    newTD.appendChild(newText);
}

const renderTblHeading = () =>{
    // TBL.innerHTML = "";
    const table = document.createElement("table");
    table.setAttribute("id", "table-id")
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["First","Last","Foodprint Total", "Actions"];
    headingTextArr.forEach(text =>{
        const th = document.createElement("th");
        th.textContent = text;
        tr.appendChild(th);
  
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    return table
}

const onUpdate = (index, data) =>{
    data.splice(index, 1);
    saveLS(data);
    renderTb1(data);
}

const renderTblBtn = (obj, index, data) =>{
    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    const btnDel = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnDel.textContent = "Del";
    td.appendChild(btnEdit);
    td.appendChild(btnDel);
    btnDel.addEventListener('click', e =>{
        onUpdate(index, data);
    })
    btnEdit.addEventListener('click', e =>{
        FORM.firstName.value = obj.first;
        FORM.lastName.value = obj.last;
        FORM.householdm.value = obj.houseMembers;
        FORM.houses.value = obj.houseSize;
        FORM.foodc.value = obj.foodChoice;
        FORM.foodsc.value = obj.foodSource;
        FORM.dishw.value = obj.dishWasher;
        FORM.washm.value = obj.washMachine;
        FORM.itempurch.value = obj.purchases;
        FORM.wasteprod.value = obj.waste;
        FORM.glass.checked = obj.recycle.glass;
        FORM.plastic.checked = obj.recycle.plastic;
        FORM.steel.checked = obj.recycle.steel;
        FORM.paper.checked = obj.recycle.paper;
        FORM.food.checked = obj.recycle.food;
        FORM.aluminum.checked = obj.recycle.aluminum;
        FORM.personalCar.value = obj.car;
        FORM.publicT.value = obj.bus;
        FORM.flight.value = obj.plane;
        onUpdate(index, data);
    })
    return td; 
}

const renderTblBody = data =>{
    const tbody = document.createElement("tbody");
    data.forEach((obj, index) =>{
        console.log(index);
        const tr = document.createElement("tr");
        const keys = ["first", "last", "total"]
        keys.forEach(key => {
                console.log("built td")
                const td = document.createElement("td");
                td.textContent = obj[key];
                tr.appendChild(td);
        })
        const td = renderTblBtn(obj, index, data);
        tr.appendChild(td);
        tbody.appendChild(tr);
        
    });


    return tbody;
}

const renderTb1 = data =>{
    TBL.innerHTML = "";
    if(data.length !== 0) {
        const table = renderTblHeading();
        const tbody = renderTblBody(data);
        table.appendChild(tbody);
        console.log(table);
        TBL.appendChild(table); 
        calculateAvg(data);
        // addRow("tab-data")
    }
 

};



export {renderTb1, renderTblHeading};