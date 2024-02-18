import React from 'react'
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { useState, useRef } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice' 
import Card from './Card'
import { useSelector } from 'react-redux'

function Foreground() {

    const todos = useSelector(state => state.todos)
    const ref = useRef(null);
    const dispatch = useDispatch()

    const handleAdd = () => {
      dispatch(addTodo(""))
    }

  return (
    <div ref={ref} className='fixed top-9 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5'>
      <button onClick={handleAdd} className='mt-3 mx-10 right-0 absolute p-1 bg-zinc-950 rounded-full'> <MdOutlineAddCircleOutline size={50} color='white'/> </button>
        {todos.map((todo,index) => (
            <Card todo={todo} key={index} reference={ref}/>
        ))}
    </div>
  )
}

export default Foreground