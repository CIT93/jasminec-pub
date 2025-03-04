const TBL = document.getElementById("movie-data");

const moviesArr = [
  { title: "The Wild Robot", 
    year: 2024, 
    rating: 8, 
    watched: 1 },
  {
    title: "Lord of the Rings:The Fellowship of the Rings",
    year: 2001,
    rating: 9,
    watched: 3
  },
  {
    title: "Lord of the Rings:The Return of the King",
    year: 2003,
    rating: 9,
    watched: 1
  },
  { title: "Cats", 
    year: 2019, 
    rating: 2, 
    watched: 0 },
];

function displayOutputMovies() {
  const output = document.getElementById("output");
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = ["Movie", "Year", "Rating", "Watched"];
  headingTextArr.forEach(function (text){
    const th = document.createElement("th");
    
    th.textContent = text;
    tr.appendChild(th);
  })
 
  
  moviesArr.forEach(function (movies) {
    TBL.innerHTML = "";
    if (movies.rating >= 6 || movies.watched <= 5) {
    const newH2 = document.createElement("H2");
    newH2.textContent = `What movie should I watch tonight!`;
    output.appendChild(newH2);
    const tr = document.createElement("tr");
    const tbody = document.createElement("tbody");
    
    const tdtitle = document.createElement("td");
    const tdyear = document.createElement("td");
    const tdrating = document.createElement("td");
    const tdwatched = document.createElement("td");
    
    tdtitle.textContent = movies.title;
    tdyear.textContent = movies.year;
    tdrating.textContent = movies.rating;
    tdwatched.textContent = movies.watched;
    
    tbody.appendChild(tr);
    tr.appendChild(tdtitle);
    tr.appendChild(tdyear);
    tr.appendChild(tdrating);
    tr.appendChild(tdwatched);
 
    }
  })
  
  table.appendChild(thead);
  TBL.appendChild(table);
}
  

displayOutputMovies();

// function renderTblHeading() {
//   Tbl.innerHtml = "";

//   headingArr.forEach(function(text){
//     const th = document.createElement("th");
//     th.textContent = text;
//     tr.appendChild(th);
//   })
//   thead.appendChild(thead);
  
// }

// function renderTbl(movie) {
//   const table = document.createElement("table");
//   const tbody = document.createElement("tbody");
//   const moviesArr = ["Lord of the Rings:The Fellowship of the Rings", 2001, 9, 3];
//   movie.forEach(function(obj){


//   })
// }