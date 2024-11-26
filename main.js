


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
testButton.addEventListener('click',()=>createBrand('na','des'));