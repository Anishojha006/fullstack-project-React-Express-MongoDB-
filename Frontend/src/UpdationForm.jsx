import axios from 'axios'
import React from 'react'

const UpdationForm = ({id,UpationState}) => {
console.log(id);

function  UpdatingDescriptionHnadler(e){
    e.preventDefault();
    console.log(e);

    const { description } = e.target.elements;
     axios.patch(`http://localhost:3000/api/notes/${id}`,{
       description:description.value
     }).then(()=>{
        UpationState();
        console.log("Updated Successfully");
        
     })
      
    
}

  return (
    <div className='UpdationForm'>
        <h1 >Description Updation Form</h1>
       <form onSubmit={(e)=>{

            UpdatingDescriptionHnadler(e)
        }}>
  <textarea placeholder='Enter Decription' name='description'></textarea>
         
        <button >Confirm Updation</button>
       </form>
    </div>
  )
}

export default UpdationForm