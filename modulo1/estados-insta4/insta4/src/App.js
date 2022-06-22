import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import HeaderMain from './components/HeaderMain/HeaderMain';
import FooterMain from './components/FooterMain.js/FooterMain';
import phoebe from './img/phoebe.jpg'
import monica from './img/monica.jpg'
import rachel from './img/rachel.jpg'
import joey from './img/joey.webp'
import chandler from './img/chandler.jpg'
import ross from './img/ross.jpg'
import phoebepost from './img/phoebepost.webp'
import monicapost from './img/monicapost.webp'
import rachelpost from './img/rachelpost.webp'
import joeypost from './img/joeypost.png'
import chandlerpost1 from './img/chandlerpost1.avif'
import rosspost from './img/rosspost.webp'


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: Gainsboro;

`
function App() {
return(
  <MainContainer>

    <HeaderMain/>

      <Post
        perfilUsuario={'https://www.instagram.com/lisakudrow/'}
        nomeUsuario={'Phoebe Buffay'}
        fotoUsuario={phoebe}
        fotoPost={phoebepost}
      />

      <Post
        perfilUsuario={'https://www.instagram.com/courteneycoxofficial/'}
        nomeUsuario={'Monica Geller'}
        fotoUsuario={monica}
        fotoPost={monicapost}
      />

      <Post
        perfilUsuario={'https://www.instagram.com/jenniferaniston/'}
        nomeUsuario={'Rachel Green'}
        fotoUsuario={rachel}
        fotoPost={rachelpost}
      />

  <Post
        perfilUsuario={'https://www.instagram.com/mleblanc/'}
        nomeUsuario={'Joey Tribbiane'}
        fotoUsuario={joey}
        fotoPost={joeypost}
      />

  <Post
        perfilUsuario={'https://www.instagram.com/mattyperry4/'}
        nomeUsuario={'Chandler Bing'}
        fotoUsuario={chandler}
        fotoPost={chandlerpost1}
      />

  <Post
        perfilUsuario={'https://www.instagram.com/_schwim_/'}
        nomeUsuario={'Ross Geller'}
        fotoUsuario={ross}
        fotoPost={rosspost}
      />
    <FooterMain/>  
  </MainContainer>
)

}


export default App;
