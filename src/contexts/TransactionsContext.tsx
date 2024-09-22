import { createContext, useEffect, useState } from "react"

interface ITransaction {
    id: number
    description: string
    type: 'income' | 'outcome'
    price: number
    category: string
    createdAt: string
}

interface TransactionsContextType {
    transactions: ITransaction[]
}

export const TransactionsContext = createContext({} as TransactionsContextType)

interface TransactionsProviderProps {
    children: React.ReactNode
}
export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<ITransaction[]>([])
    async function loadTransactions() {
        const response = await fetch("http://localhost:3333/transactions")
        const data: ITransaction[] = await response.json()

        setTransactions(data)
    }
    useEffect(() => {
        loadTransactions()
    }, [])

    return (
        <TransactionsContext.Provider value={{ transactions }}>
            {children}
        </TransactionsContext.Provider >
    )
}