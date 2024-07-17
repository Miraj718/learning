import './App.css';
import AsyncAwait from './components/AsyncAwait';
import MyForm from './components/MyForm';
import UseContext from './components/UseContext';
import UseEffect from './components/UseEffect';
// import UseReducer from './components/UseReducer';
import UseRef from './components/UseRef';
import UseState from './components/UseState';

function App() {
  return (
    <>
     <UseState/>
     <UseEffect/>
     <UseContext/>
     <AsyncAwait/>
     <UseRef/>
     <MyForm/>
     {/* <UseReducer/> */}
    </>
  );
}

export default App;
