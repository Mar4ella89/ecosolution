import Header from 'components/Header/Header';

import Main from 'components/Main/Main';
import About from 'components/About/About';
import Electricity from 'components/Electricity/Electricity';
import Cases from 'components/Cases/Cases';
import FAQ from 'components/FAQ/FAQ';
import ContactsUs from 'components/ContactUs/ContactUs';
import Footer from 'components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Main />
        <About />
        <Electricity />
        <Cases />
        <FAQ />
        <ContactsUs />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
