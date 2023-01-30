import { useState } from "react"
import trash from "../assets/trash.svg"

const List = ({
  listTransactions,
  setListTransactions,
  filteredTransaction,
  setFilteredTransactions,
}) => {
  const deleteTransaction = (transactionName) => {
    setListTransactions(
      listTransactions.filter(
        (transaction) => transaction.description !== transactionName
      )
    )
    setFilteredTransactions(
      listTransactions.filter(
        (transaction) => transaction.description !== transactionName
      )
    )
  }

  const filterTransactions = (filter) => {
    if (!filter) {
      setFilteredTransactions(listTransactions)
    } else {
      setFilteredTransactions(
        listTransactions.filter((transaction) => transaction.type === filter)
      )
    }
  }

  return (
    <>
      <div className="transaction_summary">
        <h4>Resumo financeiro</h4>
        <div className="button_filter">
          <button onClick={() => filterTransactions("")}>Todos</button>
          <button onClick={() => filterTransactions("entrada")}>
            Entradas
          </button>
          <button onClick={() => filterTransactions("despesa")}>
            Despesas
          </button>
        </div>
      </div>

      {filteredTransaction.length < 1 ? (
        <h1>Você ainda não possui nenhum lançamento</h1>
      ) : (
        <ul>
          {filteredTransaction.map((transactions) => {
            return (
              <li>
                <div>
                  <p>{transactions.description}</p>
                  <span>{transactions.value}</span>
                </div>
                <small>{transactions.type}</small>
                <img
                  onClick={() => deleteTransaction(transactions.description)}
                  src={trash}
                  alt="trash"
                />
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
}
export default List
