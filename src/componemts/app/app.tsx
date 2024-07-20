import Main from '../../pages/main/main';
import NotFound from '../../pages/not-found/not-found';
import Login from '../../pages/login/login';
import Offer from '../../pages/offers/offers';
import Favorites from '../../pages/fav/favorite';
import { OFFERS } from '../../mocks/offers';
import { RoutesValues } from '../../const';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from '../../private';


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path={RoutesValues.ROOT} element={<Main offersData={OFFERS} />} />
        <Route path={RoutesValues.LOGIN} element={<Login />} />
        <Route path={RoutesValues.FAVORITES} element={
          <PrivateRoute>
            <Favorites />
          </PrivateRoute>
        } />
        <Route path={RoutesValues.OFFERS} element={<Offer />} />
        
        <Route path={RoutesValues.NOTFOUND} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;