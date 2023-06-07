import { Container, Content, Logo } from './styles'
import logoGray from '../../assets/logo_gray.svg'

export function Footer() {
  return (
    <Container>
      <Content>
        <Logo>
          <div className="logo">
            <img src={logoGray} alt="" />
            <span>food explorer</span>
          </div>
        </Logo>

        <p>© 2022 - Todos os direitos reservados.</p>
      </Content>
    </Container>
  )
}
