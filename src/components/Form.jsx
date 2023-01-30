import { useState } from "react"

const Form = ({ setListTransactions, setFilteredTransactions }) => {
  const [transaction, setTransaction] = useState({
    description: "",
    type: "",
    value: null,
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    setListTransactions((list) => {
      return [...list, transaction]
    })
    setFilteredTransactions((list) => {
      return [...list, transaction]
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="description">Descrição</label>

      <input
        onChange={(event) =>
          setTransaction((transaction) => {
            return { ...transaction, description: event.target.value }
          })
        }
        className="font_family_inter"
        type="text"
        id="description"
        name="description"
        placeholder="Digite aqui sua descrição"
      />

      <span>Ex: Compra de roupas</span>
      <div className="values_form">
        <div className="value">
          <label htmlFor="value">Valor</label>
          <div>
            <input
              onChange={(event) =>
                setTransaction((transaction) => {
                  return { ...transaction, value: Number(event.target.value) }
                })
              }
              className="font_family_inter"
              type="text"
              id="value"
              name="value"
              placeholder="1"
            />
            <span>R$</span>
          </div>
        </div>
        <div className="value_type">
          <label htmlFor="type">Tipo de valor</label>
          <select
            className="font_family_inter"
            onChange={(event) =>
              setTransaction((transaction) => {
                return { ...transaction, type: event.target.value }
              })
            }
          >
            <option value="">Selecione</option>
            <option value="entrada">Entrada</option>
            <option value="despesa">Despesa</option>
          </select>
        </div>
      </div>
      <button type="submit">Inserir valor</button>
    </form>
  )
}

export default Form
