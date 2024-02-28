import { list } from "./data.js";
const find = (query) => document.querySelector(query);
const create = (tagname, config) => {
    const element = document.createElement(tagname);
    if (config) {
        const { content, className, link } = config;
        if (content)
            element.textContent = content;
        if (className)
            element.classList.add(...className.filter(element => element !== null));
        if (link)
            element.setAttribute("href", link);
    }
    return element;
};
const root = find(".root");
const renderList = (list, parent = root, hidden) => {
    if (!list)
        return;
    const ul = create("ul", {
        className: [hidden ? "hidden" : null, "listNode"]
    });
    list.forEach(element => {
        const li = create("li");
        const heading = create(element.content ? "p" : "a", {
            content: element.heading,
            className: [!element.content ? "none" : "show"],
            link: !element.content ? element.link : undefined
        });
        li.appendChild(heading);
        renderList(element.content, li, true);
        heading.addEventListener("click", () => {
            const elements = [...li.childNodes];
            elements.shift();
            elements.forEach(element => {
                element.classList.toggle("hidden");
            });
            if (element.content) {
                heading.classList.toggle("show");
                heading.classList.toggle("hide");
            }
        });
        ul.appendChild(li);
    });
    parent.appendChild(ul);
};
renderList(list);
