const burgerBtn = document.querySelector('.burger')
const nav = document.querySelector('.nav')
const allNavItems = document.querySelectorAll('.nav-items')
const footerP = document.querySelector('.footer-paragraf')
const footerDate = document.querySelector('.footer-date')

const handleNav = () => {
    nav.classList.toggle('active')

     allNavItems.forEach(item=> {
        item.addEventListener('click', ()=> {
            nav.classList.remove('active')
        })
    })
}


const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const date = new Date();
let monthName = month[date.getMonth()];

const handleCurrentYear = () => {
    const day = (new Date).getDate()
    const year = (new Date).getFullYear()
    footerDate.textContent = `${day}-${monthName}-${year}`
}
handleCurrentYear()




burgerBtn.addEventListener('click', handleNav)

