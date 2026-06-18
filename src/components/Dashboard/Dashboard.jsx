import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getEnviosAction, newEnvioAction } from '../../store/actions';

import { envios } from '../Envios/Envios';
import { departamentos } from '../Departamentos/Departamentos';
import { nuevoEnvio, eliminarEnvio } from '../Envio/Envio';
import { ObtenerCategorias } from '../Categorias/Categorias';
import { ciudadesPorDpto, ciudades } from '../Ciudades/Ciudades';


//import NewSaleForm from './NewSaleForm';
import SalesList from './SalesList/SalesList';
import SalesCounter from './SalesCounter/SalesCounter';

import BarChart from './Charts/Chart';

const Dashboard = () => {
  //const [salesCounter, setSalesCounter] = useState(0);

  const userLogged = useSelector(state => state.user);
  const newEnvio = useSelector(state => state.newEnvio);
  const ciudades = useSelector(state => state.ciudades);
  const envios = useSelector(state => state.envios);
  const dispatch = useDispatch();

  useEffect(() => {
    envios(userLogged.apiKey)    
      .then(response => {
        dispatch(getEnviosAction(response.envios));
        
      })
      .catch(statusError => {
        if (statusError === 401) {
          alert('ApiKey inválida');
        } else {
          alert('Algo salió mal, por favor reintenta más tarde.');
        }
      });
  }, [userLogged]);

  useEffect(() => {
    const data = {
      id: userLogged.id,
      apiKey: userLogged.apiKey,
    };
    envios(data).then(response => {
      dispatch(newEnvioAction(response.envios));
    });
  }, [newEnvio, userLogged]);

  
  return (
    <>
      <div className='row'>
        {/* <NewSaleForm onAddEnviosCount={addEnviosCount} /> */}
        {/* <DestinyShowcase title={'TOP DESTINOS'} componentType={'TOP'} />
        <DestinyShowcase
          title={'Destinos a Promocionar'}
          componentType={'BTM'}
        /> */}
      </div>
      <hr/>
      <div className='row justify-content-center mt-4 mb-4'>
        {/* <SalesCounter enviosCounter={enviosCounter} /> */}
      </div>
      <hr></hr>

      <div className='row ml-3 display-flex justify-content-end'>
        <div className='col-6'>
          <SalesList />
        </div>

        <div className='col-6 p-5'>
          <BarChart
            title='Ventas Promedio'
          />
        </div>
      </div>
      <hr></hr>
      <div className='row ml-3'>
        
      </div>
    </>
  );
};

export default Dashboard;
