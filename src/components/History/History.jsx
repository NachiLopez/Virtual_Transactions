import '../History/history.css'
import { TransactionItem } from './TransactionItem'
import { useTransactionContext } from '../../Context/TransactionProvider'

export const History = () => {
  const {transaction}  = useTransactionContext()

  return (
    <div>
      <h3>History</h3>
      {transaction.map(tran => <TransactionItem key={tran.id} transaction={tran}/>)}
    </div>
  )
}