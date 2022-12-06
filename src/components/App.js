import React,{useState} from 'react';
import Header from './Header';
import Contact from './Contact';
import ContactCard from './ContactCard';
import ContactList from './ContactList';


const App = () => {

  const contacts = [
    {
      id:1,
      name:"hemanth",
      email:"hemanth@gmail"
    },
    {
      id:2,
      name:"Bhushan",
      email:"bhushan@gmail"
    }
  ]

  return (
    <div>
      <Header/>
      <Contact />
      <ContactCard/>
      <ContactList  contacts = {contacts}/>
    </div>
  )
}

export default App