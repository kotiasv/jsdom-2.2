import { CreateElementConfig, HTMLElementType } from "../types/index"

export const createElement = <
    HTMLTagName extends string,
    HTMLTagNameType extends HTMLElementType<HTMLTagName>,
    HTMLTagTypeParent extends HTMLElementType<string>
>({
    tagName,
    style,
    childs,
    parent,
    textContent,
    attributes
}: CreateElementConfig<HTMLTagName, HTMLTagTypeParent>) => {
    const element = document.createElement(tagName) as HTMLTagNameType
    
    if (textContent) element.textContent = textContent
    if (style) Object.keys(style).forEach(rule => {
        // @ts-ignore
        element.style[rule] = style[rule]
    })
    if (attributes) Object.keys(attributes).forEach(attr => 
        element.setAttribute(attr, attributes[attr])
    )

    if (parent) parent.append(element)

    if (childs)
        childs.forEach(child => element.append(child))

    return element
}

export const appendElement = (parent: HTMLElement, child: HTMLElement) =>
    parent.append(child)
