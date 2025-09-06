import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemLista } from './itemlista'

@Component({
  selector: 'app-lista-compras',
  imports: [FormsModule],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.scss'
})
export class ListaComprasComponent {

  item:string='';
  lista: ItemLista[] = [];

  adicionarItem(){
    let itenLista = new ItemLista();
    itenLista.nome = this.item;
    itenLista.id = this.lista.length + 1;

    this.lista.push(itenLista);

    console.log("Item recebido: ", this.item)
    this.item = '';

    console.table(this.lista)
  };


}
