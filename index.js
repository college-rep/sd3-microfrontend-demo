// import axios from 'axios';
const axios = require('axios');

const testButton=document.getElementById('testButton');

const test=()=>{
    console.log('salero');
    const url=document.getElementById('stock-url');
    console.log('url: '+url.value);
}
// testButton.addEventListener('click',test());
function createBrand(name,description) {
    console.log('placeholder');
}
function testApi() {
    // axios.get('http://127.0.0.1:8090/category/?id=1')
    axios.get('127.0.0.1:8090/category/?id=1')
  .then(response => {
    console.log('Data received:', response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
      
}
// testButton.addEventListener('click',()=>createBrand('na','des'));
testButton.addEventListener('click',()=>testApi());