import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Principal',
      submenu: [
        { titulo: 'Dashboard', url: '/' },
        { titulo: 'ProgressBar', url: 'progress' },
        { titulo: 'Chart', url: 'chart1' },
        { titulo: 'Promises', url: 'promises' },
        { titulo: 'RxJS', url: 'rxjs' }
      ]
    }
  ];

  constructor() { }
}
