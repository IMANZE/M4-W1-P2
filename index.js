
function searchDeezer() {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem" ) 
   .then((response) => response.json())
    .then((dataEminem) => {
        console.log(dataEminem);
        const eminem = document.querySelector("#eminemSection")
        for (let index = 0; index < dataEminem.data.length; index++) {
            const eminemList = dataEminem.data[index];
            const eminemDiv = document.createElement("div")
            eminemDiv.classList.add("col")
            eminemDiv.innerHTML=` <div class="card" style="height: 100%; background-color:#10171F">
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



window.onload = function() {
 searchDeezer();

 
};