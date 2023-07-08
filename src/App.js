import React ,{useState,createContext } from 'react';
import Child from './components/child/Child'
import Login from './Login'
import User from './User'



export const AppContext =createContext(null);
function App() {
  
  const [username,setUsername] =useState("");
  
  return (
    
    <AppContext.Provider value={{username,setUsername}}>
      <Login/><User/>
    </AppContext.Provider>
  );
}

export default App;








//usecontext ---app.js,user.js,login.js



// import React ,{useState} from 'react';
// import Child from './components/child/Child'
// import Login from './Login'
// import User from './User'
// function App() {
  
//   const [username,setUsername] =useState("");
  
//   return (
    
//     <div>
//       <Login setUsername={setUsername}/><User username={username} />
//     </div>
//   );
// }

// export default App;










// data is coming from child component to parent component


// import React ,{useState} from 'react';
// import Child from './components/child/Child'
// function App() {
//   const [dataFromChild,setDataFromChild]=useState()
//   const childComponent =(data) =>{
//     setDataFromChild(data)
//   }
//   return (
//     <div className="App">
//       {console.log(dataFromChild)}
//      <Child ondata={childComponent} />
//     </div>
//   );
// }

// export default App;

// data is pass from parent to child node 

// import React ,{useState} from 'react';
// import Child from './components/child/Child'
// function App() {
  
//   return (
//     <div className="App">
//      <Child name={"deepak"} email={"123@gmail.com"} />
//     </div>
//   );
// }

// export default App;