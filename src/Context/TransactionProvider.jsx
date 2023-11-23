import React, { createContext, useContext, useReducer } from 'react'
import { AppReducer } from './AppReducer'

const TransactionContext = createContext()
export const useTransactionContext = () => useContext(TransactionContext)

const transactions = []

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
