const searchInput = document.getElementById("search");
const results = document.getElementById("results");
const lists = document.querySelectorAll("li");

let searchTerm = "";
let thailandAddress;

async function fetchAddress() {
  const url = "<Your API Web App URL>";
  const res = await fetch(url);

  const data = await res.json();

  return data;
}

(async function getAddress() {
  thailandAddress = await fetchAddress();
  // console.log(thailandAddress);
})();

function showAddress() {
  results.innerHTML = "";

  const ul = document.createElement("ul");

  thailandAddress
    .filter(
      (address) =>
        address.subdistrict.toLowerCase().includes(searchTerm.toLowerCase()) ||
        address.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
        address.province.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .forEach((address) => {
      const li = document.createElement("li");
      const i = document.createElement("i");

      i.classList.add("fa", "fa-book", "list-icon");

      li.appendChild(i);

      const list = document.createTextNode(
        `${address.subdistrict} >> ${address.district} >> ${address.province} >> ${address.postcode}`
      );

      li.appendChild(list);

      ul.appendChild(li);
    });

  results.appendChild(ul);
}

searchInput.addEventListener("input", (event) => {
  searchTerm = event.target.value;

  if (searchTerm !== "" && searchTerm !== " ") {
    showAddress();
  } else {
    results.innerHTML = "";
  }
});
