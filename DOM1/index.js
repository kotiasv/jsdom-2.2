// generate random number
const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min

// init random array with height and width
const initRandomArray = (height, width) => {
    const array = []
    for (let i = 0; i < height; i++) {
        const row = []

        for (let j = 0; j < width; j++)
            row.push(randomNumber(0, 99))

        array.push(row)
    }
    return array
}

// return index if null is in width array or -1
const findFreeSpaceIndex = (array) => {
    for (let i = 0; i < array.length; i++)
        if (array[i] === null)
            return i
    
    return -1
}

// create table with height, width and fill it with array values
const createTable = (height, width, array) => {
    const table = document.createElement("table")
    table.id = "table"

    for (let i = 0; i < height; i++) {
        const row = document.createElement("tr")

        for (let j = 0; j < width; j++) {
            const cell = document.createElement("td")

            cell.innerText = array[i][j]
            if (array[i][j] >= 50)
                cell.style.backgroundColor = "orange"

            row.appendChild(cell)
        }

        table.appendChild(row)
    }
    return table
}

// rerender the table
const reRender = (height, width, array) => {
    root.removeChild(document.getElementById("table"))
    root.appendChild(createTable(height, width, array))
}

// init app
const root = document.body
let array = initRandomArray(5, 6)
root.appendChild(createTable(5, 6, array))
console.log(array.length)

// onclick function
const addNumber = () => {
    const spaceIndex = findFreeSpaceIndex(array[array.length - 1])
    
    if (spaceIndex === -1) {
        const row = new Array(6).fill(null)
        row[0] = randomNumber(0, 99)
        array.push(row)
    } else
        array[array.length - 1][spaceIndex] = randomNumber(0, 99)
    
    reRender(array.length, 6, array)
}