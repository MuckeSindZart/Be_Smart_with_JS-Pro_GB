let setCookie = (name, value, days) => {
    let expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);

    let cookieSValue =
        encodeURIComponent(value)
        + '; expires'
        + expirationDate.toUTCString();

    document.cookie = name + '=' + cookieSValue;
}

setCookie('userName', 'Johan', 7)
setCookie('userInfo', 'Herr', 5)


let getCookie = (name) => {
    let cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        let [cookieName, cookieValue] = cookie.trim().split('=');
        if (cookieName === name) {
            return decodeURIComponent(cookieValue)
        }
    }
    return null
}

let username = getCookie('userName')
console.log('username = ', username)


let deleteCookie = (name) => {
    document.cookie = name + '=;ex'
}

deleteCookie('userName')