import { useState } from 'react'
import { Forms } from './Components/Forms'
import type { Transacao } from './types'
import './App.css'
import { Header } from './Components/Header'
import penny from './assets/Penny.png'
import { List } from './Components/List'

function App() {
    const [saldo, setSaldo] = useState(0)
    const [receitas, setReceitas] = useState(0)
    const [despesas, setDespesas] = useState(0)
    const [transacoes, setTransacoes] = useState<Transacao[]>([])
    
    function adicionarNaLista(transacaoNova: Transacao) {
        setTransacoes([...transacoes, transacaoNova])
        if (transacaoNova.tipo === 'Receita') {
            setReceitas(receitas + transacaoNova.valor)
            setSaldo(saldo + transacaoNova.valor)
        } else if (transacaoNova.tipo === 'Despesa') {
            setDespesas(despesas + transacaoNova.valor)
            setSaldo(saldo - transacaoNova.valor)
        }
    }

    return (
  <div className="app-box">
    <Header saldo={saldo} imagem={penny} descricao='Cada centavo conta.' receitas={receitas} despesas={despesas}/>
    <main className="main-container"> 
      <Forms transacaoNova={adicionarNaLista} />
      <List transacoes={transacoes} />
    </main>
  </div>
);
}
export default App