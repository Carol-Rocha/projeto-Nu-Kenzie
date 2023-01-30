import Header from "../components/Header"
import Form from "../components/Form"
import TotalTransactions from "../components/TotalTransactions"
import List from "../components/List"

const Transactions = ({
  listTransactions,
  setListTransactions,
  setPage,
  setFilteredTransactions,
  filteredTransaction,
}) => {
  return (
    <>
      <Header setPage={setPage} />
      <div className="transactions_container">
        <div className="transactions_actions">
          <Form
            setListTransactions={setListTransactions}
            setFilteredTransactions={setFilteredTransactions}
          />
          <TotalTransactions listTransactions={listTransactions} />
        </div>
        <List
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
          filteredTransaction={filteredTransaction}
          setFilteredTransactions={setFilteredTransactions}
        />
      </div>
    </>
  )
}
export default Transactions
