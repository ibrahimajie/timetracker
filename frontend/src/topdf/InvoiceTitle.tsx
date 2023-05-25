import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    reportTitle: {
        color: '#61dafb',
        letterSpacing: 1,
        fontSize: 25,
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
});

const InvoiceTitle = ({ title }: any) => (
    <View style={styles.titleContainer}>
        <Text style={styles.reportTitle}>{title}</Text>
    </View>
);

export default InvoiceTitle