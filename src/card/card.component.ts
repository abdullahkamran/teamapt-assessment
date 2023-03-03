import { Component, Input } from '@angular/core';
import { Product } from 'src/types/Product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() product?: Product;
  isFavorite = false;

  favoriteClicked(event: Event) {
    event.stopPropagation();
    event.preventDefault();
    this.isFavorite = !this.isFavorite;
  }
}
