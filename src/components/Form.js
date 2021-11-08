import { useState } from 'react';
import Input from './Input.js';

function Form(props) {
    const [formState, setFormState] = useState({
      image:'',
      name:'',
      action: '',
      diet: '',
      temp: '',
      location:''
    });

  function handleChange(event) {
    setFormState(prevState => ({
      ...prevState,
      [event.target.id] : event.target.value
    }));
  }

  function handleSubmit(event){
    event.preventDefault();
    props.handleAdd(formState);
  }
    return (
      <form onSubmit={handleSubmit}>
        <Input
          handleChange={handleChange}
          name="image"
          placeholder="Image"
          type="text"
          value={formState.image}
          id="image"
         />
        <Input
          handleChange={handleChange}
          name="name"
          placeholder="Animal Name"
          type="text"
          value={formState.name}
          id="animalName"
         />
         <Input
           handleChange={handleChange}
           name="action"
           placeholder="Action"
           type="text"
           value={formState.action}
           id="action"
        />
        <Input
          handleChange={handleChange}
          name="diet"
          placeholder="Diet"
          type="text"
          value={formState.diet}
          id="diet"
        />
        <Input
          handleChange={handleChange}
          name="temperament"
          placeholder="Temperament"
          type="text"
          value={formState.temp}
          id="temp"
        />
        <Input
          handleChange={handleChange}
          name="location"
          placeholder="Location"
          type="text"
          value={formState.location}
          id="location"
         />
       <input type="submit" value="Add Entry"/>
      </form>
    );
  }

export default Form;