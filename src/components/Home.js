import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Home  = () => {
    const [email, setEmail] = useState("");
    
    const sendEmail = async (e) =>{
        e.preventDefault();

        const res = await fetch("/register", {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({email})
        })
        console.log(res);
    }
  return (
    <>
    <div className='container mt-2'>
        <div className='d-flex justify-content-center'>
            <h2>Sent Email With React and NodeJs.</h2>
            <img src='/Gmail-Icon.png' alt='email' style={{width:"50px"}}/>
        </div>
        <div className='d-flex justify-content-center'>
        <Form className='mt-2 col-lg-6'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Your Mail</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={sendEmail}>
        Send
      </Button>
    </Form>
        </div>
    </div>
    </>
  )
}

export default Home;