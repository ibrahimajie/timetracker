import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        marginTop: 12
    },
    reportTitle: {
        fontSize: 12,
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
});

const InvoiceThankYouMsg = () => (
    <View style={styles.titleContainer}>
        <Text style={styles.reportTitle}>THANK YOU FOR YOUR BUSINESS</Text>
    </View>
);

export default InvoiceThankYouMsg