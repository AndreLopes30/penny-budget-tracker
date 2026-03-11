import type { Transacao } from '../types'
import styles from './List.module.css'

interface ListProps {
    transacoes: Transacao[]
}

const formatarData = (dataStr: string) => {
    const data = new Date(dataStr);
    return data.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
};

const formatarValor = (valorCentavos: number) => {
    return (valorCentavos / 100).toLocaleString('pt-BR', { 
        style: 'currency', 
        currency: 'BRL' 
    });
};

export function List({ transacoes, excluirTransacao }: ListProps & { excluirTransacao: (id: number) => void }) {
    return(
        <div className={styles.listWrapper}>
            <div className={styles.header}>
                <h3>✍🏻 Transações</h3>
                <span className={styles.counter}>({transacoes.length} transações)</span>
            </div>

            <div className={styles.transacoes}>
                {[...transacoes].reverse().map(transacao => (
                <div key={transacao.id} className={styles.card}>
                    
                    <div className={styles.cardLeft}>
                        <div className={styles.icon}>
                                {transacao.categoria.includes(' ') 
                                    ? transacao.categoria.split(' ')[1] 
                                    : '🧾'}
                        </div>
                        <div className={styles.info}>
                            <strong>{transacao.nome}</strong>
                            <span>{transacao.categoria.split(' ')[0]}</span>
                        </div>
                    </div>

                    <div className={styles.cardRight}>
                        <span className={styles.date}>
                            {formatarData(transacao.data)}
                        </span>
                        <strong className={transacao.tipo === 'Receita' ? styles.receita : styles.despesa}>
                            {transacao.tipo === 'Receita' ? '+ ' : '- '} 
                                {formatarValor(transacao.valor)}
                        </strong>
                    </div>
                    <button className={styles.btnDelete} onClick={() => excluirTransacao(transacao.id)}>
                        ✕
                    </button>
                </div>
                ))}

                {transacoes.length === 0 && (
                    <p style={{ textAlign: 'center', color: '#666', marginTop: '20px' }}>
                        Nenhuma transação encontrada.
                    </p>
                )}
            </div>
        </div>
    )
}