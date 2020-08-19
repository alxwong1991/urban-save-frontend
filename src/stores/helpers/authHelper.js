require('dotenv').config();

authHelper = () => {
    let user = JSON.parse(localStorage.getItem('users'));

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };

    } else {
        return {};
    }
}

module.exports = authHelper