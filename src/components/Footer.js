import { currentYear } from "../constants/constants";

const Footer = () => {
    return (
        <div className='copyright-info footer'>
            Copyright &copy; {currentYear} Prasanna Hegde 
        </div>
    );
}

export default Footer;