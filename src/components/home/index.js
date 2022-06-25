import React from 'react'
import { 
  Container,
  CurlyBg,
  ClassroomPh,
  LittleHouse,
  OrangeStain,
  OrangeStrip,
  YellowStrip,
  Title,
  H5,
  H2,
  Button,
  Wrapper,
  Text,
  Bold,
  InfoWrapper,
  Info,
  Titulo,
  Information,
  BookIcon,
  OpenBookIcon,
  TeacherIcon,
  ButtonBottom
} from './styles'

export default function Home() {
  return (
    <Container>
      <CurlyBg />

      {/* IMAGES */}
      <ClassroomPh />
      <LittleHouse />
      <OrangeStain />
      <OrangeStrip />
      <YellowStrip />

      {/* TEXT */}
      <Title>Making the world our place</Title>
      <H5>Inglês a partir dos 3 anos de idade, sem sair de casa.</H5>
      <Button>Clique para uma aula teste!</Button>

      {/* Apresentação */}
      <Wrapper>
        <H2>Apresentação</H2>
        <Text>
        A Our Place é uma instituição de ensino afetivo lúdico e personalizado de acordo com os interesses de cada aluno e faixa etária. Que oferece o serviço no conforto de sua casa, sem tomar o seu tempo ou em nosso espaço estudantil, planejado para oferecer aos alunos uma experiência sensorial e interativa complementando a forma de metodologia.
        Independente de onde esteja, nos preparamos para ensinar Inglês de maneira efetiva e divertida transformando qualquer lugar em nossa sala de aula.
        <Bold>No matter where, we get there!</Bold>
        </Text>
      </Wrapper>

      {/* INFOS */}
      <InfoWrapper>
        <Info>
          <BookIcon />
          <Titulo>Nada é mais poderoso do que a sede por conhecimento!</Titulo>
          <Information>
          Por isso, focamos em transformar o aprendizado em um processo prazeroso, fazendo aquilo que seria uma obrigação se tornar um desejo diário. Trabalhando a sua ambição a favor de seu processo evolutivo e desenvolvimento da língua. Assim como somos apaixonados por ensinar, te tornamos apaixonado por aprender, formando um casamento perfeito entre os objetivos de aluno e professor e garantindo resultados prósperos.
          </Information>          
        </Info>

        <Info>
          <OpenBookIcon />
          <Titulo>Trilha do conhecimento Aqui você aprende o Inglês de verdade!</Titulo>
          <Information>
          Tanto para quem vai começar do zero quanto para aqueles que já tiveram aulas de inglês na escola, nós oferecemos a oportunidade de aprender a se comunica como um nativo. Diferente de cursos ou aulas de Inglês , nós introduzimos a língua de maneira natural trabalhando todos os sentidos, através de atividades do dia a dia, músicas , leituras e fala, expondo o aluno a vocabulários diversos,utilizados comumente apenas por aqueles que possuem o Inglês como primeira língua. Nada de Inglês travado ou cheio de decorebas, aqui você se destaca  aprendendo  o inglês real!
          </Information>          
        </Info>

        <Info>
          <TeacherIcon />
          <Titulo>Você é único para nós!</Titulo>
          <Information>
          Planejamos nossas aulas de maneira cuidadosa e personalizada para cada faixa etária, focando nas abordagens mais efetivas, desenvolvimento de interesse nas lições e níveis de inglês dos alunos! Diferentemente de cursos padrão ,não massificamos nossa sala de aula, acreditamos na individualidade de cada um de nossos alunos e analisamos frequentemente os pontos fortes e os a serem desenvolvidos, assim todos dominam a língua por completo, como verdadeiros fluentes.
          </Information>          
        </Info>
      </InfoWrapper>
      <ButtonBottom>Clique para uma aula teste!</ButtonBottom>
    </Container>
  )
}
