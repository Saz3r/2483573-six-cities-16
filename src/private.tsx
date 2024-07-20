import {Navigate} from 'react-router-dom';
import { RoutesValues } from './const';

type PrivateRouteProps = {
  children: JSX.Element;
};
function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const hasAccess = true;

 
  return hasAccess ? children : <Navigate to={RoutesValues.LOGIN} />;
}

export default PrivateRoute;