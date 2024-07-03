const axios = require('axios');
login = (obj,callback) => {
    let data = JSON.stringify({
        "email": obj.email,
        "password": obj.password
    });
    let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://delima.padinet.com:2018/login',
    headers: { 
        'Content-Type': 'application/json'
    },
    data : data
    };

    axios.request(config)
    .then((response) => {
        console.log(JSON.stringify(response.data));
        callback(response.data)
    })
    .catch((error) => {
        console.log(error);
        callback(error)
    });

}
module.exports = {
    login:login
}