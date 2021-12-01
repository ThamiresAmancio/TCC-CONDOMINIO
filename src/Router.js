import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Chat from './Pages/Chat';
import AdminDashboard from './Pages/Dashboards/Dash-Admin';
import DashboardMorador from './Pages/Dashboards/Dash-Morador';
import DashboardSindico from './Pages/Dashboards/Dash-Sindico';
import Home from './Pages/Home';
import Login from './Pages/Login';
import LoginAdmin from './Pages/Login/LoginAdmin';
import LoginPorteiros from './Pages/Login/LoginPorteiro';
import LoginSindicos from './Pages/Login/LoginSindico';
import LoginUser from './Pages/Login/LoginMorador';
import PagamentoBeta from './Pages/Pagamento-beta';
import RegisterAdmin from './Pages/Register/Admin';
import RegisterApto from './Pages/Register/Apartamento';
import CriandoAviso from './Pages/Register/Aviso';
import RegisterBlocos from './Pages/Register/Bloco';
import RegisterCondominio from './Pages/Register/Condominio';
import RegisterMoradores from './Pages/Register/Morador';
import RegisterPorteiros from './Pages/Register/Porteiro';
import RegisterSindico from './Pages/Register/Sindico';
import RegisterVisitante from './Pages/Register/Visitante';
import VisualizarMoradores from './Pages/VisualizarMoradores';
import DashboardPorteiros from './Pages/Dashboards/Dash-Porteiros';
import { Redirect } from "react-router";
import { getUser,isSignedIn} from './services/security'

function PrivateRoute({ role, children, ...rest }) {

         if (!isSignedIn()) {
             return <Redirect to="/Login" />
         }
        else{
             return <Route {...rest}>{children} </Route>;
     }
}

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
                <Route exact path="/Login/Morador">
                    <LoginUser/>
                </Route>
                <Route exact path="/Login/Portaria">
                    <LoginPorteiros/>
                </Route>
                <Route exact path="/Login/Sindico">
                    <LoginSindicos/>
                </Route>
                <Route exact path="/Register/Admin">
                    <RegisterAdmin />
                </Route>
                <PrivateRoute exact path="/Dashboard/Admin">
                    <AdminDashboard/>
                </PrivateRoute>
                <Route exact path="/Dashboard/Morador">
                    <DashboardMorador/>
                </Route>
                <Route exact path="/Register/Condominio">
                    <RegisterCondominio/>
                </Route>
                <Route exact path="/Register/Porteiros">
                    <RegisterPorteiros/>
                </Route>
                <Route exact path="/Register/Moradores">
                    <RegisterMoradores/>
                </Route>
                <Route exact path="/Register/Sindicos">
                    <RegisterSindico/>
                </Route>
                <Route exact path="/Register/Blocos">
                    <RegisterBlocos/>
                </Route>
                <Route exact path="/Register/Apartamentos">
                    <RegisterApto/>
                </Route>
                <Route exact path="/Chat">
                    <Chat/>
                </Route>
                <Route exact path="/Dashboard/Sindico">
                    <DashboardSindico/>
                </Route>
                <Route exact path="/Register/Visitante">
                    <RegisterVisitante/>
                </Route>
                <Route exact path="/Register/Aviso">
                    <CriandoAviso/>
                </Route>
                <Route exact path="/Pagamento">
                    <PagamentoBeta/>
                </Route>
                <Route exact path="/Visualizar/Moradores">
                    <VisualizarMoradores/>
                </Route>
                <Route exact path="/Dashboard/Porteiros">
                    <DashboardPorteiros/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Rotas;