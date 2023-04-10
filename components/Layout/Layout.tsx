import Footer from '@components/Footer/Footer'
import Navbar from '@components/Navbar/Navbar'
import { Container } from 'semantic-ui-react'

type LayoutProps = {
    children?: React.ReactNode
  }
  
  const Layout = ({ children }: LayoutProps) => (
    <>
      <Navbar />
      <Container as="main" text>
        {children}
      </Container>
      <Footer />
    </>
  )
  
  export default Layout