import React, { useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'

import { BARS_NUMBER, RANDON_NUMBER_SUM, UPDATE_SPEED } from '~/consts'

const NumberContex = createContext<INumberContextData>({} as INumberContextData)

const NumberProvider: React.FC = ({ children }) => {
  const [number, setNumber] = useState<string>(null)
  const [bars, setBars] = useState<IBar[]>([] as IBar[])

  const intBar = useCallback(() => {
    setBars(
      Array(BARS_NUMBER * RANDON_NUMBER_SUM)
        .fill('')
        .map((item, id) => ({
          id: String(id),
          size: 0
        }))
    )
  }, [])

  const newNumber = useCallback(() => {
    let randonNumber = 0
    Array(RANDON_NUMBER_SUM)
      .fill('')
      .forEach(() => {
        const createRandonNumber = Math.floor(Math.random() * (BARS_NUMBER + 1))
        console.log()
        randonNumber += createRandonNumber
      })

    setNumber(String(randonNumber))
    setTimeout(() => {
      newNumber()
    }, UPDATE_SPEED)
    // requestAnimationFrame(newNumber)
  }, [])

  const barsSize = useCallback(
    (barId: string) => {
      setBars(prevState =>
        prevState.map(bar => {
          if (bar.id === barId) {
            return { ...bar, size: bar.size + 1 }
          }
          return bar
        })
      )
    },
    [bars]
  )

  const getBars = useCallback(() => {
    return bars
  }, [bars])

  const updateBas = useCallback(() => {
    barsSize(number)
  }, [bars, number])

  const getNumber = useCallback(() => {
    return number
  }, [number])

  useEffect(() => {
    intBar()
    // setInterval(() => {
    newNumber()
    // }, UPDATE_SPEED)
  }, [])

  useEffect(() => {
    updateBas()
  }, [number])

  return (
    <NumberContex.Provider
      value={{
        getNumber,
        newNumber,
        barsSize,
        getBars
      }}
    >
      {children}
    </NumberContex.Provider>
  )
}

export { NumberContex, NumberProvider }
