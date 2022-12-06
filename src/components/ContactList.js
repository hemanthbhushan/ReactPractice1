import React from 'react'
import ContactCard from './ContactCard'

const ContactList = (props) => {
  
   const listHandler =  props.contacts.map((contact)=>{
   return <ContactCard contact = {contact}/>;
   })
  return (
    <div>
        {listHandler}

    </div>
  )
}

export default ContactList