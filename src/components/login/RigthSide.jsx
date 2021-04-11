import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import { auth } from '../../firebaseconfig'

const RigthSide = () => {

    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [msgError, setMsgError] = useState('')

    const validar = (event) => {
        
        try {
            event.preventDefault()
            auth.signInWithEmailAndPassword(email, password)
            alert('Login')
        } catch (error) {
            console.log(error.code)
            if(error.code === 'auth/invalid-email'){
                setMsgError('Formato email incorrecto')
            }
            if(error.code === 'auth/weak-password'){
                setMsgError('La contrase;a debe tener al menos 6 caracteres')
            }
            if(error.code === 'auth/wrong-password'){
                setMsgError('La contrase;a es incorrecta')
            }
        }
        
                
    }
{/** onSubmit={validar}*/}
    return (
        <div>
            <div>
                <br/><br/><br/>
                <Form onSubmit={validar} style={{width:"80%", marginRight:"10%", marginTop:"10%"}}>
                <Form.Group>
                        <h3>Welcome to Panza Admin</h3>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter your email</Form.Label>
                        <Form.Control type="email" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}} required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter your password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}} required/>
                    </Form.Group><br/>
                    {msgError !== '' ? (<div>{msgError}</div>) : (<span></span>)}
                    <Form.Group>
                        <Button variant="primary" className="btn btn-block">Login</Button>{' '}
                    </Form.Group>
                </Form>
            </div>
        </div>
    )
}

export default RigthSide
