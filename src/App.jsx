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
          <Cases/>

         <section>
            <h2>Frequently Asked Questions</h2>
            <ul>
              <li>
                <h3>
                  How do wind turbines and solar panels work together in a
                  renewable energy system?
                </h3>
                <p>
                  Wind turbines and solar panels generate electricity through
                  different mechanisms. Wind turbines harness the kinetic energy
                  of the wind to turn blades, which then drive a generator.
                  Solar panels convert sunlight into electricity through the
                  photovoltaic effect. When integrated into a renewable energy
                  system, these technologies complement each other by providing
                  a continuous and reliable power supply. Wind power is often
                  more abundant during certain times, while solar power is
                  consistent during daylight hours, resulting in a more stable
                  overall energy output.
                </p>
              </li>
              <li>
                <h3>
                  What sets EcoSolution's renewable energy solutions apart from
                  others on the market?
                </h3>
                <p>
                  Our renewable energy solutions stand out through a
                  comprehensive approach covering solar, wind, and cutting-edge
                  technologies. We prioritize customization to meet specific
                  needs, uphold environmental stewardship, boast a seasoned team
                  with a proven track record, and maintain a client-centric
                  focus. Choosing EcoSolution means opting for innovative,
                  tailored, and environmentally conscious energy solutions.
                </p>
              </li>
              <li>
                <h3>
                  How can businesses and communities benefit from integrating
                  renewable energy solutions from EcoSolution?
                </h3>
                <p>
                  Businesses and communities gain sustainable advantages by
                  integrating EcoSolution's renewable energy solutions. Our
                  tailored approach ensures cost-effective, eco-friendly energy
                  solutions, fostering environmental responsibility, reducing
                  long-term operational costs, and promoting energy independence
                  for a resilient future.
                </p>
              </li>
              <li>
                <h3>
                  What measures does EcoSolution take to ensure the
                  environmental sustainability of its products?
                </h3>
                <p>
                  EcoSolution prioritizes environmental sustainability by
                  employing eco-friendly materials in product manufacturing,
                  minimizing carbon footprint in production processes, and
                  ensuring energy-efficient designs. We are committed to
                  responsible sourcing, recycling initiatives, and continuous
                  improvement in green practices to mitigate environmental
                  impact.
                </p>
              </li>
              <li>
                <h3>
                  How does EcoSolution engage with local communities and support
                  a just transition to renewable energy?
                </h3>
                <p>
                  EcoSolution fosters community engagement by collaborating with
                  local stakeholders, providing education on renewable energy
                  benefits, and offering job opportunities. Our commitment to a
                  just transition involves prioritizing social equity,
                  supporting local economies, and ensuring that the shift to
                  renewable energy is inclusive and beneficial for all.
                </p>
              </li>
            </ul>
            <div>
              <p>Didn't find the answer to your question? </p>
              <button>Contact Us</button>
            </div>
          </section>
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
        </footer> */

      </Container>
    </>
  );
}

export default App;