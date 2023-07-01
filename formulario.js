import { LightningElement } from 'lwc';

export default class Formulario extends LightningElement {

    nomeCompleto = '';
    telefone= '';
    email = '';

    handleEvento(event){
        const field = event.target.name;
        if(field == 'nomeCompleto'){
            this.nomeCompleto = event.target.value;
        }else if(field == 'telefone'){
            this.telefone = event.target.value;
        }else if(field == 'email'){
            this.email = event.target.value;
        }
    }

}