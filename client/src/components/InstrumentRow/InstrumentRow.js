import React from 'react';
import Button from 'react-bootstrap/Button';
import trash from '../../trash.svg';

function InstrumentRow({index, instrument, deleteInstrument}) {
    return (
        <tr>
            <td>{instrument.instrumentId}</td>
            <td>{instrument.name}</td>
            <td>{instrument.symbol}</td>
            <td>{instrument.instrumentType}</td>
            <td className="text-center">
                <Button variant="danger" onClick={() => { deleteInstrument(instrument.instrumentId) }}><img alt="delete" src={trash} />
                </Button>
            </td>
        </tr>
    )
}

export default InstrumentRow;