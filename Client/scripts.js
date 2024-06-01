const http = new coreHTTP;

// Block Variables
let theList = [];

// setup selectors
const result = document.querySelector(".result");
const input =  document.querySelector("#listitem");
const addButton =  document.querySelector(".add-btn");
const delButton =  document.querySelector(".del-btn");

// Listeners
addButton.addEventListener("click", httpPost);
delButton.addEventListener("click", httpDelete);

/* Helper Functions */
function ShowList() {
  let output = "<ul>";
  for (const itm of theList) {
    output += `<li>${itm}</li>`;
  }
  output += "</ul>";
  result.innerHTML = output;
}

async function GetList() {
  try{
    theList = await http.get("/api");
    ShowList();
  }catch(error){
    console.error('GetList() failed');
  }
}

async function WriteList() {
  try {
    await http.post("/api", theList);
  } catch (error) {
    console.error('WriteList() failed');
  }
}

/* Listener Functions */
async function httpPost(e) {
  let newItem = input.value;
  theList.push(newItem);
  ShowList();
  await WriteList();
}

async function httpDelete(e) {
  const index = theList.indexOf(input.value);
  if (index !== -1) {
    theList.splice(index, 1);
    ShowList();
    await WriteList();
  }
}

// Loading functions
function showLoading() {
  result.innerHTML = "Loading...";
}

async function main() {
  addButton.disabled = true;
  delButton.disabled = true;
  showLoading();

  await GetList();

  addButton.disabled = false;
  delButton.disabled = false;
}

main();