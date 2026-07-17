import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UpdationForm from './UpdationForm';
const App = () => {
  const [notes, setnotes] = useState([]);
  const [id, setid] = useState();
  const [UpdateForm, setUpdateform] = useState({
    UpdationForm:false
  })
  function fetchingNotes() {
    axios.get(" https://fullstack-project-react-express-mongodb.onrender.com/api/notes")
      .then((res) => {
        console.log("Fetching notes");
        setnotes(res.data.notes);
      })
  }

  function handelSubmit(e) {
    e.preventDefault();

    const { title, description } = e.target.elements;
    console.log(title.value, description.value);
    axios.post("https://fullstack-project-react-express-mongodb.onrender.com/api/notes", {
      title: title.value,
      description: description.value
    })
      .then((res) => {
        console.log(res.data);
        fetchingNotes();

      })

  }
  
  function handelDeletenote(noteId){
    axios.delete(`https://fullstack-project-react-express-mongodb.onrender.com/api/notes/${noteId}`)
    .then(()=>{
      fetchingNotes();
    })
  }

  function UpationState(){
    setUpdateform({
      UpdationForm:!UpdateForm.UpdationForm
    })
    fetchingNotes();
  }
   function OpeningUpdateWindow(id){
    console.log(id,"opeing updation window");
 UpationState();
           setid(id);
   
   }
  useEffect(() => {
    fetchingNotes();
  }, [])

  return (
    <>
  
    { UpdateForm.UpdationForm && <UpdationForm  id={id} UpationState={UpationState} />}
      <form className='note-creation-form' onSubmit={handelSubmit}>
        <input name='title' type="text" placeholder='Enter title' />
        <input name='description' type="text" placeholder='Enter description' />
        <button>Create note</button>
      </form>

      <div className="notes">
        {notes.map((note) => {

          return <div className="note">
            <h1>{note.title}</h1>
            <p>{note.description}</p>
            <button onClick={()=>{
              handelDeletenote(note._id)
            }}>delete</button>

            <button className='Update' onClick={()=>{
              OpeningUpdateWindow(note._id)
            }}>Update</button>
          </div>
        })}

      </div>
     
    </>
  )
}

export default App