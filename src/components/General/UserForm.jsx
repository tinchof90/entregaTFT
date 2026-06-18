import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { onLoginAction } from '../../store/actions';
import { registroAction } from '../../store/actions';


const UserForm = ({ requestedData, buttonName, buttonRegistro }) => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    let [valid, message] = validateUserInputs(
      usernameRef.current.value,
      passwordRef.current.value
    );

    if (!valid) {
      alert(`${message}`);
    } else {
      requestedData({
        usuario: usernameRef.current.value,
        password: passwordRef.current.value,
      }).then(userData => {
        dispatch(onLoginAction(userData));
      });
    }
  };

  const handleRegistro = e => {
    e.preventDefault();

    let [valid, message] = validateUserInputs(
      usernameRef.current.value,
      passwordRef.current.value
    );

    if (!valid) {
      alert(`${message}`);
    } else {
      requestedData({
        usuario: usernameRef.current.value,
        password: passwordRef.current.value,
      }).then(userData => {
        dispatch(registroAction(userData));
      });
    }
  };

  const validateUserInputs = (usuario, password) => {
    let valid = true;
    let message = '';

    if (usuario === '') {
      valid = false;
      message += 'Debes completar el campo user name \n';
    }
    if (password === '') {
      valid = false;
      message += 'Debes completar el campo password \n';
    }
    if (password.length < 3) {
      valid = false;
      message += 'El password debe tener al menos 3 caracteres \n';
    }
    return [valid, message];
  };

  return (
    <section className='d-flex flex-md justify-content-center login'>
      <div className='card'>
      <h2>BIENVENIDO</h2>
        <section className='card-body'>
          <form>
            <label htmlFor='inputName'>User Name</label>
            <br />
            <input
              type='text'
              name='username'
              className='form-control'
              ref={usernameRef}
            />
            <br />
            <label htmlFor='inputPassword'>Password</label>
            <br />
            <input
              type='password'
              name='password'
              className='form-control'
              ref={passwordRef}
            />
            <br />
            <button className='btn btn-primary' onClick={handleSubmit}>
              {buttonName}
            </button>
            {buttonName === 'Login' && (
              <>
                <br/>
                <br/>
                <Link to='/registro'>Registrarse</Link>
              </>
            )}
          </form>
        </section>
      </div>
    </section>,
    <section className='d-flex flex-md justify-content-center registro'>
      <div className='card'>
      <h2>REGISTRO</h2>
        <section className='card-body'>
          <form>
            <label htmlFor='inputName'>User Name</label>
            <br />
            <input
                type='text'
                name='username'
                className='form-control'
                ref={usernameRef}
              />
            <br />
            <label htmlFor='inputPassword'>Password</label>
            <br />
            <input
                type='password'
                name='password'
                className='form-control'
                ref={passwordRef}
            />
            <br />
            <button className='btn btn-primary' onClick={handleRegistro}>
              {buttonRegistro}
            </button>


          </form>
        </section>        
      </div>
    </section>
  );
};

export default UserForm;
