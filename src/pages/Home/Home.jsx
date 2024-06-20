// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from 'react-slick';
import './Home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
    fade: true,
    arrows: false
  };

  const images = [
    '/public/criança.jpg',
    '/public/homem2.jpg',
    '/public/menino.png',
    '/public/menina.png',
    '/public/homem.jpg',
    '/public/mulher.jpg',
    'public/mae e filha vacinadas.jpg',
  ];

  return (
    <div>
      <div className='carousel-container'>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
        </Slider>
      </div>
      <div className='container'>
        <div className='parte2'>
          <div>
            <h2>Conheça o ImuniBoy</h2>
            <p>ImuniBoy é nosso mascote dedicado a promover a importância da vacinação...</p>
          </div>
          <img src='/public/ImuniBoy.png' alt='ImuniBoy' />
        </div>
        <div className='parte3'>
          <div>
            <h2>Conheça a ImuniGirl</h2>
            <p>ImuniGirl está aqui para ajudar a divulgar o sistema de vacinação digital...</p>
          </div>
          <img src='/public/ImuniGirl.png' alt='ImuniGirl' />
        </div>
        <div className='parte4'>
          <h2>Agenda</h2>
          <p>Programe suas próximas vacinas e mantenha-se atualizado.</p>
        </div>
        <div className='parte5'>
          <h2>Vacinas</h2>
          <p>Veja a lista completa das suas vacinas e o histórico de vacinação.</p>
        </div>
        <div className='parte6'>
          <h2>Unidade de Saúde</h2>
          <p>Encontre a unidade de saúde mais próxima de você.</p>
        </div>
        <div className='parte6'>
          <h2>Meus Dados</h2>
          <p>Mantenha seus dados atualizados para um melhor atendimento.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
