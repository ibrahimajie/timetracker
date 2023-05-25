import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomColor: '#bff0fd',
        backgroundColor: '#bff0fd',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        textAlign: 'center',
        fontStyle: 'bold',
        flexGrow: 1,
    },
    id: {
        width: '5%',
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
        borderRightColor: '#90e5fc',
        borderRightWidth: 1,
    },
    bill: {
        width: '10%'
    },
});

const InvoiceTableHeader = () => (
    <View style={styles.container}>
        <Text style={styles.id}>ID</Text>
        <Text style={styles.project}>Project</Text>
        <Text style={styles.project}>Issue</Text>
        <Text style={styles.start}>Start</Text>
        <Text style={styles.start}>End</Text>
        <Text style={styles.time}>Time</Text>        
        <Text style={styles.id}>Agent</Text>
        <Text style={styles.bill}>Bill</Text>
    </View>
);

export default InvoiceTableHeader