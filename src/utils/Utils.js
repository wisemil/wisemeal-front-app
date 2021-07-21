export const handle = (handler) => {
    const handle = handler || (() => {
    })
    handle()
}

export const renderWhen = (condition, component) => {
    return condition ? component : <></>
}

export const notRenderWhen = (condition, component) => {
    return renderWhen(!condition, component)
}
