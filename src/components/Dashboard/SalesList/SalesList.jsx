
import './SalesList.css';
import { useSelector } from 'react-redux';
import { ciudades, ciudadesPorDpto } from '../../Ciudades/Ciudades';
import { envios } from '../../Envios/Envios';
const ListaDatosEnvio = props => {
  return (
    <tr>
      <th scope='row'>{props.id}</th>
      <td>{props.ciudadOrigen}</td>
      <td>{props.ciudadDestino}</td>
      <td>{props.categoria}</td>
      <td>{props.peso}</td>
      <td>{props.distancia}</td>
      <td>{props.costo}</td>
    </tr>
  );
};

const ListaEnvios = () => {
  const ciudades = useSelector(state => state.ciudades);
  //const listaDeEnvios = useSelector(state => state.listaDeEnvios); 
  const listaDeEnvios = ["a","b","c"];

  const costoTotal = x => {
    let total = 0;    
    listaDeEnvios.forEach(e => {
      if (e.id === x.id_envio) {
        let costoDistancia = e.distancia/100;
        total =
          50 + 10 * e.peso + 50* Math.floor(costoDistancia);
      }
    });
    return total;
  };

  return (
    <table className='table table-striped  thead-dark'>
      
      <thead>
        <tr>
          <th>#</th>
          <th>Ciudad de Origen</th>
          <th>Ciudad de Destino</th>
          <th>Categoria</th>
          <th>Peso</th>
          <th>Distancia</th>
          <th>Costo Total</th>
        </tr>
      </thead>
      <tbody>
        {listaDeEnvios.map(x => (
          <ListaDatosEnvio
            id={x.id}
            key={`x-${x.id}`}
            ciudadOrigen={x.ciudadOrigen}
            ciudadDestino={x.ciudadDestino}
            categoria={x.categoria}
            peso={x.peso}
            distancia={x.distancia}
            total={costoTotal(x)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ListaEnvios;
