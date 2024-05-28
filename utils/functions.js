import { evaluate } from "mathjs"

export const handleBtnClick = (e, functions,val) => {
    functions(val + e)
}

export const handleReset = (functions) => {
    functions("")
}

export const handleBackSpace = (functions,val) => {
    functions(val.substring(0, val.length - 1))
}

export const handelEquals = (functions,val) => {
    try {
        functions(evaluate(val).toString())
    } catch (error) {
        timeOutDisplay("ErroR", 300,functions)
        timeOutDisplay(" ", 1200,functions)
    }
}

const timeOutDisplay = (props, time) => {
    setTimeout(() => {
        functions(props)
    }, time);
}