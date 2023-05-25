import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

// import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
// import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { PDFViewer } from '@react-pdf/renderer'
import Invoice from './topdf/Invoice'


export default function Filter() {
    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [filteredList, setFilteredList] = useState(products);
    const [selectedAgent, setSelectedAgent] = useState("");

    useEffect(() => {
        axios.get("http://localhost:5000/timer")
            .then((response) => {
                setProducts(response.data);
                setAllProducts(response.data);
            })
    }, [])

    const handleSelect = (date: any) => {
        let filtered = allProducts.filter((product) => {
            let productDate = new Date(product["end"]);
            return (productDate >= date.selection.startDate &&
                productDate <= date.selection.endDate);
        })
        setStartDate(date.selection.startDate);
        setEndDate(date.selection.endDate);
        setProducts(filtered);
    };

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }

    const handleAgentChange = (event: any) => {
        setSelectedAgent(event.target.value);
    };

    useEffect(() => {
        const filterByAgent = (filteredData: any) => {
            // Avoid filter for empty string
            if (!selectedAgent) {
                return filteredData;
            }
            const filteredCars = filteredData.filter(
                (car: any) => car.agent?.split(" ").indexOf(selectedAgent) !== -1
            );
            return filteredCars;
        };
        var filteredData = filterByAgent(products);
        setFilteredList(filteredData);
    }, [selectedAgent, products]);

    const invoice = {
        "id": Date.now(),
        "invoice_no": Date.now(),
        "balance": "$2,283.74",
        "company": "Mireaux Management Solutions",
        "email": "info@mireauxms.com",
        "phone": "+1 713-589-4680",
        "address": "12802 Willow Centre Dr, Houston, TX 77066, United States",
        "trans_date": Date().toLocaleString(),
        "due_date": "2019-10-12",
        "items": (filteredList)
    }

    return (
        <>
            {/* <Table bordered responsive="sm">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>project</th>
                        <th>issue</th>
                        <th>agent</th>
                        <th>time</th>
                        <th>seconds</th>
                        <th>pay</th>
                        <th>bill</th>
                        <th>start</th>
                        <th>end</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product: any, i: any) => {
                        let date = new Date(product["end"]);
                        return (
                            <tr key={i}>
                                <td>{product["id"]}</td>
                                <td>{product["project"]}</td>
                                <td>{product["issue"]}</td>
                                <td>{product["agent"]}</td>
                                <td>{product["time"]}</td>
                                <td>{product["seconds"]}</td>
                                <td>{product["pay"]}</td>
                                <td>{product["bill"]}</td>
                                <td>{product["start"]}</td>
                                <td>{date.toLocaleString()}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table> */}

            <Container>
                <Row>
                    <Col sm>
                        <DateRangePicker
                            ranges={[selectionRange]}
                            onChange={handleSelect}
                        />
                    </Col>
                    <Col sm>
                        <Form.Select size="sm" required value={selectedAgent} onChange={handleAgentChange} >
                            <option value="" hidden>Agent</option>
                            <option value="Erwin">Erwin</option>
                            <option value="Andri">Andri</option>
                            <option value="Siva">Siva</option>
                            <option value="Aji">Aji</option>
                        </Form.Select>
                    </Col>
                </Row>
            </Container>

            <PDFViewer width="100%" height="600" >
                <Invoice invoice={invoice} />
            </PDFViewer>

            {/* {filteredList.map((item: any, index: any) => (
                <Card key={index}>
                    <Card.Body>
                        <Row>
                            <Col sm={4}>{item.project}<br />{item.start}</Col>
                            <Col sm={5}>{item.issue}<br />{item.end}</Col>
                            <Col sm={1}>{item.agent}<br />{item.pay}</Col>
                            <Col sm={1}>{item.time}<br />{item.seconds}</Col>
                            <Col sm={1}><br />{item.bill}</Col>
                        </Row>
                    </Card.Body>
                </Card>
            ))} */}
        </>
    );
}