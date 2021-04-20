import React from 'react'
import LeftSide from '../components/login/LeftSide';
import RigthSide from '../components/login/RigthSide';
import {Row, Col} from 'react-bootstrap'

const Login = () =>{
    return (
        <div>
            <Row className="landing">
                <Col><LeftSide></LeftSide></Col>
                <Col><RigthSide></RigthSide></Col>
            </Row>
        </div>
    )
}

export default Login