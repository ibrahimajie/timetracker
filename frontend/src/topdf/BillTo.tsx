import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 10
    },
    billTo: {
        marginTop: 10,
        paddingBottom: 3,
        fontFamily: 'Helvetica-Oblique'
    },
});

const BillTo = ({ invoice }: any) => (
    <View style={styles.headerContainer}>
        <Text style={styles.billTo}>Bill To:</Text>
        <Text>{invoice.company}</Text>
        <Text>{invoice.address}</Text>
        <Text>{invoice.phone}</Text>
        <Text>{invoice.email}</Text>
    </View>
);

export default BillTo