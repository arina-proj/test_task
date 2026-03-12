import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem } from '../models/menu-item';
import { MenuService } from '../services/menu';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './menu.html',
  styleUrls: ['./menu.css'],
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [];
  selectedCategory: string = 'Облачные серверы';
  categories: string[] = ['Облачные серверы', 'Дополнительные услуги'];

  constructor(private menuService: MenuService) {}

  get selectedCount(): number {
    return this.menuItems.filter((item) => item.selected).length;
  }

  get totalPrice(): number {
    return this.menuItems
      .filter((item) => item.selected)
      .reduce((sum, item) => sum + item.price, 0);
  }

  get filteredItems(): MenuItem[] {
    if (this.selectedCategory === 'Все') {
      return this.menuItems;
    }
    return this.menuItems.filter(item => item.category === this.selectedCategory);
  }


  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  ngOnInit(): void {
    this.menuItems = this.menuService.getMenuItems();
  }

  clearSelection(): void {
    this.menuItems.forEach((item) => (item.selected = false));
  }
}
