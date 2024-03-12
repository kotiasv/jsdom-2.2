import { cardFilter, dateFilter, ownerFilter } from "../utils/filters.js";
import { createElement } from "../utils/index.js";
import { bankInfoFilter, cardInfoFilter, dateInfoFilter, ownerInfoFilter, typeInfoFilter } from "./card.js";
import { Input } from "./input.js";
import { body } from "./table.js";
let tableRowCounter = 0;
const bank = Input({
    name: "Имя банка",
    placeholder: "Не выбрано",
    options: ["Сбербанк", "Тинькофф"]
});
const type = Input({
    name: "Тип платёжной системы",
    placeholder: "Не выбрано",
    options: ["Visa", "Mastercard"]
});
const card = Input({
    name: "Номер карты",
    placeholder: "0000 0000 0000 0000",
});
const owner = Input({
    name: "Имя держателя карты",
    placeholder: "Введите имя держателя",
});
const date = Input({
    name: "Месяц/Год окончания карты",
    placeholder: "mm/yy",
});
card.input?.addEventListener("input", cardFilter);
owner.input?.addEventListener("input", ownerFilter);
date.input?.addEventListener("input", dateFilter);
bank.select?.addEventListener("change", bankInfoFilter);
type.select?.addEventListener("change", typeInfoFilter);
card.input?.addEventListener("input", cardInfoFilter);
owner.input?.addEventListener("input", ownerInfoFilter);
date.input?.addEventListener("input", dateInfoFilter);
const inputs = [
    bank.select,
    type.select,
    card.input,
    owner.input,
    date.input,
];
export const Form = createElement({
    tagName: "form",
    childs: [
        bank.content,
        type.content,
        card.content,
        owner.content,
        date.content,
        createElement({
            tagName: "button",
            textContent: "Добавить",
            attributes: {
                type: "submit"
            },
            style: {
                background: "none",
                padding: "5px",
                border: "1px solid black",
                cursor: "pointer"
            }
        })
    ],
    style: {
        display: "flex",
        flexDirection: "column",
        gap: "10px"
    }
});
Form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputsValues = inputs.map(input => input?.value);
    if (inputsValues.includes(""))
        return;
    if (card.input?.value.length !== 19)
        return;
    const values = [`${++tableRowCounter}`, ...inputsValues];
    createElement({
        tagName: "tr",
        parent: body,
        childs: values.map(value => createElement({
            tagName: "td",
            textContent: value,
            style: {
                border: "1px solid black",
                padding: "2px 5px"
            }
        }))
    });
    inputs.forEach(input => input ? input.value = "" : null);
    bankInfoFilter({ target: bank.select });
    typeInfoFilter({ target: type.select });
    cardInfoFilter({ target: card.input });
    ownerInfoFilter({ target: owner.input });
    dateInfoFilter({ target: date.input });
});
