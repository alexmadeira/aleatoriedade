import React from 'react'

import useNumber from '~/hooks/useNumber'

import { Container } from './styles'

const SowNumber: React.FC = () => {
  const { getNumber } = useNumber()

  const number = getNumber()

  return <Container>{number}</Container>
}

export default SowNumber
