import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import NotFound from './Components/NotFound/NotFound'
import Login from './Components/Login/Login'
import AuthProvider from "./Context/authProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import MyOrders from "./Components/MyOrders/MyOrders";
import Booking from "./Components/Booking/Booking";
import ManageOrders from "./Components/ManageOrders/ManageOrders";
import AddPackage from "./Components/AddPackage/AddPackage";
import AboutUs from "./Components/AboutUs/AboutUs";
import AllPackage from "./Components/AllPackage/AllPackage";
import AddCar from "./Components/AddPackage/AddCar";
import AddHotel from "./Components/AddPackage/AddHotel";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col w-full">
          <Header></Header>
          <Switch>
            <Route path='/' exact>
              <Home></Home>
            </Route>
            <Route path='/home' >
              <Home></Home>
            </Route>
            <PrivateRoute path='/allpackage'>
              <AllPackage></AllPackage>
            </PrivateRoute>
            <PrivateRoute path='/myorders'>
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path='/booking/:id'>
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path='/manageorders'>
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path='/addpackage'>
              <AddPackage></AddPackage>
            </PrivateRoute>
            <PrivateRoute path='/addcar'>
              <AddCar></AddCar>
            </PrivateRoute>
            <PrivateRoute path='/addhotel'>
              <AddHotel></AddHotel>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path='/aboutus'>
              <AboutUs></AboutUs>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
