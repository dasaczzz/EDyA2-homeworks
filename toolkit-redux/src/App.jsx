import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementBy } from "./store/slices/counter/counterSlice"

function App() {

  const {counter} = useSelector(state => state.counter)

  const dispatch = useDispatch()

  return (
    <>
      <h1>count is: {counter}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(incrementBy(10))}>increment by</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </>
  )
} 

export default App
