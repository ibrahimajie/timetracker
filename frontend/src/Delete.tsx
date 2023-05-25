import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { X } from 'react-bootstrap-icons';
import React from 'react';

export default function Delete(props: { id: number; setTimers: (arg0: any) => void; timers: any[]; }) {    
    const deleteTimer = () => {
        axios.delete(`http://localhost:5000/timer/${props.id}`).then((res) => {           
            props.setTimers(props.timers.filter((item) => {
                return item.id !== props.id;
            })
            );
        });
    };
 
    return (
        <Button className="rounded-circle" size="sm" variant="warning" onClick={deleteTimer}>
            <X />
        </Button>
    );
}