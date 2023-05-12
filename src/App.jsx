import { useState } from 'react'
import { Header } from './components/header'
import Balance from './components/Balance'
import './App.css'
import IncomeExpenses from './components/incomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import { GlobalProvider } from './context/GlobalState'

function App() {
 

  return (  
   
      <GlobalProvider>
        <Header />
        <div className="contianer">
            <Balance /> 
            <IncomeExpenses/>
            <TransactionList/>
            <AddTransaction/>
        </div>
      </GlobalProvider>
      
  ) 
}

export default App
