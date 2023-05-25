import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Delete from './Delete';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Dbtt() {

    const [timer, setTimer] = useState([]);

    useEffect(() => {
        const getTimer = () => {
            axios.get("http://localhost:5000/timer").then((res) => {
                setTimer(res.data);
            });
        };
        getTimer();
    }, [timer]);

    return (
        <>
            {timer.map((item: any, index: any) => (                            
                <Card key={index} >
                    <Card.Body>
                        <Row>
                            <Col sm={4}>{item.project}<br />{item.start}</Col>
                            <Col sm={5}>{item.issue}<br />{item.end}</Col>
                            <Col sm={1}>{item.agent}<br />{item.pay}</Col>
                            <Col sm={1}>{item.time}<br />{item.seconds}</Col>
                            <Col sm={1}><Delete id={item.id} timers={timer} setTimers={setTimer} /><br />{item.bill}
                                {/* <Edit id={item.id} timers={timer} setTimers={setTimer} /> */}
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            ))}
        </>
    )
}