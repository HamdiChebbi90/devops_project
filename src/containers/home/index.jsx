import "./styles.scss";
import { Icon } from "@iconify/react";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home__data">
        <h1 className="home__title">Hi, I'm Hamdi</h1>
        <h1 className="home__subtitle">Web & Mobile Developer 🚀🚀🚀</h1>
        <h1 className="home__description">welcome to my portfolio</h1>
        <button className="home__contact-btn">Contact Me</button>
        <div className="home__social">
          <a
            href="https://www.linkedin.com/in/hamdi-benhassine-2a6b9a1b3/"
            className="home__social-icon"
          >
            <Icon icon="akar-icons:linkedin-fill" />
          </a>
  
          <a
            href="https://www.facebook.com/hamdi.benhassine.9/"
            className="home__social-icon"
          >
            <Icon icon="akar-icons:facebook-fill" />
          </a>
          <a
            href="https://www.instagram.com/hamdi_benhassine/"
            className="home__social-icon"
          >
            <Icon icon="akar-icons:instagram-fill" />
          </a>
          <a
            href="https://www.github.com/hamdi-benhassine"
            className="home__social-icon"
          >
            <Icon icon="akar-icons:github-fill" />
          </a>
        </div>
      </div>
      
    </section>
  );
};

export default Home;
