import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ path, component: Component, ...rest }) => {
  const user = useSelector(state => state.user);

  if (user) {
    return (
      <Route path={path}>
        <Component userLogged={user} />
      </Route>
    );
  }

  return (
    <Route>
      <Redirect to='/login' />
    </Route>
  );
};

export default PrivateRoute;
