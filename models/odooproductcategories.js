const axios = require('axios');
gets = callback => {
    let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://odoo.padi.net.id/api/product.category?query={id,name,display_name}',
    headers: { 
        'Cookie': 'session_id=eee74bf9ea8768879bfe9c0bc835399af09b9275'
    }
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
    gets:gets
}