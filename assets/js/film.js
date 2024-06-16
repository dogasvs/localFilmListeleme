let filmForm = document.querySelector('.filmForm');
let sifirlama = document.querySelector('.delete');

let korkuList = document.querySelector('.korku');
let komediList = document.querySelector('.komedi');
let dramaList = document.querySelector('.drama');
let askList = document.querySelector('.ask');
let aksiyonList = document.querySelector('.aksiyon');

let filmList = [];

if(typeof localStorage.filmList !== 'undefined') {
  filmList = JSON.parse(localStorage.filmList);
  renderForm();
}

function handleSubmitForm(e) {
  e.preventDefault();
  let formData = new FormData(filmForm);
  let formObj = Object.fromEntries(formData);
  filmList.push(formObj);
  filmForm.reset();
  save();
  renderForm();
}

filmForm.addEventListener('submit', handleSubmitForm);

function save() {
  localStorage.filmList = JSON.stringify(filmList);
}

function renderForm() {
  korkuList.innerHTML = '';
  komediList.innerHTML = '';
  dramaList.innerHTML = '';
  askList.innerHTML = '';
  aksiyonList.innerHTML = '';

  for(let i = 0; i < filmList.length; i++) {

  let filmsItem =  `<div class="films">
  <p> ${filmList[i].name} </p> 
  <p> ${filmList[i].konu} </p> 
  <p> ${filmList[i].catagory} </p> 
  <p> ${filmList[i].puan} </p> 
  </div> `;

  if(filmList[i].catagory === 'korku') {
    korkuList.innerHTML += filmsItem;
  } else if(filmList[i].catagory === 'komedi') {
    komediList.innerHTML += filmsItem;
  } else if(filmList[i].catagory === 'drama') {
    dramaList.innerHTML += filmsItem;
  } else if(filmList[i].catagory === 'aşk') {
    askList.innerHTML += filmsItem;
  } else if(filmList[i].catagory === 'aksiyon') {
    aksiyonList.innerHTML += filmsItem;
  }
}
}

function clearForm() {
  localStorage.clear();
  filmList = [];
  renderForm();
}

sifirlama.addEventListener('click', clearForm);