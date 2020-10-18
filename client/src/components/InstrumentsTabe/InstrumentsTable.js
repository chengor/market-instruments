import React from 'react';
import Table from 'react-bootstrap/Table';
import InstrumentRow from '../InstrumentRow/InstrumentRow';

function InstrumentsTable({instruments, deleteInstrument}) {

    const getInstrumentsElements = () => {
        return instruments.map((instrument, index) =>
            <InstrumentRow key={instrument.instrumentId} index={index} instrument={instrument} deleteInstrument={deleteInstrument} />
        )
    }

    return (
        <Table size="sm" striped bordered hover>
            <thead>
                <tr>
                    <th>Instrument ID</th>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Instrument Type</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {getInstrumentsElements()}
            </tbody>
        </Table>
    )
}

export default InstrumentsTable;
