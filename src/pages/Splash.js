import logo from "../images/content/logo.png";

function Splash() {
  return (
    <section>
      <div className="container mx-auto min-h-screen">
        <div className="flex flex-auto items-center justify-center h-screen">
          <div className="w-full md:w-4/12 text-center">
            <img src={logo} alt="LuxSpace | Anzayyyy" />
            <p className="mb-16 px-4">Kami menyediakan furniture berkelas yang di akui oleh banyak desainer interior.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Splash;
