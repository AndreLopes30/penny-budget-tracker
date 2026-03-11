export interface Transacao {
  id: number;
  tipo: "Receita" | "Despesa";
  nome: string;
  valor: number;
  categoria: string;
  data: string;
}