import type { Transacao } from '../types'
import styles from './List.module.css'

interface ListProps {
    transacoes: Transacao[]
}

export function List({ transacoes }: ListProps) {
    return(
        <div className={styles.listWrapper}>
            <div className={styles.header}>
                <h3>✍🏻 Transações</h3>
                <span className={styles.counter}>({transacoes.length} transações)</span>
            </div>

            <div className={styles.transacoes}>
                {transacoes.map(transacao => (
                <div key={transacao.id} className={styles.card}>
                    
                    <div className={styles.cardLeft}>
                        <div className={styles.icon}>
                            {transacao.categoria.split(' ')[1] || '🧾'}
                        </div>
                        <div className={styles.info}>
                            <strong>{transacao.nome}</strong>
                            <span>{transacao.categoria.split(' ')[0]}</span>
                        </div>
                    </div>

                    <div className={styles.cardRight}>
                        <span className={styles.date}>
                            {transacao.data.toLocaleDateString('pt-BR')}
                        </span>
                        <strong className={transacao.tipo === 'Receita' ? styles.receita : styles.despesa}>
                            {transacao.tipo === 'Receita' ? '+ ' : '- '} 
                            {transacao.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </strong>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}