import './Footer.css'
import githubIcon from '../../../assets/github 1.png';

function Footer(){
    return (
        <footer>
            <div className='content'>
                <div className='github'>
                    Code source
                    <div className="logo">
                        <a href='https://github.com/pistak02/dashboard-candidatures' target='_blank' rel='noreferrer'><img src={githubIcon} alt="github" /></a>
                    </div>
                </div>
                <div>
                    2025. Tous droits réservés
                </div>
            </div>
            
                
                
        </footer>
    )

}

export default Footer;