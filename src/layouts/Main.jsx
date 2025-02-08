import Navbar from '../shared/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../shared/Footer';

export default function Main() {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('registration');

    return (
        <>
            {!noHeaderFooter && <Navbar />}
            <Outlet />
            {!noHeaderFooter && <Footer />}
        </>
    );
}
