const isEmpty = (object) => {
    return !Object.getOwnPropertyNames(object).length && !Object.getOwnPropertySymbols(object).length
}