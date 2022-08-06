import React, { useRef, useState } from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';

import { 
  Container,
  Logo,
  Wrapper,
  Button,
  DropdownButton,
  DropDownWrapper,
  TopBg,
  Link
} from './styles'

export default function NavBar() {
  const dropDownRef = useRef(null)
  const [isActive, setIsActive] = useState(false)
  const onClick = () => setIsActive(!isActive)

  // let activeStyle = {
  //   color: '#AD4226',
  //   textDecoration: 'none'
  // };

  // let nonActive = {
  //   color: '#1B6270',
  //   textDecoration: 'none',
  // }


  if(window.innerWidth < 769){
    return(
      <>
        <TopBg />
        <Container>
        <Logo />
        <DropdownButton             
          onClick={onClick} 
          ref={dropDownRef}
        >
        { !isActive ?
          <HiOutlineMenuAlt3 
            style={{
            color: '#AD4226',
            height: '25px',
            width: '25px',
          }}/>

          : (
            <>
              <IoIosArrowDown 
                style={{
                color: '#AD4226',
                height: '25px',
                width: '25px',
              }}/>

              <DropDownWrapper ref={dropDownRef}>
                  <Link href="#home"> Home </Link>
                  <Link href="#metodologia"> Metodologia </Link>
                  <Link href="#quemsomos"> Quem Somos </Link>
                  <Link href="#contato"> Fale Conosco </Link>
                  <Link href="#galeria"> Galeria </Link>
              </DropDownWrapper>
            </>
            )
          }
          </DropdownButton>
        </Container>
      </>
    )
  } else {
    return (
      <>
        <TopBg />
        <Container>
          <Logo />
          <Wrapper>
            <Link href="#home"> Home </Link>
            <Link href="#metodologia"> Metodologia </Link>
            <Link href="#quemsomos"> Quem Somos </Link>
            <Link href="#contato"> Fale Conosco </Link>
            <Link href="#galeria"> Galeria </Link>
          </Wrapper>
          <Button>
            <a 
              href='https://wa.me/5511999610535' 
              target="blank"
              style={{
                textDecoration: 'none',
                color: 'white',
              }}
              >
                MATRICULE-SE
            </a>
          </Button>
        </Container>
      </>
    )
  }

}
