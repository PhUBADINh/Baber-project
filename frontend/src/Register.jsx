// eslint-disable-next-line no-unused-vars
import React, { useState }  from "react";
const apiUrl =import.meta.env.VITE_API_URL;

export default function Register(){
    const [formData,setFormData]=useState({
        first_name :'',
        last_name:'',
        nick_name:'',
        email:'',
        phone_number:'',
        password:'',

    });
    const [message,setMessage]=useState('');
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit =async (e)=>{
        e.preventDefault();
        if (formData.password<8){
            setMessage('password must be at least 8 character long')
            return ;
        }
        try{
            const response =await fetch(`${apiUrl}/register/`,{
                method:'POST',
                headers:{
                        'Content-Type': 'application/json',
                },
                body:JSON.stringify(formData),
            })
            const data =await response.json();
            if (response.ok){
                setMessage('Resgistration succenful ');

                setFormData({
                    first_name: '',
                    last_name: '',
                    nick_name: '',
                    email: '',
                    phone_number: '',
                    password: '',
                })
            } else {
                setMessage(data.detail || 'Error: Unable to register');
            }


        } catch (error) {
            setMessage('Error: Unable to register');
            console.error(error);
        }
    }


    return (<>
        <div>   
            <h1> Register</h1>
            <form onSubmit={handleSubmit} className="flex-col bg-blue-200">
                <label>First Name:</label>
                <input type="text" 
                    name="first_name" 
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                
                />
                <label>Last Name:</label>
                <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    required
                />
                <label>Nickname:</label>
                <input
                    type="text"
                    name="nick_name"
                    value={formData.nick_name}
                    onChange={handleChange}
                    required
                />
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <label>Phone Number:</label>
                <input
                    type="text"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    required
                />
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Register</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    
    </>)
}