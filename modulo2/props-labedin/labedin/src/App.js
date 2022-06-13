import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://th.bing.com/th/id/OIP._4ElbAihZF43Z8NDHb6wVQHaEo?pid=ImgDet&rs=1"
          nome="Mariluci de Lima Walczak" 
          descricao="Muito prazer, sou Mariluci. Trabalho na empresa MW Informática, sou gerente adm. Meu objetivo é me tornar uma desenvolvedora Front end. Adoro animais, esportes, música, dança. Tenho como meta diária ser sempre útil, através do meu conhecimento, do meu tempo, e da paciência em ouvir aquele que precisa falar."
        />
        
        <ImagemButton 
          imagem="https://th.bing.com/th/id/OIP.GQ9AQ_xNLacZ70mtDNi3oQHaHa?w=160&h=180&c=7&r=0&o=5&pid=1.7" 
          texto="Ver mais"
        />
      </div>

      <div className='CardPequeno'>
        <CardPequeno
        imagem="https://th.bing.com/th?q=S%c3%admbolo+Email&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=pt-BR&cc=BR&setlang=pt-br&adlt=moderate&t=1&mw=247"
        nome="E-mail"
        descricao="mariluciwalcza@gmail.com"
      />

      <CardPequeno
        imagem="https://th.bing.com/th/id/OIP.dVMwFEje1p2kj6aPaHt_wwHaHa?w=168&h=180&c=7&r=0&o=5&pid=1.7"
        nome="Endereço"
        descricao="Rua Baraba, 150 - Goiânia4 - Goiânia - Goiás"
      />

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://th.bing.com/th/id/OIP.MNH52tLCyd74YFttoobq5AHaEK?w=327&h=187&c=7&r=0&o=5&pid=1.7" 
          nome="Fatesg" 
          descricao="Formação Superior como Analista de Sistemas" 
        />
        
        <CardGrande 
          imagem="https://th.bing.com/th/id/OIP.u4aILuEsYlZYi1iBPQnDiQHaFS?w=225&h=180&c=7&r=0&o=5&pid=1.7" 
          nome="Flower Treinamentos" 
          descricao="Curso técnico de atendimento ao público." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>

    </div>
    </div>
  );
}

export default App;
