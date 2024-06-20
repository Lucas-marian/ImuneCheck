import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Cadastro from '../pages/Cadastro/Cadastro.jsx';
import Home from "../pages/Home/Home.jsx";
import Login from '../pages/Login/Login.jsx';
import MinhaUnidade from '../pages/MinhaUnidade/MinhaUnidade.jsx';
import MinhasVacinas from '../pages/MinhasVacinas/MinhasVacinas.jsx';
import RecuperacaoSenha from '../pages/RecuperacaoSenha/RecuperacaoSenha.jsx';
import MeusDados from '../pages/MeusDados/MeusDados.jsx'
import MinhaAgenda from '../pages/MinhaAgenda/MinhaAgenda.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "/Home", element: <Home />},
            {path: '/cadastro', element: <Cadastro/>},
            {path: '/minhas-vacinas', element: <MinhasVacinas/>},
            {path: '/minha-unidade', element: <MinhaUnidade/>},
            {path: '/login', element: <Login/>},
            {path: '/recuperacao-senha', element: <RecuperacaoSenha/>},
            {path: '/meus-dados', element: <MeusDados/>},
            {path: '/', element: <MinhaAgenda/>},
    
        ]
    },
])

export default router;