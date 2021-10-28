import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminDashboard from './Pages/Dashboards/Dash-Admin';
import Home from './Pages/Home';
import Login from './Pages/Login';
import LoginAdmin from './Pages/Login/LoginAdmin';
import LoginPorteiros from './Pages/Login/LoginPorteiro';
import LoginUser from './Pages/Login/LoginUsers';
import RegisterAdmin from './Pages/Register/Admin';
import RegisterCondominio from './Pages/Register/Condominio';
import RegisterPorteiros from './Pages/Register/Porteiro';


function Rotas() {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/Login">
                    <Login/>
                </Route>
                <Route exact path="/Login/Admin">
                    <LoginAdmin/>
                </Route>
                <Route exact path="/Login/User">
                    <LoginUser/>
                </Route>
                <Route exact path="/Login/Portaria">
                    <LoginPorteiros/>
                </Route>
                <Route exact path="/Register/Admin">
                    <RegisterAdmin />
                </Route>
                <Route exact path="/Dashboard/Admin">
                    <AdminDashboard/>
                </Route>
                <Route exact path="/Register/Condominio">
                    <RegisterCondominio/>
                </Route>
                <Route exact path="/Register/Porteiros">
                    <RegisterPorteiros/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Rotas;