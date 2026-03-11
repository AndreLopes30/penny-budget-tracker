import { useState, useEffect, useMemo } from 'react'
import { Forms } from './Components/Forms'
import type { Transacao } from './types'
import './App.css'
import { Header } from './Components/Header'
import penny from './assets/Penny.png'
import { List } from './Components/List'
import axios from 'axios'

const API_URL = "https://penny-budget-tracker.onrender.com"

function App() {
    const [transacoes, setTransacoes] = useState<Transacao[]>([])

    const { receitas, despesas, saldo } = useMemo(() => {
        let rec = 0;
        let desp = 0;
        
        transacoes.forEach(t => {
            if (t.tipo === 'Receita') rec += t.valor;
            else desp += t.valor;
        });
        
        return { receitas: rec, despesas: desp, saldo: rec - desp };
    }, [transacoes]);

    useEffect(() => {
        axios.get(API_URL)
            .then(response => setTransacoes(response.data))
            .catch(error => console.error("Erro ao buscar transações:", error));
    }, []);

    async function adicionarNaLista(transacaoNova: Omit<Transacao, 'id'>) {
        try {
            const response = await axios.post(API_URL, transacaoNova);
            setTransacoes([...transacoes, response.data]);
        } catch (error) {
            console.error("Erro ao salvar transação:", error);
            alert("Não foi possível salvar no banco de dados. Verifique se o Backend está rodando!");
        }
    }

    async function excluirTransacao(id: number) {
        try {
            await axios.delete(`${API_URL}${id}/`);
            setTransacoes(transacoes.filter(t => t.id !== id));
        } catch (error) {
            console.error("Erro ao excluir transação:", error);
            alert("Não foi possível excluir a transação. Verifique se o Backend está rodando!");
        }
    }

    return (
  <div className="app-box">
    <Header saldo={saldo} imagem={penny} descricao='Cada centavo conta.' receitas={receitas} despesas={despesas}/>
    <main className="main-container"> 
      <Forms transacaoNova={adicionarNaLista} />
      <List transacoes={transacoes} excluirTransacao={excluirTransacao} />
    </main>
  </div>
);
}
export default App