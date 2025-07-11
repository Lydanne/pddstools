ui.h = function (tag: string, props: any) {
    const args = Array.from(arguments)
    let childStr = ''
    let propStr = ''
    if (props) {
        const keys = Object.keys(props)
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i]
            propStr += `${key}="${props[key]}" `
        }
    }
    for (let j = 2; j < args.length; j++) {
        childStr += args[j]
    }
    return `<${tag} ${propStr}>${childStr}</${tag}>`
}
