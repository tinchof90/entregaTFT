import { useRef } from 'react';
import { newEnvio } from '../../Services/Service';
import { useDispatch, useSelector } from 'react-redux';
import { newEnvioAction } from '../../store/actions';
import './NewSaleForm.css';
import { ciudades } from '../Ciudades/Ciudades';
import { categorias } from '../Categorias/Categorias';

const NewEnvioForm = ({ onAddEnvioCount }) => {
  const ciudad_origen = useRef();
  const ciudad_destino = useRef();
  const categoria = useRef();
  const peso = useRef();
  const distancia = useRef();
  const costo = useRef();


  const userLogged = useSelector(state => state.user);
  const packages = useSelector(state => state.packages);
  const dispatch = useDispatch();

  const handleEnvio = event => {
    event.preventDefault();

    const [valid, message] = validateUserInputs(
      ciudad_origen.current.value,
      ciudad_destino.current.value,
      peso.current.value
    );

    if (valid) {
      let envioData = {
        body: {
          //ciudad_origen, ciudad_destino, peso
          idUser: userLogged.id,
          ciudad_origen: ciudad_origen.current.value,
          ciudad_destino: ciudad_destino.current.value,
          categoria: categoria.current.value,
          peso: peso.current.value,
        },
        apiKey: userLogged.apiKey,
      };

      newEnvio(envioData).then(response => {
        dispatch(newEnvioAction(response));
        onAddEnvioCount();
      });
    } else {
      alert(`${message}`);
    }
  };

  const validateUserInputs = (ciudad_origen, ciudad_destino, peso) => {
    let valid = true;
    let message = '';
    pesoEnvio = Number.parseInt(peso);

    if (ciudad_origen === '') {
      valid = false;
      message += 'La ciudad de origen no puede estar vacía \n';
    }
    if (ciudad_destino === '') {
      valid = false;
      message += 'La ciudad de destino no puede estar vacía \n';
    }

    if (pesoEnvio <= 0) {
      valid = false;
      message += 'El envio debe tener un peso mayor a 0 \n';
    }

    return [valid, message];
  };

  return (
    <div className='card col-4'>
      <h3>Nuevo Envio</h3>
      <section className='card-body'>
        <form>
        <label htmlFor='origenSelect'>Ciudad de Origen</label>
          <select name='origen' className='form=control' ref={ciudadesRef}>
            <option value='0'>Seleccione:</option>
            {ciudades != null &&
              ciudades.map(c => (
                <option value={c.id} key={`option-${c.id}`}>
                  {c.nombre}
                </option>
              ))}
          </select>
          <br />
        <label htmlFor='destinoSelect'>Ciudad de Destino</label>
          <select name='destino' className='form=control' ref={ciudadesRef}>
            <option value='0'>Seleccione:</option>
            {ciudades != null &&
              ciudades.map(c => (
                <option value={c.id} key={`option-${c.id}`}>
                  {c.nombre}
                </option>
              ))}
          </select>
          <br />
          <label htmlFor='categoriasSelect'>Categoria</label>
          <select name='categoria' className='form=control' ref={categoriaRef}>
            <option value='0'>Seleccione:</option>
            {categorias != null &&
              categorias.map(c => (
                <option value={c.id} key={`option-${c.id}`}>
                  {c.nombre}
                </option>
              ))}
          </select>
          <label htmlFor='inputPeso'>Peso</label>
          <br />
          <input
            type='number'
            name='peso'
            className='form-control'
            min='0'
            ref={pesoRef}
          />
          <br />          
          <button className='btn btn-primary col-3' onClick={handleEnvio}>
            Crear
          </button>
        </form>
      </section>
    </div>
  );
};

export default NewEnvioForm;
