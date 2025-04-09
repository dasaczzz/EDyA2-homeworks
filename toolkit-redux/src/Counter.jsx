import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementBy, setValueToIncrement } from "./store/slices/counterSlice"

export const Counter = () => {
  const {counter, valueToIncrement} = useSelector(state => state.counter)
  
  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(increment())  
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  const handleIncrementBy = () => {
    const value = parseInt(valueToIncrement)
    if(!value) return
    dispatch(incrementBy(value))
  }

  const handleSetValue = (e) => {
    dispatch(setValueToIncrement(e.target.value))
  }

  return (
    <div>
      <h1>count is: {counter}</h1>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleIncrementBy}>increment by</button>
      <button onClick={handleDecrement}>decrement</button>
    
      <h2>value to increment</h2>
      <input type="number" onChange={handleSetValue}/>
    </div>
  )
}
