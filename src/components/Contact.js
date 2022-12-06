import React from 'react'

const Contact = () => {
  return (
    <div>
        <form>
            <div>
                <span>name</span><br></br>
                <input type = "text" name='name' placeholder='name' />  
                
             </div>
             <div>
                <span>Email</span><br></br>
                <input type = "email" name='name' placeholder='name'/>  
                
             </div>
             <button>AddContact</button>
        </form>
    </div>
  )
}

export default Contact