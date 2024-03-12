import { CSSStyle } from "../types/index"
import { createElement } from "../utils/index"

type Input = {
    name: string
    placeholder: string,
    options?: string[],
}

const contentStyle: CSSStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "3px"
}

const inputStyle: CSSStyle = {
    padding: "5px",
    backgroundColor: "white",
    border: "1px solid black"
}

export const Input = ({
    name,
    options,
    placeholder,
}: Input) => {    
    const label = createElement({
        tagName: "label",
        textContent: name
    })

    const content = createElement({
        tagName: "div",
        childs: [label],
        style: contentStyle
    })

    if (!options) {
        const input = createElement({
            tagName: "input",
            attributes: {
                placeholder
            },
            style: inputStyle
        })
    
        const content = createElement({
            tagName: "div",
            childs: [label, input],
            style: contentStyle
        })

        return { content, input, label }
    }

    const select = createElement({
        tagName: "select",
        parent: content,
        style: inputStyle
    })

    createElement({
        tagName: "option",
        attributes: {
            value: "",
        },
        textContent: placeholder,
        parent: select 
    })

    options.forEach(value => {
        createElement({
            tagName: "option",
            attributes: {
                value
            },
            textContent: value,
            parent: select
        })
    })

    return { content, select, label }
}