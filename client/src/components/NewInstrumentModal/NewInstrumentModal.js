import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

function NewInstrumentModal({ show, handleClose, saveInstrument }) {
    const [name, setName] = useState('');
    const [symbol, setSymbol] = useState('');
    const [instrumentType, setType] = useState('');

    const resetFields = () => {
        setName('');
        setSymbol('');
        setType('');
    }

    const close = () => {
        resetFields();
        handleClose();
    }

    const save = () => {
        const instrument = {
            name,
            symbol,
            instrumentType
        };
        saveInstrument(instrument);
        resetFields();
        handleClose();
    }

    const isSaveDisable = () => {
        return !name || !symbol || !instrumentType;
    }

    return (
        <Modal show={show} onHide={close}>
          <Modal.Header>
            <Modal.Title>New Instrument</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form > 
              <Form.Group controlId="formInstrumentName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
              </Form.Group>
              <Form.Group controlId="formInstrumentSymbol">
                <Form.Label>Symbol</Form.Label>
                <Form.Control type="text" value={symbol} onChange={e => setSymbol(e.target.value)} placeholder="Symbol" />
              </Form.Group>
              <Form.Group controlId="formInstrumentType">
                <Form.Label>Type</Form.Label>
                <Form.Control type="text" value={instrumentType} onChange={e => setType(e.target.value)} placeholder="Type" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={close}>
              Close
          </Button>
            <Button variant="primary" disabled={isSaveDisable()} onClick={save}>
              Save Changes
          </Button>
          </Modal.Footer>
        </Modal>
        
    )
}

export default NewInstrumentModal;