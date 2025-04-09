import { useDispatch, useSelector } from "react-redux"
import { push, pop, setItemToAdd } from './store/slices/stackSlice'

export const Stack = () => {

  const {stack, itemToAdd} = useSelector(state => state.stack)
  
  const dispatch = useDispatch()

  const handlePush = () => {
    if (itemToAdd === '') return
    dispatch(push())
  }

  const handlePop = () => {
    dispatch(pop())
    setItemToAdd('')
  }

  const handleChangeInput = (e) => {
    dispatch(setItemToAdd(e.target.value))
  }

  return (
    <div>
      <input type="text" onChange={handleChangeInput} />
      <button onClick={handlePush}>add</button>

      <button
        onClick={handlePop}
      >
        pop top item
      </button>

      <h3>items stack</h3>
      <ul>
      {stack.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  )
}
