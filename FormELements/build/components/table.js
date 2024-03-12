import { createElement } from "../utils/index.js";
const headers = [
    "№", "Тип платёжной системы", "Номер карты", "Имя держателя карты", "Месяц/Год окончания карты", "Имя банка"
];
const head = createElement({
    tagName: "thead",
    childs: [
        createElement({
            tagName: "tr",
            childs: headers.map(header => createElement({
                tagName: "th",
                textContent: header,
                style: {
                    border: "1px solid black",
                    padding: "2px 5px"
                }
            })),
        })
    ]
});
export const body = createElement({
    tagName: "tbody",
});
export const Table = createElement({
    tagName: "table",
    style: {
        margin: "50px auto 0 auto",
        borderCollapse: "collapse",
    },
    childs: [head, body]
});
