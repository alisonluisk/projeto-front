import BaseResourceService from "../BaseResourceService.js"

class UsuarioService extends BaseResourceService {

    endpoint = 'usuarios';

    getAllAtivos = async () =>{
        let params = [];
        params.push({chave: 'ativo', valor: true});
        return this.getAll(this.endpoint, params);
    }

    getAllDesativados(){
        let params = [];
        params.push({chave: 'ativo', valor: false});
        return this.getAll(this.endpoint, params);
    }

    getAllByParams = async (params) =>{
        params.push({chave: 'ativo', valor: true});
        return this.getAll(this.endpoint, params);
    }   

    salvar(usuario){
        return this.salvarModelo(this.endpoint, usuario);
    }

    getByCodigo = async (id) => {
        return this.findModelo(this.endpoint, id);
    }

}

const sevice = new UsuarioService();
export default sevice;