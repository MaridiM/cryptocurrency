export interface Order {
    id: number
    amount: string
    recive: string
    type: 'buy' | 'sell'
}