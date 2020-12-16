import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-slidemenu',
  templateUrl: './slidemenu.page.html',
  styleUrls: ['./slidemenu.page.scss'],
})
export class SlidemenuPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }
  openSlideMenu() {
    this.menu.open('first') // 传入menuId
    // 小技巧，如果忘记menu有什么方法，可以ctrl + 单击查看源代码，与官网是一样的
  }
  closeSlideMenu() {
    this.menu.close('first')
  }
}
