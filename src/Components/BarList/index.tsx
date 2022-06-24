import React from 'react'
import useNumber from '~/hooks/useNumber'

import Bar from './Bar'
import { Container } from './styles'

const BarList: React.FC = () => {
  const { getBars } = useNumber()
  const bars = getBars()

  return (
    <Container>
      {bars.map(({ id, size }) => (
        <Bar size={size} key={id} />
      ))}
    </Container>
  )
}

export default BarList
