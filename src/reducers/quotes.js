// export default (state = [], action) => {
//   return state;
// }

//   'ADD_QUOTE'
//   'REMOVE_QUOTE'
//   'UPVOTE_QUOTE'
//   'DOWNVOTE_QUOTE'

export default function quotes(state= {
  quotes: []
}
, action){
  let idx;
  switch(action.type){
    case 'ADD_QUOTE':
      return {
        ...state,
        quotes: [...state.quotes, action.quote]
      }
    case 'REMOVE_QUOTE':
      idx = state.quotes.findIndex(quote => quote.id === action.id)
      return {
        ...state,
        quotes: [...state.quotes.slice(0, idx), ...state.quotes.slice(idx + 1)]
      }
    case 'UPVOTE_QUOTE':
      idx = state.quotes.findIndex(quote => quote.id === action.id)
      // console.log('state.quotes: ', state.quotes)
      // console.log('idx: ',idx)
      // console.log('state.quotes[idx]:', state.quotes[idx])
      // console.log('state.quotes[idx].votes:', state.quotes[idx].votes)
      return {
        ...state,
        // quotes: [...state.quotes, {...state.quotes[idx], votes: state.quotes[idx].votes + 1} ]
        quotes: [...state.quotes.slice(0, idx), {...state.quotes[idx], votes: state.quotes[idx].votes + 1},...state.quotes.slice(idx + 1)]
      }
    case 'DOWNVOTE_QUOTE':
      idx = state.quotes.findIndex(quote => quote.id === action.id)
    return {
      ...state,
      quotes: [...state.quotes.slice(0, idx), {...state.quotes[idx], votes: state.quotes[idx].votes - 1},...state.quotes.slice(idx + 1)]
    }
    default:
      return state
  }
}