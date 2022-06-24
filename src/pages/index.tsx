import React from 'react'

import useNumber from '~/hooks/useNumber'

import SowNumber from '~/Components/SowNumber'
import BarList from '~/Components/BarList'

import { Container } from '~/styles/pages/Home'

const Home: React.FC = () => {
  const { newNumber } = useNumber()

  return (
    <Container>
      <SowNumber />
      <BarList />
    </Container>
  )
}

export default Home
