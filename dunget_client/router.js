const equipmentTemplate = require('./pages/equiment.hbs');
const avatarTemplate = require('./pages/avatar.hbs');
const creatureTemplate = require('./pages/creature.hbs');

const equipment = equipmentTemplate();
const avatar = avatarTemplate();
const creature = creatureTemplate();

const route = {
    "/" : equipment,
    "/equipment" : equipment,
    "/avatar" : avatar,
    "/creature" : creature,
}

// entry point
const initialRoute = (element) => {
    renderHTML(element, route["/"]);

    window.onpopstate = () => {
        renderHTML(element, route[window.location.pathname]);
    };
};

// set history
const historyBroswerPush = (pathName, element) => {
    window.history.pushState({}, pathName, window.location.origin + pathName);
    renderHTML(element, route[pathName]);
};

// render routing pages
const renderHTML = (element, route) => {
    element.innerHTML = route;
};

module.exports = {
    initialRoute,
    historyBroswerPush,
}