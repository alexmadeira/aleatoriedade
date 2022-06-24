import { useContextSelector } from 'use-context-selector'
import { NumberContex } from '~/context/NumberContex'

export default function usePet(): INumberContextData {
  const newNumber = useContextSelector(NumberContex, number => number.newNumber)
  const getNumber = useContextSelector(NumberContex, number => number.getNumber)
  const barsSize = useContextSelector(NumberContex, number => number.barsSize)
  const getBars = useContextSelector(NumberContex, number => number.getBars)

  return {
    getNumber,
    newNumber,
    barsSize,
    getBars
  }
}
