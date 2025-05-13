import { FORM, TBL } from "./global.js";
import { saveLS } from "./storage.js";

const prodTblHeading = () => {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingArr = [
    "Activity",
    "Activity Hour(s)",
    "Productivity Score",
    "Feedback",
    "Action",
  ];
  headingArr.forEach(function (text) {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table;
};

const proUpdate = (index, data) => {
  data.splice(index, 1);

  saveLS(data);
  prodTbl(data);
};

const prodTblBtn = (obj, index, data) => {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);

  btnDel.addEventListener("click", function (e) {
    proUpdate(index, data);
  });
  btnEdit.addEventListener("click", function (e) {
    FORM[1].value = obj.activityType;
    FORM[2].value = obj.activityHour;
    proUpdate(index, data);
  });

  return td;
};

const prodTblBody = (data) => {
  const tbody = document.createElement("tbody");
  data.forEach(function (obj, index) {
    const tr = document.createElement("tr");
    const keys = ["activityType", "activityHour", "total", "feedback"];
    keys.forEach((key) => {
      const td = document.createElement("td");
      td.textContent = obj[key];
      tr.appendChild(td);
    });
    const td = prodTblBtn(obj, index, data);

    tr.appendChild(td);
    tbody.appendChild(tr);
  });
  return tbody;
};

const prodTbl = (data) => {
  TBL.innerHTML = "";
  if (data.length !== 0) {
    const table = prodTblHeading();
    const tbody = prodTblBody(data);
    console.log(tbody);
    table.appendChild(tbody);
    TBL.appendChild(table);
  }
};

export { prodTbl, prodTblHeading };
