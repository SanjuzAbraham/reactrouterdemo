import React,{useState} from 'react'
import { Button, Form } from 'react-bootstrap';


const Signin = () => {

  /*  const [email, setEmail] = useState(null)
    const [pass, setPassword] = useState(null)

    const handleEmail = (event) => {
       setEmail(event.target.value) // set state value when using hooks
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleSubmit = async() => {
        const data = {
            email: email,
            password: pass
        }
        // API CALL
        try {
            const response = await fetch(`http://localhost:9000/signin`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(data)
            });

            if (response.status === 200) {
                console.log('login sucess')
                // const responseJSON = await response.json()
            }
            else {
                console.log("Invalid credentials");
            }
        } catch (e) {
            console.log('network issue')
        }

    }

        console.log('data', email, pass) */// get state value when using hooks
        return(
            <div className="d-flex justify-content-center">
                <div style={{width:400}}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                </div>

            </div>
        )
}

export default Signin;