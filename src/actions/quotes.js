// TODO: Create action creators as defined in tests


//   const quote = {
//     content: 'test quote',
//     author: 'test author',
//     votes: 0,
//     id: uuid()
//   }
//   'ADD_QUOTE'
//   'REMOVE_QUOTE'
//   'UPVOTE_QUOTE'
//   'DOWNVOTE_QUOTE'

export const addQuote = quote => {
    return {
        type: 'ADD_QUOTE',
        quote
    }
}

export const removeQuote = id => {
    return {
        type:'REMOVE_QUOTE',
        id
    }
}

export const upvoteQuote = id => {
    return {
        type:'UPVOTE_QUOTE',
        id
    }
}


export const downvoteQuote = id => {
    return {
        type:'DOWNVOTE_QUOTE',
        id
    }
}