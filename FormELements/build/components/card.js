import { createElement } from "../utils/index.js";
export const typeInfo = createElement({
    tagName: "div",
    textContent: "?",
    style: {
        height: "50px",
        width: "50px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        fontSize: "50px",
    }
});
export const cardInfo = createElement({
    tagName: "p",
    textContent: "0000 0000 0000 0000",
    style: {
        marginTop: "10px",
        letterSpacing: "2px",
        fontSize: "20px"
    }
});
const bottomBlock = createElement({
    tagName: "div",
    style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "end",
        marginTop: "25px"
    }
});
export const ownerInfo = createElement({
    tagName: "p",
    textContent: "Нет информации",
    parent: bottomBlock,
    style: {
        fontWeight: "bold"
    }
});
export const dateInfo = createElement({
    tagName: "p",
    textContent: "01/01",
    style: {
        fontWeight: "bold"
    }
});
export const bankInfo = createElement({
    tagName: "p",
    textContent: "?",
    style: {
        height: "50px",
        width: "50px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "50px",
    }
});
createElement({
    tagName: "div",
    parent: bottomBlock,
    childs: [dateInfo, bankInfo],
    style: {
        display: "flex",
        alignItems: "end",
        gap: "20px"
    }
});
export const infos = [
    ownerInfo,
    dateInfo,
    bankInfo,
    cardInfo,
    typeInfo
];
export const Сard = createElement({
    tagName: "div",
    childs: [typeInfo, cardInfo, bottomBlock],
    style: {
        width: "340px",
        height: "190px",
        background: "linear-gradient(106.15deg, #042843 1.98%, #726E9E 98%)",
        color: "white",
        borderRadius: "5px",
        padding: "20px"
    }
});
// Filter functions
export const cardInfoFilter = (event) => {
    const value = event.target.value;
    cardInfo.textContent = value.length > 0 ? value : "0000 0000 0000 0000";
};
export const ownerInfoFilter = (event) => {
    const value = event.target.value;
    ownerInfo.textContent = value.length > 0 ? value : "Нет информации";
};
export const dateInfoFilter = (event) => {
    const value = event.target.value;
    dateInfo.textContent = value.length > 0 ? value : "01/01";
};
export const typeInfoFilter = (event) => {
    const value = event.target.value;
    if (value) {
        if (typeInfo.textContent)
            typeInfo.textContent = "";
        typeInfo.style.backgroundImage = `url(./public/${value.toLowerCase()}.svg)`;
        return;
    }
    typeInfo.textContent = "?";
    typeInfo.style.backgroundImage = "";
};
export const bankInfoFilter = (event) => {
    const value = event.target.value;
    if (value) {
        const banks = {
            "сбербанк": "sberbank.png",
            "тинькофф": "tinkoff.svg"
        };
        if (bankInfo.textContent)
            bankInfo.textContent = "";
        bankInfo.style.backgroundImage = `url(./public/${banks[value.toLowerCase()]})`;
        return;
    }
    bankInfo.textContent = "?";
    bankInfo.style.backgroundImage = "";
};
