import { userRegistro } from '../../Services/Service';
import UserForm from '../General/UserForm';

const Registrar = () => {
  return (
    <UserForm
      requestedData={userRegistro}
      buttonName={'Registrar'}
      buttonRegistro={'Registrar'}
    />
  );
};

export default Registrar;
