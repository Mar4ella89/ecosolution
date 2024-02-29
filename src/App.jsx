import Header from 'modules/Header/Header';

import Main from 'modules/Main/Main';
import About from 'modules/About/About';
import Electricity from 'modules/Electricity/Electricity';
import Cases from 'modules/Cases/Cases';
import FAQ from 'modules/FAQ/FAQ';
import ContactsUs from 'modules/ContactUs/ContactUs';
import Footer from 'modules/Footer/Footer';

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
