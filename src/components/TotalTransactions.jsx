const TotalTransactions = ({ listTransactions }) => {
  let total = 0

  listTransactions.forEach((transaction) => {
    if (transaction.type === "entrada") {
      total += transaction.value
    } else {
      total -= transaction.value
    }
  })

  return (
    <>
      {listTransactions.length > 0 && (
        <div className="total_balance">
          <div>
            <p>Valor total:</p>
            <span>${total}</span>
          </div>
          <span>O valor se refere ao saldo</span>
        </div>
      )}
    </>
  )
}
export default TotalTransactions
