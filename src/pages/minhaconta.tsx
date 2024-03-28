import React from 'react';
import { DataStorage } from '../../dataContext';
import Layout from '../../Components/UI/layout';

const Minhaconta = () => {
  const { user } = React.useContext(DataStorage);
  return (
    <>
      <Layout>
        <div></div>
      </Layout>
    </>
  );
};

export default Minhaconta;
