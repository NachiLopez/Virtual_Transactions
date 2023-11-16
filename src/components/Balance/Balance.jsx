import '../Balance/balance.css'
import { useTransactionContext } from '../../Context/TransactionProvider'

const Balance = () => {
  const {transaction} = useTransactionContext()

  return (
    <div className='balance'>
        <p>YOUR BALANCE</p>
        <h2>${transaction.reduce((total, transaction) => (total + transaction.amount), 0)}</h2>
        <div className="income_and_expense">
          <div className="income"> 
            <h3>INCOME</h3>
            <h2>${transaction.filter(tran => tran.amount > 0).reduce((total, transac) => total + transac.amount, 0)}.00</h2>
          </div>
          <div className="expense">
            <h3>EXPENSE</h3>
            <h2>${Math.abs(transaction.filter(tran => tran.amount < 0).reduce((total, transac) => total + transac.amount, 0))}.00</h2>
          </div>
        </div>
    </div>
  )
}

export default Balance
