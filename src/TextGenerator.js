// // import { useScrollTrigger } from '@mui/material'
// import { colors } from '@mui/material'
// import React, { useState } from 'react'
// const TextGenerator = () => {
//     const [input,setInput] = useState(1)
//     const [value,setvalue] = useState(9)
//     const [active,setActive] = useState(1)
//     const handleChange =(e)=>{
// setInput(e.target.value)
// setvalue(value-1)
//     }
//     const handkeActive = (id) =>{
// setActive(id)
//     }
   
//     let Obj = [
//         {
//             id:1,
//             name:"devi",
//             title:'D'
//         },
//         {
//             id:2,
//             name:"devi1",
//             title:'S'
//         },
//         {
//             id:3,
//             name:"devi2",
//             title:'ss'
//         },                                                    
//     ]
//   return (
//     <div className='hello'>
//         <h4 className='typing' style={{animationDuration:`value`}}>devilal panchal i am a web developer</h4> <br/>
//         <input type='number' min={1} max={10} onCanPlay={(handleChange)} value={input}></input>
//         <button style={{borderColor:"red"  }}>Plus +</button>
//         <button >Minus -</button>

//         <dvi>
//         <ul>

//             {
//                 Obj.map((item,i)=>{
//                     return<li className={active===item.id?'list activeitem':'list'}  onClick={()=>handkeActive(item.id)} key={i}>{item.id}</li>
//                 })
//             }

//             </ul>
//         </dvi>
//     </div>
//   )
// }

// export default TextGenerator