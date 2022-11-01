import axios from 'axios';
import React from 'react'

const Todo = () => {
    const[data,setData]=React.useState([])
    React.useEffect(()=>{
        axios.get("http://localhost:8000/gettasks")
        .then((res) => {
            setData(res.data)
            console.log(data);
        })
        .catch((e) => {
         console.log(e);
        });
    },[data])
  return (
    <div>


    </div>
  )
}

export default Todo