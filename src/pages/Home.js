import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { NavBar } from '../components/navBar/Navbar'
import { Footer } from '../components/footer/Footer'
import { VehicleListContainer } from './vehiclesListContainer/VehicleListContainer'
import { DataSheetContainer } from '../pages/dataSheetContainer/DataSheetContainer'


export const Home = () => {
  return (
    <Fragment>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <VehicleListContainer />
        </Route>
        <Route exact path='/datasheet/:id'>
          <DataSheetContainer />
        </Route>
      </Switch>
      <Footer />
    </Fragment>
  );
}
