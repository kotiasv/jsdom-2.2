import { Form, Сard, Table } from "./components/index"
import { appendElement, createElement } from "./utils/index"

const root = document.querySelector(".root") as HTMLDivElement

createElement({
    tagName: "h1",
    parent: root,
    textContent: "Информация о банковской карте",
    style: {
        textAlign: "center",
        paddingTop: "50px"
    }
})

createElement({
    tagName: "div",
    parent: root,
    childs: [
        Form,
        Сard
    ],
    style: {
        display: "flex",
        alignItems: "center",
        width: "1000px",
        margin: "0 auto",
        marginTop: "30px",
        justifyContent: "space-around"
    },

})

appendElement(root, Table)