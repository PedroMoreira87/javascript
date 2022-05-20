const axios = require('axios');

const session_url = 'https://v3.recurly.com/accounts';
const uname = '';
const pass = '';

axios.get(session_url, {
    headers: {
        Accept: 'application/vnd.recurly.v2021-02-25',
    },
    auth: {
        username: uname,
        password: pass
    }
}).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.log(error);
});
