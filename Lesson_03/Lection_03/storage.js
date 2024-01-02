// localStorage.setItem('userName','Bob')
//
// let storageUserName = localStorage.getItem('userName')
// console.log(storageUserName)
//
// localStorage.removeItem('userName')
//
// let storageUserName2 = localStorage.getItem('userName')
// console.log(storageUserName2)
//
// localStorage.clear()

// ------------------------------------------ //

// console.log('LocalStorage', localStorage)
//
// if (localStorage.getItem('counter')) {
//     let counter = parseInt(localStorage.getItem('counter')) + 1;
//     localStorage.setItem('counter', counter.toString());
// }
// else {
//     localStorage.setItem('counter','1')
// }

// ------------------------------------------ //

let counter = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;

const updateCounter = () => {
    counter++;
    localStorage.setItem('counter',counter.toString())
}

document.querySelector('.counter').textContent = counter;

document.querySelector('.increment').addEventListener('click', ()=> {
    updateCounter();
    document.querySelector('.counter').textContent = counter;
    console.log('counter: ' + localStorage.getItem('counter'))
})

document.querySelector('.clear').addEventListener('click', ()=> {
    localStorage.clear();
    counter = 0;
    document.querySelector('.counter').textContent = counter;
    console.log('counter clear / localStorage.clear')
})

// ------------------------------------------ //

