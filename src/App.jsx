import './App.css';
import { TransactionProvider } from './Context/TransactionProvider';
import Balance from './components/Balance/Balance';
import Header from './components/Header/Header';
import { History } from './components/History/History';
import HistoryDetails from './components/History/HistoryDetails';
import { FormTransaction } from './components/Transaction/FormTransaction';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
        <TransactionProvider>
          <div className='container'>
            <Routes>
              <Route path="/home" element={
                <>
                  <Balance />
                  <History />
                  <FormTransaction />
                </>
              } />
              <Route path='/history_details' element={<HistoryDetails/>}/>
            </Routes>
          </div>
        </TransactionProvider>
      </Router>
    </div>
  );
}

export default App;
