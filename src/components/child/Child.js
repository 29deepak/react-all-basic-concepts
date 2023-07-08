import React from 'react'

const Child = ({name,email}) => {
    const data=[{
        id:1,
        name:"deepak"
    },{
        id:2,
        name:"kunal"
    },{
        id:3,
        name:"abc"
    },{
        id:4,
        name:"xyz"
    }]
    
  return (
    <button > Send Data To parent name:{name} email:{email}</button>
  )
}

export default Child
























// we can use direct make curly bracket data is which passs in app,js that same name

// import React from 'react'

// const Child = ({ondata}) => {
//     const data=[{
//         id:1,
//         name:"deepak"
//     },{
//         id:2,
//         name:"kunal"
//     },{
//         id:3,
//         name:"abc"
//     },{
//         id:4,
//         name:"xyz"
//     }]
//     function handleClick(){
//         ondata(data)
//     }
//   return (
//     <button onClick={handleClick}> Send Data To parent</button>
//   )
// }

// export default Child

// data is wriiitten like this also props then that data name


// import React from 'react'

// const Child = (props) => {
//     const data=[{
//         id:1,
//         name:"deepak"
//     },{
//         id:2,
//         name:"kunal"
//     },{
//         id:3,
//         name:"abc"
//     },{
//         id:4,
//         name:"xyz"
//     }]
//     function handleClick(){
//         props.ondata(data)
//     }
//   return (
//     <button onClick={handleClick}> Send Data To parent</button>
//   )
// }

// export default Child

// data is came through from parent node to child node

// import React from 'react'

// const Child = ({name,email}) => {
//     const data=[{
//         id:1,
//         name:"deepak"
//     },{
//         id:2,
//         name:"kunal"
//     },{
//         id:3,
//         name:"abc"
//     },{
//         id:4,
//         name:"xyz"
//     }]
    
//   return (
//     <button > Send Data To parent name:{name} email:{email}</button>
//   )
// }

// export default Child