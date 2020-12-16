import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: '收件箱',
      url: '/folder/Inbox',
      icon: 'mail'
    },
    {
      title: '发件箱',
      url: '/folder/Outbox',
      icon: 'paper-plane'
    },
    {
      title: '兴趣',
      url: '/folder/Favorites',
      icon: 'heart'
    },
    {
      title: '存档',
      url: '/folder/Archived',
      icon: 'archive'
    },
    {
      title: '回收站',
      url: '/folder/Trash',
      icon: 'trash'
    },
    {
      title: '垃圾邮件',
      url: '/folder/Spam',
      icon: 'warning'
    }
  ];
  public labels = ['家人', '朋友', '笔记', '工作', '旅行', '提醒'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    console.log(path);

    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
