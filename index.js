
function searchDeezerEminem() {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem" ) 
   .then((response) => response.json())
    .then((dataEminem) => {
        console.log(dataEminem);
        const eminem = document.querySelector("#eminemSection")
        for (let index = 0; index < dataEminem.data.length; index++) {
            const eminemList = dataEminem.data[index];
            const eminemDiv = document.createElement("div")
            eminemDiv.classList.add("col")
            eminemDiv.innerHTML=`<div class="card" style="height: 100%; background-color:#10171F">
            <img src="${eminemList.album.cover}" class="card-img-top img-fluid w-100" alt="...">
            <div class="card-body" style="height: 100%">
            <h5 class="card-title">${eminemList.title}</h5>
            <p class="card-text">${eminemList.title_short}</p>
            </div>
            </div>`
            eminem.appendChild(eminemDiv)
        }
        
    })
    .catch((err) => {
        console.log("rejeceted"); 
        console.log(err);
    });

}

function searchDeezerMetallica() {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica")
    .then((response) => response.json())
    .then((dataMetallica) => {
        console.log(dataMetallica);
        const metallica = document.querySelector("#metallicaSection")
        for (let index = 0; index < dataMetallica.data.length; index++) {
            const metallicaList = dataMetallica.data[index];
            const metallicaDiv = document.createElement("div")
            metallicaDiv.classList.add("col")
            metallicaDiv.innerHTML=`<div class="card" style="height: 100%; background-color:#10171F">
            <img src="${metallicaList.album.cover}" class="card-img-top img-fluid w-100" alt="...">
            <div class="card-body" style="height: 100%">
            <h5 class="card-title">${metallicaList.title}</h5>
            <p class="card-text">${metallicaList.title_short}</p>
            </div>
            </div>`
            metallica.appendChild(metallicaDiv)
        }
        
    })
    .catch((err) => {
        console.log("rejeceted"); 
        console.log(err);
    });

}

function searchDeezerQueen() {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica")
    .then((response) => response.json())
    .then((dataQueen) => {
        console.log(dataQueen);
        const queen = document.querySelector("#queenSection")
        for (let index = 0; index < dataQueen.data.length; index++) {
            const queenList = dataQueen.data[index];
            const queenDiv = document.createElement("div")
            queenDiv.classList.add("col")
            queenDiv.innerHTML=`<div class="card" style="height: 100%; background-color:#10171F">
            <img src="${queenList.album.cover}" class="card-img-top img-fluid w-100" alt="...">
            <div class="card-body" style="height: 100%">
            <h5 class="card-title">${queenList.title}</h5>
            <p class="card-text">${queenList.title_short}</p>
            </div>
            </div>`
            queen.appendChild(queenDiv)
        }
        
    })
    .catch((err) => {
        console.log("rejeceted"); 
        console.log(err);
    });

}


window.onload = function() {
 searchDeezerEminem();
 searchDeezerMetallica()
 searchDeezerQueen()
 
};