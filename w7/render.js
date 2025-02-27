const TBL = document.getElementById("tab-data");

function renderTblHeading () {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["Name", "Cfp Total"];
    headingTextArr.forEach(function(text){
        const th = document.createElement("th");
        th.textContent = text;
        tr.appendChild(th);
  
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    return table
}

function renderTb1(data) {
    const table = renderTblHeading();
    const tbody = document.createElement("tbody");
    const tr = document.createElement("tr");
    data.forEach(function(text){
        const tr = document.createElement("tr");
        const tdName = document.createElement("td");
        tdName.textContent = text.name;
        const tdTotal = document.createElement("td");
        tdTotal.textContent = text.total;
        tbody.appendChild(tr);
        tr.appendChild(tdName);
        tr.appendChild(tdTotal);
    });
    const td = document.createElement("td");
    // const btnEdit = document.createElement("button");
    // const btnDel = document.createElement("button");
    // btnEdit.textContent = "Edit";
    // btnDel.textContent = "Del";

    // td.appendChild(btnEdit);
    // td.appendChild(btnDel);
    tr.appendChild(td);
    table.appendChild(tbody);
    console.log(table);


    
    TBL.appendChild(table);
}

export {renderTb1, renderTblHeading};