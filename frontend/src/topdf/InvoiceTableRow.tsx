import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomColor: '#bff0fd',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        fontStyle: 'bold',
    },
    id: {
        width: '5%',
        textAlign: 'center',
        borderRightColor: '#90e5fc',
        borderRightWidth: 1,      
    },
    project: {
        width: '24%',
        borderRightColor: '#90e5fc',
        borderRightWidth: 1,      
    },
    start: {
        width: '13%',
        borderRightColor: '#90e5fc',
        borderRightWidth: 1,
    },
    time: {
        width: '6%',
        textAlign: 'right',
        borderRightColor: '#90e5fc',
        borderRightWidth: 1,
    },
    bill: {
        width: '10%',
        textAlign: 'right',
        paddingRight: 8,
    },
});

const InvoiceTableRow = ({ items }: any) => {
    const rows = items.map((item: any) =>
        <View style={styles.row} key={item.id.toString()}>
        <Text style={styles.id}>{item.id}</Text>
        <Text style={styles.project}>{item.project}</Text>
        <Text style={styles.project}>{item.issue}</Text>
        <Text style={styles.start}>{item.start}</Text>
        <Text style={styles.start}>{item.end}</Text>
        <Text style={styles.time}>{item.time}</Text>        
        <Text style={styles.id}>{item.agent}</Text>
        <Text style={styles.bill}>{(item.seconds * item.pay).toFixed(4)}</Text>
        </View>
    )
    return (<>{rows}</>)
};

export default InvoiceTableRow