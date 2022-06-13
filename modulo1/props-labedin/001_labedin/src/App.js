import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import gbtech from './gbtech.jpeg';
import arrow from './arrow.webp';
import CardPequeno from './components/CardPequeno/CardPequeno';
import email from './email.png';
import location from './location.png';
import decor from './decor.jpg';
import boti from './boti.png';
import insta from './insta.png';
import twitter from './twitter.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Meu portifolio</h2>
        <CardGrande 
        imagem={gbtech}
        nome="Jhennyfer Andreza"
        descricao="Sou a Jhennyfer, de Bsb-DF, tenho 27 anos e moro há 6 anos em Uruará-Pa. Amo a natureza, ler e estar em bibliotecas. Desde os 17 anos trabalho com vendas, sempre fui apaixonada pela aérea da tecnologia, para poder ajudar as pessoas e ter a oportunidade de alcançar esse objetivo.
        "
        />

        <ImagemButton 
          imagem={arrow}
           texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
      <CardPequeno 
          imagem={email}
          identificador="Email"
          nomep="j.andreza26@gmail.com" 
        />
        
       <CardPequeno 
          imagem={location}
          identificador="Endereço"
          nomep="Pará-Brasil" 
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={decor} 
          nome="Arquietale - Vendas e Decoração" 
          descricao="Vendas de artigos de decoração e personal organizer." 
        />
        
        <CardGrande 
          imagem={boti} 
          nome="GB Tech - Analista Tech" 
          descricao="Participante do programa Desenvolve 2022, aluna destaque da trilha Full Stack, estudante Labenu." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <a
          href="https://www.instagram.com/jhennyandreza/"
          target="_blank"
          rel="noopener noreferrer"
        >
        <div>
        <ImagemButton 
          imagem={insta}
          texto="Instagram" 
        /> 
        </div>
        </a> 
        
        <a
          href="https://twitter.com/Jhenny_coxinha"
          target="_blank"
          rel="noopener noreferrer"
        >
        <div>
        <ImagemButton 
          imagem={twitter} 
          texto="Twitter" 
        />
        </div>
        </a> 

      </div>
    </div>
  );
}

export default App;
