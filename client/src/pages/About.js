import Footer from "../Footer";
import Header from "../Header";
import ScrollToTop from "../ScrollToTop";

const About = () => {
  return (
    <>
      <Header />
      <div className="pt-[90px] min-h-[92vh]">
        <h1 className="text-[3rem] m-6">about page</h1>
        <ScrollToTop />
      </div>
      <Footer />
    </>
  );
};

export default About;
