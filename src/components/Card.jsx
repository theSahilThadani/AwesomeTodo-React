import React, { useMemo } from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import {updateTodo} from '../features/todo/todoSlice'
import { motion } from "framer-motion"
import { FaRegFileAlt } from "react-icons/fa";
import { FiSave } from "react-icons/fi";
import { FaPen } from "react-icons/fa";


function Card({todo,reference},{index}) {


  const [input, setInput] = useState(todo.discription)
  const [editable, setEditable] = useState(false)
  const [Complete, setComplete] = useState(false)
  const dispatch = useDispatch()

  const handlesave = (todoid) => {
    console.log(todoid, input)
    dispatch(updateTodo({id:todoid,discription:input}))
    setEditable(false)
  }

  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} dragElastic={.1}
     dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
     className='relative flex-shrink-0 w-[14vw] h-[18vw] rounded-[30px] bg-zinc-950/90 text-white px-[1.2vw] py-[2vw] overflow-hidden'>
        <FaRegFileAlt />
        <button className='absolute p-4 right-5 top-6' onClick={()=>{
          if(editable){
                handlesave(todo.id)
            }
            else{
              setEditable(true)
            }
        }} >{editable ? <FiSave/> : <FaPen/>}</button>
        {editable?< input className='text-sm leading-tight mt-[1.5vw] h-[9vw] bg-zinc-950/90 font-semibol w-full border-none outline-none'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />:<p className='text-lg leading-tight mt-[1.5vw] font-todoText font-semibol w-full'>{todo.discription}</p>}
        <div className='footer absolute bottom-0 w-full left-0'>
            {/* <div className='flex items-center justify-between px-8 py-3 mb-3'></div> */}
            <div className={Complete ?`tag  bg-green-600 flex items-center justify-center`:"tag  bg-blue-800 flex items-center justify-center"}>
                <button onClick={()=>{setComplete(!Complete)}} className=' text-md w-full py-[.8vw] font-semibold font-todoText'>{Complete?"Completed":"Pennding"}</button>
            </div>
        </div>
    </motion.div>
  )
}

export default Card