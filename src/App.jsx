import Header from 'components/Header/Header';

import style from 'App.module.scss';
import LogoIcon from 'images/icons/LogoIcon';
import RightIcon from 'images/icons/RightIcon';
// import BurgerIcon from 'images/icons/BurgerIcon';
// import DownIcon from 'images/icons/DownIcon';
// import Contacts from 'components/Contacts/Contacts';
import Main from 'components/Main/Main';
import About from 'components/About/About';
import Electricity from 'components/Electricity/Electricity';
import Cases from 'components/Cases/Cases';
import FAQ from 'components/FAQ/FAQ';

import Container from 'components/Container/Container';

function App() {
  return (
    <>
      <Header />
      <Container>
        <main>
          <Main />
          <About />
          <Electricity />
          <Cases />
          <FAQ />

          <section>
            <h2>Contact us</h2>
            <ul>
              <li>
                <p>Phone:</p>
                <p>38 (098) 12 34 567</p>
                <p>38 (093) 12 34 567</p>
              </li>
              <li>
                <p>E-mail:</p>
                <p>office@ecosolution.com</p>
              </li>
              <li>
                <p>Address:</p>
                <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
              </li>
              <li>
                <p>Social Networks:</p>
              </li>
            </ul>
            <form>
              <p>* Full name:</p>
              <input />
              <p>* E-mail:</p>
              <input />
              <p>* Phone:</p>
              <input />
              <p>Message:</p>
              <textarea />
              <button type="submit">Send</button>
            </form>
          </section>
        </main>
        <footer>
          <a href="index.html">
            <LogoIcon color={'#173D33'} className={style.logoIcon} />
          </a>
          <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
          <img />
          <p>office@ecosolution.com</p>
          <button>UP</button>
          <p>ecosolution © 2023</p>
        </footer>{' '}
        */
      </Container>
    </>
  );
}

export default App;
