import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { BalanceInvested } from './components/BalanceInvested';
import { CurrentBid } from './components/CurrentBid';
import { AddBid } from './components/AddBid';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header/>
        <Balance />
        <BalanceInvested/>
        <CurrentBid/>
        <AddBid/>
      </div>
    </GlobalProvider>
  );
}

export default App;
