// template
const equipmentTemplate = require('./pages/equipment.hbs')
const avatarTemplate = require('./pages/avatar.hbs')
const creatureTemplate = require('./pages/creature.hbs')

const equipment = equipmentTemplate()
const avatar = avatarTemplate()
const creature = creatureTemplate()

const routes = {
    '/': equipment,
    '/equipment': equipment,
    '/avatar': avatar,
    '/creature': creature,
}

// entry point
const initialRoutes = (mode, ele) => {
    renderHTML(ele, routes['/'])

    if ( mode === 'history' ) {
        window.onpopstate = () => renderHTML(ele, routes[window.location.pathname])
    } else {
        window.addEventListener('hashchange', () => {
            return renderHTML(ele, getHashRoute())
        })
    }
}

// set browser history
const historyRouterPush = (pathName, ele) => {
    window.history.pushState({}, pathName, window.location.origin + pathName)
    renderHTML(ele, routes[pathName])
}

// get hash history route
const getHashRoute = () => {
    let route = '/'

    Object.keys(routes).forEach(hashRoute => {
        if ( window.location.hash.replace('#', '') === hashRoute.replace('/', '')) {
            route = routes[hashRoute]
        }
    })

    return route
}

// set hash history
const hashRouterPush = (pathName, ele) => {
    renderHTML(ele, getHashRoute())
}

// render
const renderHTML = (ele, route) => {
    ele.innerHTML = route
}

module.exports = {
    initialRoutes,
    historyRouterPush,
    hashRouterPush,
}