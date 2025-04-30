import {FORM, TBL} from "./global.js";
import {cfpData, saveLS} from "./storage.js"

const renderTblHeading = () =>{
    // TBL.innerHTML = "";
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["Name", "HouseHold", "HouseSize", "FoodChoice", "Footprint", "Action"];
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
        FORM[1].value = obj.first;
        FORM[2].value = obj.last;
        FORM[3].value = obj.houseMembers;
        FORM[4].value = obj.houseSize;
        FORM[5].value = obj.foodChoice;
        onUpdate(index, data);
    })
    return td; 
}

const renderTblBody = data =>{
    const tbody = document.createElement("tbody");
    data.forEach((obj, index) =>{
        console.log(index);
        const tr = document.createElement("tr");
        const keys = ["first", "houseMembers", "houseSize", "foodChoice", "total"]
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

        addRow("tab-data")
    }
 

};

// rendering average
const displayAvg = () => {
    // const mapArr = cfpData.map((data) => {
    //     return data.total
    // })

    const total = cfpData.reduce((sum, fpScore) => sum + fpScore.total, 0)
    // console.log(total)
    const totalAvg = total/cfpData.length;
    // console.log(totalAvg)
    return totalAvg
}

const addRow = () => {
    const tableRef = document.getElementById("tableId")

    let newRow = tableRef.insertRow(-1)
    let newCella = newRow.insertCell(0)
    let newCellb = newRow.insertCell(1)

    let avgNum = displayAvg()
    let newText = document.createTextNode("FP avg score")
    newCella.appendChild(newText)
    let textAvg = document.createTextNode(avgNum)
    newCellb.appendChild(textAvg)
}



export {renderTb1, renderTblHeading};