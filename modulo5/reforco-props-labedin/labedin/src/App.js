import React from 'react';
import { AppContainer, PageSectionContainer } from './AppStyles.js';
import CardGrande from './components/CardGrande/CardGrande.js';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <AppContainer>
      <PageSectionContainer>
        <h2>Dados pessoais</h2>

        <CardGrande
          imagem="/img/avatar.png"
          nome="Mariluci"
          descricao="Oi, eu sou a Mariluci, pode me chamar por Malu. Sou aluna da Labenu. Estou sofrendo muito com props. Acredito que com esse exercício vou conseguir compreender um pouco mais."
        />

        <ImagemButton
          imagem="/img/seta.png"
          texto="Ver mais"
        />
      </PageSectionContainer>

  <div>
        <CardPequeno
          imagem="/img/email.png"
          titulo="Email : "
          dados= " mariluci@gmail.com"
        />

        <CardPequeno
          imagem="/img/endereco.png"
          titulo="Endereço : "
          dados=" Rua malu nr. 55 - Vida Feliz"
        />
        </div>
    

      <PageSectionContainer>
        <h2>Experiências profissionais</h2>

        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Labenu"
          descricao="Formando desenvolvedores para o mercado de trabalho!"
         />

        <CardGrande
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg"
          nome="NASA"
          descricao="Apontando defeitos." 
          />

        {/* </BigCardContainer> */}
      </PageSectionContainer>

      <PageSectionContainer>
        <h2>Minhas redes sociais</h2>
         <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        /> 
        <ImagemButton
          imagem="/img/insta.png"
          texto="Instagram"
        />
        </PageSectionContainer>
    </AppContainer>
  );
}

export default App;
