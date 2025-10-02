

const videoBanner: string =
  'https://marcusbuzette.com/videos/MarcusBuzettePortfolio.mp4';

const Banner = () => {
  return (
    <section id="home">
      <div className="relative h-screen min-h-96 bannerWrapper">
        {/* VIDEO DE FUNDO */}
        <video
          className="absolute hidden desktop:block top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoBanner} type="video/mp4" />
        </video>

        <img className='absolute block  desktop:hidden top-0 left-0 w-full h-full object-cover'
                src='https://marcusbuzette.com/images/MarcusBuzetteBG.png'>
        </img>

        {/* CAMADA DE CONTEÚDO */}
        <div className="bannerInfo absolute flex items-center w-full justify-center h-full z-10">
          <div className="text-center text-white text-4xl">
            <h1 className="text-[52px] pb-2">Marcus Buzette</h1>
            <h3 className=" text-base font-light">
              Game Designer & Game Programmer
            </h3>
          </div>
        </div>

        {/* CAMADA DE ESCURECIMENTO DO VÍDEO (opcional) */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/80 desktop:bg-black/40 z-0"></div>
      </div>
    </section>
  );
};

export default Banner;
