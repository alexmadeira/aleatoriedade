import React from 'react'

import { Container } from './styles'

const Bar: React.FC<IBarProps> = ({ size }) => {
  return <Container style={{ height: `${size}px` }} />
}

export default Bar
