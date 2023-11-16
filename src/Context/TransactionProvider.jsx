import React, { createContext, useContext, useReducer } from 'react'
import { AppReducer } from './AppReducer'

const TransactionContext = createContext()
export const useTransactionContext = () => useContext(TransactionContext)

const transactions = [
  {
  id: (Math.random()*1000000),
  text: "Payment",
  amount: 150
  },
  {
  id: (Math.random()*1000000),
  text: "Book",
  amount: -50
  }
]

export const TransactionProvider = ({ children }) => {
  const [transaction, dispatch] = useReducer(AppReducer, transactions)

  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id})
  }

  const addTransaction = (newTransaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: newTransaction})
  }

  return (
    <TransactionContext.Provider
      value={{ transaction, dispatch, deleteTransaction, addTransaction }}>
      {children}
    </TransactionContext.Provider>
  )
}
