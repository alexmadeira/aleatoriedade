interface INumberContextData {
  getNumber(): string
  newNumber(): void
  barsSize(barId: string): void
  getBars(): IBar[]
}

interface IBarProps {
  size: number
}

interface IBar {
  id: string
  size: number
}
