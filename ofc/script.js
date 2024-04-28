const url = "https://free-football-soccer-videos1.p.rapidapi.com/v1/";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8a23d986e4mshda3a2904d6972eep1f61c4jsn6c14b7f48669",
    "X-RapidAPI-Host": "free-football-soccer-videos1.p.rapidapi.com",
  },
};
const response = await fetch(url, options);
const result = await response.text();
const jsonData = JSON.parse(result);

function extractLinks(inputString) {
  var urlRegex = /(https?:\/\/[^\s]+)/g;
  var matches = inputString.match(urlRegex);
  return matches;
}

document.querySelector("#abt").addEventListener("click", function (e) {
  e.preventDefault();
  const id = e.target.getAttribute("href");
  console.log(e);
  document.querySelector(id).scrollIntoView({ behavious: "smooth" });
});
document
  .getElementById("leagueDropdown")
  .addEventListener("click", function (event) {
    if (event.target.classList.contains("dropdown-item")) {
      event.preventDefault();
      var value = event.target.id;
      pageloader(value);
    }
  });

const section1 = document.querySelector(".section-1");
const thumbs = section1.querySelectorAll(".col-md-4");
thumbs.forEach(function (sec, i) {
  sec.href = extractLinks(jsonData[i]["embed"]);
  sec.querySelector("img").src = jsonData[i]["thumbnail"];
  sec.querySelector(".image-title").textContent = jsonData[i]["title"];
});

function pageloader(league_id) {
  let i = 0;
  let j = 0;
  while (i < 84 && j < 9) {
    if (jsonData[i]["competition"]["id"] == league_id) {
      thumbs[j].href = extractLinks(jsonData[i]["embed"]);
      thumbs[j].querySelector("img").src = jsonData[i]["thumbnail"];
      thumbs[j].querySelector(".image-title").textContent =
        jsonData[i]["title"];
      j++;
    }
    i++;
  }
}
