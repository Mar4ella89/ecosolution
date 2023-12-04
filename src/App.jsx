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
import ContactsUs from 'components/ContactUs/ContactUs';

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
          <ContactsUs />
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
