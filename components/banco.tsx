import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import * as SQLite from 'expo-sqlite';

declare module 'expo-sqlite' {
  export interface SQLiteDatabase {
    execSync(sql: string): void;
  }

  export function openDatabaseSync(name: string): SQLiteDatabase;
}

// Abre (ou cria) o arquivo do banco no celular
const bancoDados = SQLite.openDatabaseSync('aplicativo_v1.db');

export default function BancoTest() {
  const [bancoGerado, setBancoGerado] = useState(false);


  useEffect(() => {
    try {
     
      bancoDados.execSync(`
        CREATE TABLE IF NOT EXISTS raca (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          descricao TEXT NOT NULL,
          status_feita INTEGER DEFAULT 0
        );
      `);
      setBancoGerado(true);
      console.log('Sucesso: Tabela criada!');
    } catch (err) {
      console.error('Erro ao criar tabela:', err);
    }
  }, []);

  return null;
}