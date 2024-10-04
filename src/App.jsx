import './global.css';
import styles from "./App.module.css";

import { Post } from './components/Post/Post'
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';


function App() {
  return (
    <>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        <Post
          author="Henderson Kettermann"
          authorRole="Estudante CRIE_Ti"
          publishedAt="01/10/2024"
          avatarUrl="http://github.com/HendersonRK.png"
          conteudo="Novo projeto postado pessoal, curtam"
          conteudoUrl="http://github.com/HendersonRK"
          tags="#NovoProjeto"          
        />
        <Post 
          author="Juca Bala"
          authorRole="front-end DEV"
          publishedAt="02/10/2024"
          avatarUrl="https://cdn.alboompro.com/5fb3e0f69111f40001922f2f_642abb20a52ac000011198c5/large/foto-de-perfil-whatsapp.jpg?v=1"
          conteudo="Dicas e boas práticas com JavaScript  
                    Use com consciência os comparadores de igualdade == e ===
                    Sempre utilize o ponto e vírgula nos locais apropriados.
                    Evite declarar variáveis no escopo global.
                    Tenha cuidado ao trabalhar com decimais.
                    Crie o hábito de utilizar o estilo de indentação K&R ou um de seus variantes"

          conteudoUrl=""
          tags="#Dicas #JS"      
        />
        <Post
          author="Chupiks Canoinha"
          authorRole="back end dev"
          publishedAt="04/10/2024"
          avatarUrl="https://cdn.alboompro.com/5fb3e0f69111f40001922f2f_642abb20a52ac000011198d3/large/fotos-para-perfil-do-whatsapp.jpg?v=1"
          conteudo=""
          conteudoUrl="Quer se tornar um desenvolvedor back-end, mas não sabe por onde começar?
                      estude:
                      1. Lógica de programação
                      2. Front-end
                      3. Banco de dados
                      4. Uma framework para desenvolvimento web"
          tags="#Webdev #frontend #backend #BD"          
        />
      </main>
    </div>
      
    </>
  );
}
export default App;
