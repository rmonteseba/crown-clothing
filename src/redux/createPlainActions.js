export const createPlainActions = (actions) => {
    const plainActions = {}
    actions.each((action) => (plainActions[action] = action))
    return plainActions
}