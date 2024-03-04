const rangeElements = document.querySelectorAll<HTMLDivElement>(".range")

rangeElements.forEach(rangeElement => {
    const contentElement = rangeElement.children.item(1) as HTMLDivElement
    const infoElement = rangeElement.children.item(0) as HTMLParagraphElement
    if (!contentElement && !infoElement) return

    const pointElement = contentElement.children.item(1) as HTMLDivElement

    const sliderElement = contentElement.children.item(0) as HTMLDivElement
    if (!pointElement && !sliderElement) return

    const rangeLeftElement = sliderElement.children.item(0) as HTMLDivElement
    if (!rangeLeftElement) return


    const onHold = (event: MouseEvent) => {
        const sliderBorder = Math.round(Number(
            getComputedStyle(sliderElement)
                .borderWidth
                .replace(/([^0-9.])/g, "")
        ) * 2)
        const sliderWidth = sliderElement.offsetWidth - sliderBorder
        const pointWidth = pointElement.offsetWidth
        const pointCenter = pointWidth / 2
        const clientX = event.clientX - rangeElement.offsetLeft

        const offsetLeft = clientX > sliderWidth
        ? sliderWidth
            : clientX < 0
                ? 0
                : clientX

        pointElement.style.left = `${offsetLeft - pointCenter}px`
        rangeLeftElement.style.width = `${offsetLeft > 0 ? offsetLeft : 0}px`
        infoElement.style.left = `${offsetLeft - pointCenter}px`

        const rangeLeft = rangeElement.offsetWidth - (rangeElement.offsetWidth - pointElement.offsetLeft)
        const percent = Math.floor((rangeLeft + pointCenter) * 100 / sliderWidth)

        infoElement.textContent = infoElement.classList.contains("percent")
            ? `${percent}%`
            : `${offsetLeft - (offsetLeft > sliderWidth ? sliderBorder : 0)}`
    }

    contentElement.addEventListener("mousedown", (event) => {
        document.addEventListener("mousemove", onHold)
        onHold(event)
    })
    
    document.addEventListener("mouseup", (_event) => {
        document.removeEventListener("mousemove", onHold)
    })
})
