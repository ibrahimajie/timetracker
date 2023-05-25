import React from 'react';
import { Page, Document, Image, StyleSheet } from '@react-pdf/renderer';
import InvoiceTitle from './InvoiceTitle'
import BillTo from './BillTo'
import InvoiceNo from './InvoiceNo'
import InvoiceItemsTable from './InvoiceItemsTable'
import InvoiceThankYouMsg from './InvoiceThankYouMsg'

let logo = require('./logo.png');

const styles = StyleSheet.create({
    page: {
        fontSize: 10,
        paddingTop: 25,
        paddingLeft: 25,
        paddingRight: 25,
        flexDirection: 'column',
    },
    logo: {
        width: 60,
        height: 52,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
});

const Invoice = ({ invoice }: any) => (
    <Document>
        <Page size="A4" orientation="landscape" style={styles.page}>
            <Image style={styles.logo} src={logo} />
            <InvoiceTitle title='INVOICE' />
            <InvoiceNo invoice={invoice} />
            <BillTo invoice={invoice} />
            <InvoiceItemsTable invoice={invoice} />
            <InvoiceThankYouMsg />
        </Page>
    </Document>
);

export default Invoice