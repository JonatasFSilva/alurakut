import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { func } from 'prop-types';

import {AlurakutMenu, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons'
import {ProfileRelationsBoxWrapper} from '../src/components/ProfileRelations'


function ProfileSideBar(propriedades){
  return(
  <Box>
    <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px'}}/>
  </Box>
  )
}

export default function Home() {

  const githubUser = 'JonatasFSilva';
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho'
  ];

  return (
    <>
    <AlurakutMenu/>
    <MainGrid>
      <div className= "profileArea" style={{gridArea: 'profileArea'}}>
        <ProfileSideBar githubUser ={githubUser}/>        
      </div>
      <div className= "welcomeArea" style={{gridArea: 'welcomeArea'}}>
        <Box className = "title">
          <h1>Bem Vindo(a)</h1>
          <OrkutNostalgicIconSet/>
        </Box>
      </div>
      <div className= "profileRealtionsArea" style={{gridArea: 'profileRealtionsArea'}}>
        <ProfileRelationsBoxWrapper >
          <h2 className="smalTitle">Pessoas da Comunidade ({pessoasFavoritas.length})</h2>
          
          <ul>
            {pessoasFavoritas.map((itemAtual) => {
              return(
                <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
              )
            })}
          </ul>
          
        </ProfileRelationsBoxWrapper>      
      </div>
    </MainGrid>
    </>
  )  
}
