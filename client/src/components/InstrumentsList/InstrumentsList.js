import React, { useState, useEffect } from 'react';
import NewInstrumentModal from '../NewInstrumentModal/NewInstrumentModal';
import InstrumentsTable from '../InstrumentsTabe/InstrumentsTable';
import instrumentsService from '../../services/instruments.service';
import InstrumentsTableActions from '../InstrumentsTableActions/InstrumentsTableActions';

function InstrumentsList() {
  const [instruments, setInstruments] = useState([]);
  const [search, setSearch] = useState('');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await instrumentsService.getInstruments();
        setInstruments(response.data);
      } catch (err) {
        alert("Error while trying to get instruments");
      }

    }
    fetchData()
  }, []);

  const deleteInstrument = async (instrumentId) => {
    try {
      await instrumentsService.deleteInstrument(instrumentId);
      setInstruments(instruments.filter((instrument) => instrumentId !== instrument.instrumentId))
    } catch (err) {
      alert(`Failed to delete istrument #${instrumentId}`);
    }
  }

  const saveInstrument = async (instrument) => {
    try {
      const results = await instrumentsService.addInstrument(instrument);
      setInstruments([...instruments, results.data]);
    } catch (err) {
      alert(`Failed to save istrument`);
    }
  }

  const getFilteredInstruments = () => {
    return instruments.filter(instrument => {
      return instrument.name.toLowerCase().includes(search.toLowerCase()) ||
        instrument.symbol.toLowerCase().includes(search.toLowerCase())
    })
  }

  return (
    <>
      <h2 className="ml-2">Instruments List</h2>
      <InstrumentsTableActions className="row mb-3 ml-1" handleShow={handleShow} search={search} setSearch={setSearch} />
      <NewInstrumentModal show={show} handleClose={handleClose} saveInstrument={saveInstrument} />
      <InstrumentsTable instruments={getFilteredInstruments()} deleteInstrument={deleteInstrument} />
    </>
  )
}

export default InstrumentsList;
