import React, { useState } from 'react';
import Contact from './Contact';
interface IContact{
    name: string,
    email?:string 

}

const Contacts = () => {
    const [contact,setContact] = useState<IContact>({} as IContact);
    const [contactList,setContactList] = useState<IContact[]>([])
    const onClick=()=>{
        setContactList([...contactList,contact])
        setContact({
            name:"",
            email:""
        })
    }
   
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>  {
        setContact({ ...contact, [e.target.name]:  e.target.value})
    }

    const handleRemove = (email: string) => {
        const newContactList = contactList.filter(c => c.email !== email)
        setContactList(newContactList)
    }
    
    return (
        <div>

            <h1> 🦸 Contact list</h1>
            <div className="form">
                <input 
                    value={contact.name}
                    onChange={onChange}
                    name="name"
                    placeholder="Contact Name"
                    type="text" 
                />
                 <input 
                    value={contact.email}
                    onChange={onChange}
                    name="email"
                    placeholder="Contact Email"
                    type="text" 
                />
               
                <button onClick={onClick}>Add</button>
            </div>
            {
                contactList.map((con)=><Contact name = {con.name}  email = {con.email} handleRemove={handleRemove} key={con.name}></Contact>)
            }
           

        </div>
    );
};

export default Contacts;