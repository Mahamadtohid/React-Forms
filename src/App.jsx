import { useState } from 'react'
import './App.css'

function App() {
  // const [firstName, setFirstName] = useState("")
  // const [lasttName, setLastName] = useState("")

  // function changeHandler(event) {
  //   setFirstName(event.target.value);
  // }
  // function changeLastNameHandler(event) {
  //   setLastName(event.target.value);
  // }

  const [formData, setFormData] = useState({ firstName:"", lastName:"" , comment:"", isVisible:false , mode:""});

  function changeHandler(event) {

    const { name, value, type, checked} = event.target;
    console.log(formData.firstName );
    setFormData(prevFormData => {
      return{
        ...prevFormData,
        [name] : type==="checkbox"? checked : value
        
      }
    })


  }

  return (
    <div className="App bg-gray-700 h-screen flex items-center justify-center">

      <form>
        <input type="text" placeholder='First Name' 
        onChange={changeHandler}
        name="firstName"
        value={formData.firstName}></input>

        <br/>
        <br/>

        <input type="text" placeholder='Last Name' 
        onChange={changeHandler}
        name="lastName"
        value={formData.lastName}></input>
        <br/>
        <br/>

        <textarea type="text" placeholder="Comments" onChange={changeHandler}
        value={formData.comment} name="comment"></textarea>
        <br/>
        <br/>

        <input type="checkbox" checked={formData.isVisible} onChange={changeHandler} name="isVisible"></input>
        <label htmlFor='isVisible'>is it Visible</label>

        <br/>
        <br/>


        <input type="radio" name="mode" id="Online-mode" value="Online-mode"onChange={changeHandler}
        checked={formData.mode === 'Online-mode'}/>
        <label htmlFor='Online-mode'>Online Mode</label>
        <br/>
        <input type="radio" name="mode" id="Offline-mode" value="Offline-mode" onChange={changeHandler}
        
        checked={formData.mode === 'Offline-mode'}></input>
        <label htmlFor='Offline-mode'>Offline Mode</label>
      </form>
      
    </div>
  )
}

export default App
