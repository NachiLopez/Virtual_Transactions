export const AppReducer = (transactions, action) => {
    switch(action.type){
        case "ADD_TRANSACTION":
            return [action.payload, ...transactions]
        case "DELETE_TRANSACTION":
            const updatedTransactions = transactions.filter(transaction => transaction.id != action.payload)
            return updatedTransactions
        default:
            return transactions
    }
}
