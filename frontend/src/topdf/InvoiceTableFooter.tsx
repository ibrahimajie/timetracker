import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomColor: '#bff0fd',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        fontSize: 12,
        fontStyle: 'bold',
    },
    description: {
        width: '90%',
        textAlign: 'right',
        borderRightColor: '#90e5fc',
        borderRightWidth: 1,
        paddingRight: 8,
    },
    total: {
        width: '10%',
        textAlign: 'right',
        paddingRight: 8,
    },
});

const InvoiceTableFooter = ({ items }: any) => {
    const total = items.map((item: any) => item.seconds * item.pay)
        .reduce((accumulator: any, currentValue: any) => accumulator + currentValue, 0)
    return (
        <View style={styles.row}>
            <Text style={styles.description}>TOTAL</Text>
            <Text style={styles.total}>{Number.parseFloat(total).toFixed(4)}</Text>
        </View>
    )
};

export default InvoiceTableFooter