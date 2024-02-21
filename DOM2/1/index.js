import cats from "./data.js"

const findElement = (query) =>
    document.querySelector(query)

const appendChild = (root, elements) =>
    elements.forEach(element => 
        root.appendChild(element)
    )

const createElement = (tagname, value = null, className = "", id = null) => {
    const element = document.createElement(tagname)
    element.textContent = value
    if (id) element.id = id
    element.classList.add(className)
    return element
}

const useFlexbox = (elements) => {
    const flexbox = createElement("div", null, "flexbox")
    appendChild(flexbox, elements)
    return flexbox  
}

(() => {
    const root = findElement(".root")

    cats.forEach(cat => {
        const container = createElement("div", null, "cat", cat.id)

        const image = createElement("img", null, "cat-img")
        image.setAttribute("src", cat.img_link)

        const name = createElement("h2", cat.name, "cat-name")
        const flexbox1 = useFlexbox([name])
        if (cat.favourite) {
            const star = createElement("img", null, "cat-star")
            star.setAttribute("src", "./star.png")
            appendChild(flexbox1, [star])
        }

        const age = createElement("p", `Возраст: ${cat.age}`, "cat-age")
        const rate = createElement("p", `Рейтинг: ${cat.rate}`, "cat-rate")
        const flexbox2 = useFlexbox([age, rate])

        const description = createElement("p", cat.description, "cat-desc")

        appendChild(container, [image, flexbox1, flexbox2, description])
        appendChild(root, [container])
    })
})()