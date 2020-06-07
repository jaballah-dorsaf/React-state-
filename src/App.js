import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer/Footer";
import NavbarMenu from "./components/Navbar/NavbarMenu";
import Login from "./components/Admin/Login";
import Products from "./components/Acceuil/Products";
import Admin from "./components/Admin/Admin";
import PrivateRoute from "./components/Acceuil/PrivateRoute";
import Home from "./components/Acceuil/Home";
import Category from "./components/Acceuil/Category";
import LoginRegister from "./components/Acceuil/LoginRegister";
import Voyager from "./components/Acceuil/Voyager";
import Apropos from "./components/Acceuil/Apropos";
//import Log from "./components/Acceuil/Log";



const App = (props) => {
 return(
   
    <Router>
    <div className="App">
      <div className="container">
      <NavbarMenu />
      
     <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/category" component={Category} />
          <Route path="/products" component={Products} />
          <Route path="/voyager" component={Voyager} />
          <Route exact path="/apropos" component={Apropos} />
          <Route path="/login" component={Login} />
         
          <PrivateRoute
            exact
            // authed={fakeAuth.isAuthenticated}
            path="/admin"
            component={Admin}
          />
          <Route path="/loginregister" component={LoginRegister} />
        </Switch>
        
        <br/>
        <br/>
        <Footer />
        </div>
    </div>
    </Router>
    
  )
}
export default App;
