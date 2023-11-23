import React from 'react'
import { useTransactionContext } from '../../Context/TransactionProvider'

export const FormTransaction = () => {
  const {addTransaction} = useTransactionContext()

  const onSubmitAction = (e) => {
    e.preventDefault()
    
    const today = new Date()
    const date = [today.getMonth(), "-", today.getDate(), "-", today.getFullYear()]
    const time = [today.getHours(), ":", (today.getMinutes()) > 9 ? today.getMinutes() : "0" + today.getMinutes(), ":", today.getSeconds()]
    const newTransaction = {
      id: parseInt((Math.random()*1000000)),
      text: e.target[0].value,
      amount: parseInt(e.target[1].value),
      date: date,
      time: time
    }
    addTransaction(newTransaction)
    e.target[0].value = ""
    e.target[1].value = ""
  }

  return (
    <div>
        <h2>Add transaction</h2>
        <form onSubmit={(e) => onSubmitAction(e)}>
            <label htmlFor="text-transaction">Add the legend of the transaction</label>
            <input className='form-control mt-1 mb-2' type="text" name='text-transaction' placeholder='Enter the transaction' />
            <label htmlFor="amount">Enter the amount of the new transaction</label>
            <input className='form-control mt-1 mb-2' type="number" name="amount" placeholder='Set the amount' />
            <input className='btn btn-outline-dark mt-3' type="submit" name="confirm" value="Add transaction"/>
        </form>
    </div>
  )
}
