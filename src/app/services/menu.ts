import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private menuItems: MenuItem[] = [
    { id: 1, name: 'Конфигурация 1', price: 905, category: 'Облачные серверы', selected: true },
    { id: 2, name: 'Конфигурация 2', price: 950, category: 'Облачные серверы', selected: false },
    {
      id: 3,
      name: 'Балансировщик нагрузки',
      price: 1300,
      category: 'Дополнительные услуги',
      selected: false,
    },
    {
      id: 4,
      name: 'Резервное копирование',
      price: 410,
      category: 'Дополнительные услуги',
      selected: false,
    },
    {
      id: 5,
      name: 'Интернет-трафик',
      price: 850,
      category: 'Дополнительные услуги',
      selected: false,
    },
    {
      id: 6,
      name: 'Хранение образов',
      price: 750,
      category: 'Дополнительные услуги',
      selected: false,
    },
    { id: 7, name: 'Конфигурация 3', price: 905, category: 'Облачные серверы', selected: false },
    { id: 8, name: 'Конфигурация 4', price: 950, category: 'Облачные серверы', selected: false }
  ];

  getMenuItems(): MenuItem[] {
    return this.menuItems;
  }
}
