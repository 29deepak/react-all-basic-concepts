import React ,{useContext} from 'react'
import { AppContext } from './App'
const Login = () => {
    const {setUsername} = useContext(AppContext);
  return (
    
    <div>
        <input onChange={(event)=>{
            setUsername(event.target.value)
        }}/>
    </div>
  )
}

export default Login









// import React from 'react'

// const Login = ({setUsername}) => {
//   return (
//     <div>
//         <input onChange={(event)=>{
//             setUsername(event.target.value)
//         }}/>
//     </div>
//   )
// }

// export default Login