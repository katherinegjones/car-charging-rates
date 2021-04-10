const logger = (store) => (next) => (action) => {
    console.group(action.type)
      console.log("Action performed: ", action)
      const returnValue = next(action)
      console.log("Current state: ", store.getState())
    console.groupEnd()
    return returnValue
}

export default logger