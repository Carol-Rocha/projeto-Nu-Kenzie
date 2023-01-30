import { useState } from "react"
import Home from "./pages/Home"
import Transactions from "./pages/Transactions"

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "despesa", value: 150 },
  ])

  const [page, setPage] = useState("home")
  const [filteredTransaction, setFilteredTransactions] =
    useState(listTransactions)

  return (
    <div className="App">
      {page === "home" ? (
        <Home setPage={setPage} />
      ) : (
        <Transactions
          setPage={setPage}
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
          filteredTransaction={filteredTransaction}
          setFilteredTransactions={setFilteredTransactions}
        />
      )}
    </div>
  )
}

export default App
