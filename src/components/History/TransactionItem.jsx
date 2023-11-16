import React from 'react'
import '../History/history.css'
import { useTransactionContext } from '../../Context/TransactionProvider'

export const TransactionItem = ( {transaction} ) => {
  const { deleteTransaction } = useTransactionContext()
  const sign = transaction.amount > 0 ? "" : "-"

  return (
    <div className="transaction">
        <div className="transaction-info">
          <p>{transaction.text}</p>
          <h4>{sign}${Math.abs(transaction.amount)}</h4>
        </div>
        <button onClick={() => deleteTransaction(transaction.id)} className='btn btn-danger btn-delete'>X</button>
      </div>
  )
}
