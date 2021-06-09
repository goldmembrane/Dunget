// router
const { initialRoutes, historyRouterPush, hashRouterPush } = require('./router')

// app division
const historyAppDivision = document.querySelector('#dunget-container')

// Browser history
initialRoutes('history', historyAppDivision)

window.onload = () => {
    const historyLinker = document.querySelectorAll('li.tab')

    historyLinker.forEach(ele => {
        ele.addEventListener('click', (evt) => {
            const pathName = evt.target.getAttribute('route')
        })
    })
}