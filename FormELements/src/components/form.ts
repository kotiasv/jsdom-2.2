import { cardFilter, dateFilter, ownerFilter } from "../utils/filters"
import { createElement } from "../utils/index"
import { bankInfo, bankInfoFilter, cardInfo, cardInfoFilter, dateInfo, dateInfoFilter, infos, ownerInfo, ownerInfoFilter, typeInfo, typeInfoFilter } from "./card"
import { Input } from "./input"
import { body } from "./table"

let tableRowCounter = 0

const bank = Input({
    name: "Имя банка",
    placeholder: "Не выбрано",
    options: ["Сбербанк", "Тинькофф"]
})

const type = Input({
    name: "Тип платёжной системы",
    placeholder: "Не выбрано",
    options: ["Visa", "Mastercard"]
})

const card = Input({
    name: "Номер карты",
    placeholder: "0000 0000 0000 0000",
})

const owner = Input({
    name: "Имя держателя карты",
    placeholder: "Введите имя держателя",
})

const date = Input({
    name: "Месяц/Год окончания карты",
    placeholder: "mm/yy",
})

card.input?.addEventListener("input", cardFilter)
owner.input?.addEventListener("input", ownerFilter)
date.input?.addEventListener("input", dateFilter)

bank.select?.addEventListener("change", bankInfoFilter)
type.select?.addEventListener("change", typeInfoFilter)
card.input?.addEventListener("input", cardInfoFilter)
owner.input?.addEventListener("input", ownerInfoFilter)
date.input?.addEventListener("input", dateInfoFilter)

const inputs = [
    bank.select,
    type.select,
    card.input,
    owner.input,
    date.input,
]

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
})

Form.addEventListener("submit", (event) => {
    event.preventDefault()

    const inputsValues = inputs.map(input => input?.value)

    if (inputsValues.includes(""))
        return

    if (card.input?.value.length !== 19)
        return

    const values = [`${++tableRowCounter}`, ...inputsValues]

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
    })

    inputs.forEach(input => input ? input.value = "" : null)

    bankInfoFilter({ target: bank.select } as unknown as Event)
    typeInfoFilter({ target: type.select } as unknown as Event)
    cardInfoFilter({ target: card.input } as unknown as Event)
    ownerInfoFilter({ target: owner.input } as unknown as Event)
    dateInfoFilter({ target: date.input } as unknown as Event)
})