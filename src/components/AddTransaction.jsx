import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { nanoid } from 'nanoid'
export default function AddTransaction() {
const [text,setText] = useState('')
const [amount,setAmount] =useState('')
const {addTransaction,transactions} = useContext(GlobalContext)

const onSubmit = e =>{
  e.preventDefault()
  const newTransaction = {
    id:nanoid(),
    text,
    amount:+amount
  }
  addTransaction(newTransaction)
  setText('')
  setAmount('')
 
}

  return (
    <div>
        <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control" >
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." required />
        </div>
        <div className="form-control"> 
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." required />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  )
}
