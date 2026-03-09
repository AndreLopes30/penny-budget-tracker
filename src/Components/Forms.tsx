import { useState } from 'react';
import styles from './Forms.module.css';
import type { Transacao } from '../types';

interface FormsProps {
    transacaoNova: (transacao: Transacao) => void;
}

export function Forms({ transacaoNova }: FormsProps) {
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [tipo, setTipo] = useState<'Receita' | 'Despesa'>('Receita');
    const [categoria, setCategoria] = useState('Alimentação 🍔');
    const [data, setData] = useState('');

    function adicionarTransacao() {
        if (!nome || !valor) {
            alert("Preencha os campos!");
            return;
        }

        const transacao: Transacao = {
            id: Math.random(),
            nome,
            valor: Number(valor.replace(',', '.')),
            tipo,
            categoria,
            data: data ? new Date(data) : new Date()
        };
        
        transacaoNova(transacao);        
        setNome('');
        setValor('');
        setTipo('Receita');
        setCategoria('Alimentação 🍔');
        setData('');
    }

    return (
        <div className={styles.formCard}>
            <h3>+ Nova Transação</h3>
            
            <div className={styles.formBody}>
                <label>
                    Nome da transação
                    <input type="text" placeholder="Ex: Almoço" value={nome} onChange={(e) => setNome(e.target.value)}/>
                </label>
                
                <label>
                    Valor
                    <input type="text" placeholder="R$ 0,00" value={valor} onChange={(e) => setValor(e.target.value)}/>
                </label>

                <label>
                    Data
                    <input type="date" value={data} onChange={(e) => setData(e.target.value)}/>
                </label>

                <label>
                    Receita / Despesa
                    <select value={tipo} onChange={(e) => setTipo(e.target.value as 'Receita' | 'Despesa')}>
                        <option value="Receita">Receita 🟢</option>
                        <option value="Despesa">Despesa 🔴</option>
                    </select>
                </label>

                <label>
                    Categoria
                    <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                        <option value="Alimentação 🍔">Alimentação 🍔</option>
                        <option value="Transporte 🚗">Transporte 🚗</option>
                        <option value="Lazer 🎮">Lazer 🎮</option>
                        <option value="Moradia 🏠">Moradia 🏠</option>
                        <option value="Outros 📦">Outros 📦</option>
                    </select>
                </label>

                <button className={styles.btnSubmit} onClick={adicionarTransacao}>
                    Adicionar
                </button>
            </div>
        </div>
    );
}