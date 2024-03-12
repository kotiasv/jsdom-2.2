export const createElement = ({ tagName, style, childs, parent, textContent, attributes }) => {
    const element = document.createElement(tagName);
    if (textContent)
        element.textContent = textContent;
    if (style)
        Object.keys(style).forEach(rule => {
            // @ts-ignore
            element.style[rule] = style[rule];
        });
    if (attributes)
        Object.keys(attributes).forEach(attr => element.setAttribute(attr, attributes[attr]));
    if (parent)
        parent.append(element);
    if (childs)
        childs.forEach(child => element.append(child));
    return element;
};
export const appendElement = (parent, child) => parent.append(child);
