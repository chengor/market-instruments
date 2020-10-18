import React from 'react';
import Button from 'react-bootstrap/Button';

function InstrumentsTableActions({className, handleShow, search, setSearch}) {

    return (
        <div className={className}>
            <input type="text" className="align-middle mr-2 ml-2 w-25" placeholder={"Search By Name or Symbol..."} value={search} onChange={e => setSearch(e.target.value)} />
            <Button variant="primary" onClick={handleShow}>Add Instrument</Button>
        </div>
    )
}

export default InstrumentsTableActions;