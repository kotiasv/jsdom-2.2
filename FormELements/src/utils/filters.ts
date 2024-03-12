export const cardFilter = (event: Event) => {
    const target = event.target as HTMLInputElement
    let data = target.value.trim().replace(/[^0-9]+/g, "").match(/.{1,4}/g)

    if (!data) return

    let value = ""

    if (data.length > 4) data.splice(4)

    data.forEach(numbers => {
        value += `${numbers} `
    })


    target.value = value.trim()
}

export const dateFilter = (event: Event) => {
    const target = event.target as HTMLInputElement
    const data = target.value.replace(/[^0-9]+/g, "")
    const start = data.substring(0, 2)
    const end = data.substring(2, 4)
    
    let value = `${start}`

    if (start.length === 2 && end.length >= 1)
        value = start.replace(/^(?!0[1-9]|1[0-2]$).*$/g, "01") + "/"

    if (end)
        value += end

    target.value = value
}

export const ownerFilter = (event: Event) => {
    const target = event.target as HTMLInputElement
    const data = target.value.replace(/[^a-zA-Zа-яА-ЯёЁ]+/g, "")

    if (data.length > 15) {
        target.value = data.substring(0, 15)
        return
    }

    target.value = data
}

