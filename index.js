const axios = require('axios')

axios.get('http://localhost:3000/get').then(res => {

    console.log(res.data);
    
}).catch(err => {
    console.log(err.message);
})