// router
import equipmentTemplate from './pages/equipment.hbs';
import avatarTemplate from './pages/avatar.hbs';
import creatureTemplate from './pages/creature.hbs';

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

// content division
const dividedContent = document.querySelector(".dunget-container");

// browser history
initialRoute(dividedContent);

window.onload = () => {
    const historyLinker = document.querySelectorAll(".tab");

    historyLinker.forEach((element) => {
        element.addEventListener("click", (event) => {
            const pathName = event.target.getAttribute("route");
            historyBrowserPush(pathName, dividedContent);
        });
    });
};

dividedContent.addEventListener("click", (e) => {
    const target = e.target;
});