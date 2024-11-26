import axios from 'axios';
// import https from 'https';

// Create an HTTPS agent that forces TLSv1.2
// const agent = new https.Agent({  
//   secureProtocol: 'TLSv1_2_method'
// });

// axios.get('http://localhost:8090/category/test')
axios.get('http://localhost:8090/category/?id=1')
  .then(response => {
    console.log('Data received:', response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });