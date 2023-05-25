import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    invoiceNoContainer: {
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'flex-start'
    },
    invoiceDateContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    invoiceDate: {
        fontSize: 12,
        fontStyle: 'bold',
    },
    label: {
        width: 60
    }
});

const InvoiceNo = ({ invoice }: any) => (
    <>
        <View style={styles.invoiceNoContainer}>
            <Text style={styles.label}>Invoice No.</Text>
            <Text style={styles.invoiceDate}>: {invoice.invoice_no}</Text>
        </View >
        <View style={styles.invoiceDateContainer}>
            <Text style={styles.label}>Date</Text>
            <Text >: {invoice.trans_date}</Text>
        </View >
    </>
);

export default InvoiceNo