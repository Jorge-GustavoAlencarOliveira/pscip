import React from 'react';
import Layout from '../../Components/layout';
import ModalCenter from '../../Components/Modal/Modal';
import Pavimento from '../../Bases/SaidadeEmergencia/pavimento';

const calculadoras = () => {
  const [modalShow, setModalShow] = React.useState(false)
  function handleModalShow (){
    setModalShow(true)
  }
  return (
    <Layout>
      <section className="d-flex flex-column">
        <h2 className='text-primary text-center mb-5'>Calculadoras</h2>
        <div className='m-auto'>
          <div className='d-flex gap-2 mb-4'>
            <button className="btn btn-primary btn-lg w-50">Carga Incêndio</button>
            <button className="btn btn-primary btn-lg">Isolamento de Risco</button>
          </div>
          <div className='d-flex gap-2'>
            <button onClick={handleModalShow} className="btn btn-primary btn-lg w-50">Saída de emergência</button>
            <button className="btn btn-primary btn-lg">Brigada de incêndio</button>
          </div>
        </div>
      </section>
      <ModalCenter show={modalShow} size='xl'  fullscreen='xxl-down' onHide={() => setModalShow(false)}>
        <Pavimento calculadora={true}/>
      </ModalCenter>
    </Layout>
  );
};

export default calculadoras;
