import React from 'react'
import './history.css'
import { useTransactionContext } from '../../Context/TransactionProvider'

export const TransactionItemDetailed = ({ transaction }) => {
    const { deleteTransaction } = useTransactionContext()
    const sign = transaction.amount > 0 ? "" : "-"

    return (
        <div className="transaction-detailed-item">
            <h3>Transaction id: {transaction.id}</h3>
            <h5>Type: {transaction.text}</h5>
            <h5>Amount: <span className={transaction.amount > 0 ? "amount-positive" : "amount-negative"}>{sign}${Math.abs(transaction.amount)}</span></h5>
            <h5>Date: {transaction.date}</h5>
            <h5>Time: {transaction.time}</h5>
            <button onClick={() => deleteTransaction(transaction.id)} className='btn btn-danger'>Eliminar transaccion</button>
        </div>
    )
}
