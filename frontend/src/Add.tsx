import React from 'react';
import { useForm } from 'react-hook-form';

import useFormPersist from 'react-hook-form-persist';

import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PlayFill, StopFill } from 'react-bootstrap-icons';

import { Stopwatch } from './Stopwatch';

export default function Add(props: { setTimers: (arg0: any[]) => void; timers: any; }) {

    const { reset, register, handleSubmit, watch, setValue } = useForm();

    useFormPersist('Time_Tracker', {
        watch,
        setValue,
        storage: window.localStorage
    });

    const onSubmit = (data: any) => {
        data.time = time;
        data.seconds = Math.floor(timer / 1000);      
        data.pay = data.agent === "Erwin" ? (30/3600) : data.agent === "Andri" ? (25/3600) : data.agent === "Siva" ? (25/3600) : data.agent === "Aji" ? (20/3600) : '';
        data.bill = (data.pay * data.seconds);
        addTimer(data);        
        reset();     
        resetsw();        
    };
    // function to make a POST req to the server to insert data to MySQL db
    const addTimer = (data: any) => {
        axios.post("http://localhost:5000/timer", data).then(() => {
            props.setTimers([...props.timers, { data }]);
        });
    };

    const {
        time,
        timer,
        isRunning,
        start,
        stop,
        resetsw,
        dataLoaded
    } = Stopwatch();

    if (!dataLoaded) {        
        return null
    }

    const start182 = () => setValue("start", (new Date().toLocaleString()));
    const end182 = () => setValue("end", (new Date().toLocaleString()));

    const startStart = () => {
        start182();
        start();
    };

    const stopStop = () => {
        end182();
        stop();        
    };

    return (
        <>
            <Card>
                <Card.Body>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group as={Row}>
                            <Col sm={4}>
                                <Form.Control size="sm" required as="textarea" rows={1} placeholder="Project" {...register("project")} />
                                <Form.Control size="sm" {...register("start")} style={{display: 'none'}} />
                            </Col>
                            <Col sm={5}>
                                <Form.Control size="sm" required as="textarea" rows={1} placeholder="Issue" {...register("issue")} />
                                <Form.Control size="sm" {...register("end")} style={{display: 'none'}} />
                            </Col>
                            <Col sm={1}>
                                <Form.Select size="sm" required {...register("agent")} >
                                    <option value="" hidden>Agent</option>
                                    <option value="Erwin">Erwin</option>
                                    <option value="Andri">Andri</option>
                                    <option value="Siva">Siva</option>
                                    <option value="Aji">Aji</option>
                                </Form.Select>
                            </Col>
                            <Col sm={1}>
                                <Form.Control style={{ border: 0, fontSize: 16, paddingLeft: 0, width: 70 }} size="sm" value={time} readOnly={true} />
                                <Form.Control style={{ border: 0, fontSize: 16, paddingLeft: 0, display: 'none' }} size="sm" value={timer} readOnly={true} />                             
                            </Col>
                            <Col sm={1}>
                                {isRunning ? (
                                    <Button className="rounded-circle" size="sm" variant="danger" onClick={stopStop}><StopFill /></Button>
                                ) :
                                    <Button className="rounded-circle" size="sm" variant="success" type="submit" onClick={startStart}><PlayFill /></Button>
                                }
                            </Col>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}  