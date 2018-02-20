import { Component,Input, EventEmitter, Output } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'botao',
    templateUrl: './botao.component.html'
})
 export class BotaoComponent {
    @Input() nome: string = 'Ok';
    @Input() estilo: string = 'btn-default';
    @Input() tipo: string = 'button';
    @Input() desabilitado: boolean = false;
    
    //Vai emitir um evento - que tiver essa propriedade, irá sofrer o evento
    @Output() acao = new EventEmitter();

    executaAcao(){

        if(confirm('Deseja Excluir?')){
            this.acao.emit(null);
        }
    }
}