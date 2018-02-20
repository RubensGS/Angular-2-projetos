import { FotoComponent } from '../foto/foto.component';
import { FotoService } from '../foto/foto.service';
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})

export class ListagemComponent {
    
    fotos: FotoComponent[] = [];
    service: FotoService;
    mensagem: string = '';

    constructor(service: FotoService) {
        this.service = service
        this.service
            .lista()
            .subscribe(fotos => {
                this.fotos = fotos;
            }, erro => console.log(erro))
    }

    remove(foto){
        
        if(confirm('Confirma exclusão da foto?')){

            this.service.remove(foto)
            .subscribe(() => {
                let novasFotos = this.fotos.slice(0);
                let indice = novasFotos.indexOf(foto);
                novasFotos.splice(indice, 1);
                this.fotos = novasFotos;
                this.mensagem = 'Foto removida com sucesso'
            }, 
                erro => {
                    console.log(erro);
                    this.mensagem = 'Não foi possível remover a imagem';
                }
            );
        }
    }
} 