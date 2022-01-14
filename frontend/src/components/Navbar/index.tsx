import { ReactComponent as Githubimg } from 'assets/img/github.svg';
import './styles.css';

function Navbar() {

  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a href="https://github.com/TaisisMarinelo">
            <div className="dsmovie-contact-container">
              <Githubimg />
              <p className="dsmovie-contact-link">/devsuperior</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );

}

export default Navbar;