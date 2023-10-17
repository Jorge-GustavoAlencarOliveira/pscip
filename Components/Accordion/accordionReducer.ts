type State = {
  collapse: boolean
}

type Action = { type: 'collapse' } | { type: 'show' }

export function accordionReducer(state: State, action: Action) {
  switch (action.type) {
    case 'collapse':
      return {
        collapse: !state.collapse
      }
    case 'show':
      return {
        collapse: true
      }
    default:
      return state
  }
}