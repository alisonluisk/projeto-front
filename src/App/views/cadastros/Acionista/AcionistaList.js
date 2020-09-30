import React from "react";
import CustomTablePaginated from "src/App/components/Tables/Paginated/CustomTablePaginated.js";
import { maskCpfCnpj, maskContaIBolsa, maskTelefone } from "src/App/utils/formatterHelper";

const AcionistaList = (props) => {
  
  const columns = [
    {
      id: 'conta',
      label: 'Conta',
      width: '10%',
      sort: true,
      filter: true,
      disablePadding: false,
      align: 'left',
      mask: maskContaIBolsa
    },
    {
      id: 'cpfCnpj',
      label: 'CPF/CNPJ',
      width: '15%',
      sort: true,
      filter: true,
      disablePadding: false,
      align: 'left',
      mask: maskCpfCnpj
    },
    {
      id: 'nome',
      label: 'Nome',
      width: '39%',
      sort: true,
      filter: true,
      disablePadding: false,
      align: 'left',
    },
    {
      id: 'telefoneFixo',
      label: 'Telefone',
      width: '13%',
      sort: true,
      filter: true,
      disablePadding: false,
      align: 'left',
      mask: maskTelefone
    },

    {
      id: 'telefoneCelular',
      label: 'Celular',
      width: '13%',
      sort: true,
      filter: true,
      disablePadding: false,
      align: 'left',
      mask: maskTelefone
    },
    {
      id: 'acoes',
      label: 'Ações',
      width: '10%',
      sort: false,
      filter: false,
      disablePadding: false,
      align: 'left',
      isAction: true
    }
  ]

  return (
    <React.Fragment>
      <CustomTablePaginated
        columns={columns}
        {...props}
      />
    </React.Fragment>
  );
};

export default AcionistaList;