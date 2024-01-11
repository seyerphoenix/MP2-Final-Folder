const form = document.getElementById('form');
let brandname = document.getElementById('brandname');
let model = document.getElementById('model');
let snumber = document.getElementById('snumber');
let others = document.getElementById('others');

form.addEventListener('submit', function(e){
    e.preventDefault();


let brandnameValue = brandname.value;
let modelValue = model.value;
let snumberValue = snumber.value;
let othersValue = others.value;

localStorage.setItem('brand-name',brandnameValue);
localStorage.setItem('model-name',modelValue);
localStorage.setItem('s-number',snumberValue);
localStorage.setItem('o-thers',othersValue);

})