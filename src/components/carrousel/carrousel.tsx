import classNames from 'classnames';
import React from 'react';
import Slider from "react-slick";
import type { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import type { CarrouselSlideProps } from '../../types/types';
import styles from './carrousel.module.css';
import CarouselSlide from './components/carouselSlide/carouselSlide';
import { useLanguage } from '../context/languageContext';

const carrouselSlidesByLang: Record<'pt' | 'en', CarrouselSlideProps[]> = {
  pt: [
    {
      mediaType: "video",
      mediaLink: "https://youtu.be/YD1GPwAVQzc",
      imageIcon: "https://cdn.marcusbuzette.com/images/SaideraSquared.jpg",
      projectName: "Saidera",
      projectDescription: "Jogue sozinho ou com um amigo como um dono de bar entregando o máximo de pedidos durante o dia e administrando o bar durante a noite. Faça bebidas incríveis e deixa seus clientes satisfeitos, ou não. Melhore seu bar e construa uma boa reputação e se torne o melhor bar da região! <br> <br> Jogo desenvolvido durante o 3° e 4° semetre do curso de Jogos Digitais da PUC Minas.",
      habilitiees: ["Programação", "Game Design", "Gerência", "Unity", "C#"]
    },
    {
      mediaType: "video",
      mediaLink: "https://www.youtube.com/watch?v=ppgS5Jp36hk",
      imageIcon: "https://cdn.marcusbuzette.com/images/GotaDaguaSquared.png",
      projectName: "A gota d'água",
      projectDescription: "O jogo feito na GameJam para contribuir com o assunto principal abordado pela ONU ao longo dos anos( a ODS). O jogo é feito com o objetivo de orientar a maior parte da sociedade sobre um dos obstáculos mais sérios que a humanidade vem enfrentando: A preocupação com a vida marinha, isto é, o cuidado que devemos passar a ter com toda a biodiversidade de nossos mares e oceanos de uma forma divertida e engajadora. O jogo foi feito em 48h durante o evento da Game Jam!",
      habilitiees: ["Programação", "Unity", "C#"]
    },
    {
      mediaType: "video",
      mediaLink: "https://youtu.be/XE2kUc3CqQU",
      imageIcon: "https://cdn.marcusbuzette.com/images/LegadoSquare.png",
      projectName: "Legado Esquecido",
      projectDescription: "Um RPG de estratégia em turnos com forte foco narrativo, ambientado em um mundo de fantasia onde a magia é rara e controlada por um governo autoritário. O jogador conduz um grupo de heróis em batalhas que revelam os segredos dessa história. <br> <br> Jogo desenvolvido durante o 5° e 6° semetre do curso de Jogos Digitais da PUC Minas.",
      habilitiees: ["Programação", "Game Design", "Gerência", "Shader", "Unity", "C#"]
    },
    {
      mediaType: "video",
      mediaLink: "https://www.youtube.com/watch?v=ou3mQmoTQAE",
      imageIcon: "https://cdn.marcusbuzette.com/images/AlieNautaSquare.png",
      projectName: "AlieNauta",
      projectDescription: 'Neste infinity runner, você controla um astronauta em um planeta distante. Ao coletar pedras preciosas, ele assusta os habitantes locais e precisa correr de volta à nave antes que a confusão vire uma verdadeira “invasão alienígena”.<br> <br> Jogo desenvolvido durante o 2° semetre do curso de Jogos Digitais da PUC Minas.',
      habilitiees: ["Programação", "Game Design", "Gerência", "Unity", "Mobile", "C#"]
    },
    {
      mediaType: "video",
      mediaLink: "https://youtu.be/ifK6VnqicGo",
      imageIcon: "https://cdn.marcusbuzette.com/images/BodeSquare.png",
      projectName: "Bode das Galáxias",
      projectDescription: 'Em um mundo distante, o bode louco deve derrotar seus arqui inimigos para se tornar o grande campeão do planeta Sadairahnegne. Para isso, o jogador deve utilizar seus ataques de energia inspirados em esportes de uma civilização antiga. Uma homenagem ao meu time universitário A.A.A.E.E. CEFET-BH, para sempre no meu coração.<br> <br> Jogo desenvolvido durante o 1° semetre do curso de Jogos Digitais da PUC Minas.',
      habilitiees: ["Programação", "Game Design", "Assets", "Unity", "Blender", "C#"]
    },
  ],
  en: [
    {
      mediaType: "video",
      mediaLink: "https://youtu.be/YD1GPwAVQzc",
      imageIcon: "https://cdn.marcusbuzette.com/images/SaideraSquared.jpg",
      projectName: "Saidera",
      projectDescription:
        "Play alone or with a friend as a bar owner, delivering as many orders as possible during the day and managing your bar at night. Create amazing drinks and keep your customers happy — or not. Improve your bar, build a strong reputation, and become the best bar in town! <br><br> Developed during the 3rd and 4th semesters of the Digital Games course at PUC Minas.",
      habilitiees: ["Programming", "Game Design", "Management", "Unity", "C#"],
    },
    {
      mediaType: "video",
      mediaLink: "https://www.youtube.com/watch?v=ppgS5Jp36hk",
      imageIcon: "https://cdn.marcusbuzette.com/images/GotaDaguaSquared.png",
      projectName: "A gota d'água",
      projectDescription:
        "A game created during a GameJam to raise awareness about marine life preservation and the biodiversity of our oceans in a fun and engaging way. Developed in 48h during the event.",
      habilitiees: ["Programming", "Unity", "C#"],
    },
    {
      mediaType: "video",
      mediaLink: "https://youtu.be/XE2kUc3CqQU",
      imageIcon: "https://cdn.marcusbuzette.com/images/LegadoSquare.png",
      projectName: "Forgotten Legacy",
      projectDescription:
        "A turn-based strategy RPG with a strong narrative focus, set in a fantasy world where magic is rare and controlled by an authoritarian government. The player leads a group of heroes through battles that unveil the secrets of this story. <br><br> Developed during the 5th and 6th semesters of the Digital Games course at PUC Minas.",
      habilitiees: ["Programming", "Game Design", "Management", "Shader", "Unity", "C#"],
    },
    {
      mediaType: "video",
      mediaLink: "https://www.youtube.com/watch?v=ou3mQmoTQAE",
      imageIcon: "https://cdn.marcusbuzette.com/images/AlieNautaSquare.png",
      projectName: "AlieNauta",
      projectDescription:
        "In this infinity runner, you control an astronaut on a distant planet. By collecting gems, he scares the local inhabitants and must rush back to his spaceship before the confusion turns into a full-blown alien invasion. <br><br> Developed during the 2nd semester of the Digital Games course at PUC Minas.",
      habilitiees: ["Programming", "Game Design", "Management", "Unity", "Mobile", "C#"],
    },
    {
      mediaType: "video",
      mediaLink: "https://youtu.be/ifK6VnqicGo",
      imageIcon: "https://cdn.marcusbuzette.com/images/BodeSquare.png",
      projectName: "Galaxy Goat",
      projectDescription:
        "On a distant world, the crazy goat must defeat its archenemies to become the great champion of planet Sadairahnegne. To do so, the player uses energy attacks inspired by sports from an ancient civilization. A tribute to my university team A.A.A.E.E. CEFET-BH. <br><br> Developed during the 1st semester of the Digital Games course at PUC Minas.",
      habilitiees: ["Programming", "Game Design", "Assets", "Unity", "Blender", "C#"],
    },
  ]
};


// Tipos para os Arrows
interface CustomArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

// Arrow personalizado (next)
function NextArrowOverride({ className, style, onClick }: CustomArrowProps) {
  return (
    <div
      className={`${className} ${styles.nextArrowOverride}`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

// Arrow personalizado (prev)
function PrevArrowOverride({ className, style, onClick }: CustomArrowProps) {
  return (
    <div
      className={`${className} ${styles.prevArrowOverride}`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function Carrousel() {
  const { language } = useLanguage();
  const carrouselSlides = carrouselSlidesByLang[language];
  const settings: Settings = {
    customPaging: function (i: number) {
      return (
        <a>
          <img className='h-10 desktop:h-20 w-10 desktop:w-20 rounded-md object-cover' src={carrouselSlides[i].imageIcon} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb my-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrowOverride />,
    prevArrow: <PrevArrowOverride />
  };

  return (
    <Slider className={classNames(styles.sliderContainer, styles.customSlider, 'mx-auto')} {...settings}>
      {carrouselSlides.map((slide, index) => (
        <CarouselSlide key={index} {...slide} />
      ))}
    </Slider>
  );
}

export default Carrousel;
