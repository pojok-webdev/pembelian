const axios = require('axios');
const appSetting = require('../js/appSetting');
gets = callback => {
    let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://odoo.padi.net.id/api/product.category?query={id,name,display_name}',
    headers: { 
        'Cookie': 'session_id='+appSetting.odoo_session_id
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