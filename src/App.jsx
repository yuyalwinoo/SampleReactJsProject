
import { Provider } from "react-redux"
import Index from "./components/InfoData/Index"
import Two from "./components/Two/Two"
import Toggle from "./components/customHook/Toggle"
import Product from "./components/driveIntoAsync/Product"
import ReduxIndex from "./components/redux/ReduxIndex"
import AllToDos from "./components/useEffectAnduseReducer/allToDos/AllToDos"
import Counter from "./components/useEffectAnduseReducer/counterApp/Counter"
import ToDoByID from "./components/useEffectAnduseReducer/toDoByID/ToDoByID"
import store from "./store/index"

function App() {

  return (
    <>
      {/* <Two /> */}
      {/* <Index/> */}
      {/* <Counter /> */}
      {/* <AllToDos /> */}
      {/* <ToDoByID/> */}
      {/* <Toggle/> */}
      {/* <Product/> */}
      <Provider store={store}>
        <ReduxIndex/>
      </Provider>
    </>
  )
}

export default App
