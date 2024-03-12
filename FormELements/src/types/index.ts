export type HTMLElementType<TagName extends string> = 
    TagName extends keyof HTMLElementTagNameMap
        ? HTMLElementTagNameMap[TagName]
        : HTMLElement


export type CSSStyle = {
    [key in keyof CSSStyleDeclaration]?: CSSStyleDeclaration[key]
}

export type CreateElementConfig<
    HTMLTagName extends string, 
    HTMLTagTypeParent extends HTMLElementType<string>
> = {
    tagName: HTMLTagName
    style?: CSSStyle
    parent?: HTMLTagTypeParent,
    childs?: HTMLElement[],
    textContent?: string,
    attributes?: Record<string, string>
}
// & ({
//     childs?: never
//     textContent: string
// } | {
//     childs: HTMLElement[]
//     textContent?: never
// })