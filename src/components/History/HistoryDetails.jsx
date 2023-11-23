import React from 'react'
import { useTransactionContext } from '../../Context/TransactionProvider'
import { TransactionItemDetailed } from './TransactionItemDetailed'

const HistoryDetails = () => {
  const { transaction } = useTransactionContext()

  return (
    <div className='container-history-details'>
      {transaction.length > 0 ? transaction.map(tran => <TransactionItemDetailed key={tran.id} transaction={tran} />) : (
          <>
            <h3>No hay movimientos en el historial</h3>
          </>
        )}
    </div>
  )
}

export default HistoryDetails
