import '../History/history.css'
import { TransactionItem } from './TransactionItem'
import { useTransactionContext } from '../../Context/TransactionProvider'
import { Link } from 'react-router-dom'

export const History = () => {
  const { transaction } = useTransactionContext()

  return (
    <div className='history_container'>
      <div className="title">
        <h2>History</h2>
        <h6><Link to={"/history_details"}>Ver detalles</Link></h6>
      </div>
      <div className="transaction-list">
        {transaction.length > 0 ? transaction.map(tran => <TransactionItem key={tran.id} transaction={tran} />) : (
          <>
            <h3>No hay movimientos en el historial</h3>
          </>
        )}
      </div>
    </div>
  )
}