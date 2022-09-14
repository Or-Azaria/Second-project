const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "279a0c88bemsh7d1df5c89152f22p13ed07jsn546f7ffa7b12",
    "X-RapidAPI-Host": "current-ufc-rankings.p.rapidapi.com",
  },
};

let fightersRating = document.querySelector("#fighters");
fetch("https://current-ufc-rankings.p.rapidapi.com/", options)
  .then((response) => response.json())
  .then((response) => {
    let rankings = document.querySelector("#rankings");
    let search = document.querySelector("#input");
    let x = [response[0].fighters, response[1].fighters, response[2].fighters];

    let allFighters = response.map((obj, i) => {
      return obj.fighters;
    });
    console.log(allFighters);
    let totalFighters = allFighters.flat();

    // search for a fighter //

    function displayFilter(arr) {
      rankings.innerHTML = "";
      let displayFighter = arr.filter((obj) => {
        if (obj.fullName.toLowerCase().includes(search.value)) {
          return obj;
        }
      });
      displayFighter.forEach((obj) => {
        rankings.innerHTML += /* html */ `<h1 class="text-light">${obj.fighter_ranking}</h1> <ul>
        <li class="text-white list-unstyled py-3 fs-4">${obj.fullName}<a class="ps-2" href="${obj.url}"><button class="btn btn-outline-danger ">more information</button></a></li>
        </ul>
        </div>`;
      });
    }

    displayFilter(totalFighters);
    response.forEach((obj, i) => showData(i));
    // display the fighters on the page //
    function showData(title) {
      rankings.innerHTML += /* html */ `<div class="my-5">
      <h1 class="text-light"><u>${response[title].weightClass} :</u></h1><hr class="text-white ">`;
      for (let j = 0; j < 5; j++) {
        document.querySelector("#rankings").innerHTML += /* html */ `<ul>
        <li class="text-white list-unstyled py-3 fs-4">${response[title].fighters[j].fullName}<a class="ps-2" href="${response[title].fighters[j].url}"><button class="btn btn-outline-danger ">more information</button></a></li>
        </ul>
        </div>`;
      }

      search.addEventListener("input", function () {
        displayFilter(totalFighters);
        showData();
      });
    }
  });
