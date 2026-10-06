import AsyncStorage from '@react-native-async-storage/async-storage';

// Dados de exemplo (Fase 1) + animais cadastrados pelo formulário (Fase 2, AsyncStorage).
export const STORAGE_KEY = '@animais';

export type Cuidado = {
  id: number | string;
  tipo: string;
  descricao: string;
  data: string;
  concluido?: boolean;
};

export type Animal = {
  id: string;
  nome: string;
  especie: string;
  raca: string;
  aviso?: string;
  cuidados: Cuidado[];
};

export function formatarData(valor: string): string {
  const somenteDigitos = valor.replace(/\D/g, '').slice(0, 8);

  if (somenteDigitos.length <= 2) return somenteDigitos;
  if (somenteDigitos.length <= 4) return `${somenteDigitos.slice(0, 2)}/${somenteDigitos.slice(2)}`;

  return `${somenteDigitos.slice(0, 2)}/${somenteDigitos.slice(2, 4)}/${somenteDigitos.slice(4, 8)}`;
}

export const animaisExemplo: Animal[] = [
  {
    id: '1',
    nome: 'Mimi',
    especie: 'Gato',
    raca: 'Siamês',
    aviso: 'Consulta amanhã',
    cuidados: [
      { id: 1, tipo: 'VACINA', descricao: 'V4 (quádrupla felina)', data: '15/02/2026' },
      { id: 2, tipo: 'CONSULTA', descricao: 'Check-up de rotina', data: '29/09/2026' },
    ],
  },
  {
    id: '2',
    nome: 'Thor',
    especie: 'Cachorro',
    raca: 'Golden Retriever',
    aviso: 'Vacina em 15 dias',
    cuidados: [
      { id: 1, tipo: 'VACINA', descricao: 'V10 (múltipla)', data: '10/03/2026' },
      { id: 2, tipo: 'CONSULTA', descricao: 'Check-up de rotina', data: '22/05/2026' },
      { id: 3, tipo: 'ALIMENTAÇÃO', descricao: 'Ração premium adulto, 2x ao dia', data: '01/08/2026' },
    ],
  },
  {
    id: '3',
    nome: 'Bidu',
    especie: 'Cachorro',
    raca: 'Vira-lata',
    aviso: 'Tudo em dia',
    cuidados: [{ id: 1, tipo: 'MEDICAMENTO', descricao: 'Vermífugo', data: '05/09/2026' }],
  },
];

// Exemplos + cadastrados. Se o AsyncStorage falhar, mostra só os exemplos.
export async function carregarAnimais(): Promise<Animal[]> {
  try {
    const dados = await AsyncStorage.getItem(STORAGE_KEY);
    const salvos: Animal[] = dados ? JSON.parse(dados) : [];
    return [...animaisExemplo, ...salvos];
  } catch (error) {
    console.log('Erro ao carregar animais:', error);
    return animaisExemplo;
  }
}
