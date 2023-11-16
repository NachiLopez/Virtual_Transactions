import './App.css';
import { TransactionProvider } from './Context/TransactionProvider';
import Balance from './components/Balance/Balance';
import Header from './components/Header';
import { History } from './components/History/History';
import { FormTransaction } from './components/Transaction/FormTransaction';

function App() {
  return (
      <div className='app'>
        <TransactionProvider>
          <Header/>
          <div className='container'>
            <Balance/>
            <History/>
            <FormTransaction/>
          </div>
        </TransactionProvider>
      </div>
  );
}

export default App;
