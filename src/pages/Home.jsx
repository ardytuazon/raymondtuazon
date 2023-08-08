import { useInView } from 'react-intersection-observer';
import { NavBar } from "../components/NavBar";
import { Hero } from "../components/Hero";
import { AboutMe } from "../components/AboutMe"
import { Works } from "../components/Works"
import { Testimonials } from "../components/Testimonials"
import { Contact } from "../components/Contact"

export const Home = () => {
  const { ref: myRef, inView: myElement } = useInView({
    rootMargin: '920px 0px 100px 0px',
    threshold: 1,
  });
  const { ref: myRef2, inView: myElement2 } = useInView({
    rootMargin: '920px 0px 100px 0px',
    threshold: 1,
  });
  return (
    <div className="bg-white dark:bg-semiDark">
      <div className={`${myElement || myElement2 ? 'bg-darkenWhite dark:bg-dark' : 'bg-white dark:bg-semiDark' } py-6 px-4 lg:px-6 fixed w-screen z-10`}>
        <NavBar />
      </div>
      <Hero />
      <div ref={myRef}>
        <AboutMe />
      </div>
      <Works />
      <div ref={myRef2}>
        <Testimonials />
      </div>
      <Contact />
    </div>
  );
}