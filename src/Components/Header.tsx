import styles from './Header.module.css';

interface HeaderProps {
  imagem: string;
  descricao: string;
  receitas: number;
  despesas: number;
  saldo: number;
}

const formatarMoeda = (valor: number) => {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

export function Header({ imagem, descricao, receitas, despesas, saldo }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        <div className={styles.branding}>
          <img src={imagem} alt="Logo Penny" className={styles.logo} />
          <p className={styles.descricao}>{descricao}</p>
        </div>

        <div className={styles.summaryGrid}>
          <div className={styles.card}>
            <div className={`${styles.icon} ${styles.greenIcon}`}>↑</div>
            <div className={styles.cardContent}>
              <span className={styles.cardLabel}>Receitas</span>
              <strong className={styles.cardValue}>{formatarMoeda(receitas)}</strong>
            </div>
          </div>

          <div className={styles.card}>
            <div className={`${styles.icon} ${styles.redIcon}`}>↓</div>
            <div className={styles.cardContent}>
              <span className={styles.cardLabel}>Despesas</span>
              <strong className={styles.cardValue}>{formatarMoeda(despesas)}</strong>
            </div>
          </div>

          <div className={styles.card}>
            <div className={`${styles.icon} ${styles.blueIcon}`}>$</div>
            <div className={styles.cardContent}>
              <span className={styles.cardLabel}>Saldo</span>
              <strong className={styles.cardValue}>{formatarMoeda(saldo)}</strong>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}