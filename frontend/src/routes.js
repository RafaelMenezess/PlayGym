import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { GlobalStyle } from './assets/js/GlobalStyle';
import Main from './pages/Main/Main';
import DoctorSchedule from './pages/DoctorSchedule/DoctorSchedule';
import SiteNav, { ContentGroup } from 'react-site-nav';
import Login from './components/Login';
import Logout from './components/Logout/Logout';
import Signup from './components/SignUp/Signup';
import useToken from './components/Login/useToken';
import Footer from './components/Footer/Footer';
import AcademySchedule from './pages/AcademySchedule/AcademySchedule';
import Contact from './pages/Contact/Contact';


export default function AppRouter() {
    const { token, setToken } = useToken();
    if (!token) {
        return <Router>
            <GlobalStyle />
            <Routes>
                <Route path='/' element={<Login setToken={setToken} />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </Router>
    }

    return (
        <Router>
            <GlobalStyle />
            <SiteNav
                contentBackground="#343a40"
                fontSize="18"
                fontFamily="Hubballi, sans-serif"
                contentTop="2"
            >
                <ContentGroup title="Home" rootUrl="/" />
                <ContentGroup title="Agendamento" height="200">
                    <ul>
                        <li><Link to="/academy-schedule">Academia</Link></li>
                        <li><Link to="/doctor-schedule">Médico</Link></li>
                    </ul>
                </ContentGroup>
                <ContentGroup title="Contato" rootUrl="/contact" />
                <ContentGroup title="Perfil" height="200">
                    <ul>
                        <li><Link to="/account">Meu perfil</Link></li>
                        <li><Link to="/logout">Logout</Link></li>
                    </ul>
                </ContentGroup>
            </SiteNav>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='/doctor-schedule' element={<DoctorSchedule />} />
                <Route path='/academy-schedule' element={<AcademySchedule />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
        </Router >
    );
}
