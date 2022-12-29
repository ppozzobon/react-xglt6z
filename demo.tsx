import React from 'react';
import './index.css';
import { Select } from 'antd';
import type { SelectProps } from 'antd';

const clientes: SelectProps['options'] = [
  {value: "ATUAL CARGAS TRANSPORTES LTDA - 08848231000161", label: "ATUAL CARGAS TRANSPORTES LTDA - 08848231000161"},
  {value: "TLX TRANSPORTE E LOGISTICA LTDA - 15475228000296", label: "TLX TRANSPORTE E LOGISTICA LTDA - 15475228000296"},
  {value: "OTD BRASIL LOGISTICA S A - 07579025000130", label: "OTD BRASIL LOGISTICA S A - 07579025000130"},
];

const fornecedores: SelectProps['options'] = [
  {value: "REDE DE POSTOS MARAJO HIDROLANDIA LTDA - 42354394000126", label: "REDE DE POSTOS MARAJO HIDROLANDIA LTDA - 42354394000126"},
  {value: "REDE DE POSTOS MARAJO CENTRALINA LTDA - 24187119000183", label: "REDE DE POSTOS MARAJO CENTRALINA LTDA - 24187119000183"},
  {value: "POSTO AGRICOPEL LTDA. - 83488882000456", label: "POSTO AGRICOPEL LTDA. - 83488882000456"},
];

// for (let i = 10; i < 36; i++) {
//   options.push({
//     value: i.toString(36) + i,
//     label: i.toString(36) + i,
//   });
// }

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const App: React.FC = () => (
  [<Select
    mode="tags"
    style={{ width: '50%' }}
    placeholder="Incluir cliente"
    onChange={handleChange}
    options={clientes}
  />,
  <Select
    mode="tags"
    style={{ width: '50%' }}
    placeholder="Incluir Fornecedor"
    onChange={handleChange}
    options={fornecedores}
  />,
  <Select
    mode="tags"
    style={{ width: '50%' }}
    placeholder="Remover cliente"
    onChange={handleChange}
    options={clientes}
  />,
  <Select
    mode="tags"
    style={{ width: '50%' }}
    placeholder="Remover Fornecedor"
    onChange={handleChange}
    options={fornecedores}
  />,]
);

export default App;