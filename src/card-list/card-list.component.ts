import { Component, Input } from '@angular/core';
import { Product } from 'src/types/Product';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
  @Input() title = '';
  @Input() products: Product[] = [];
}
