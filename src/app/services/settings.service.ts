import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public linkTheme = document.querySelector('#theme');

  constructor() {
    const _theme = localStorage.getItem( '__theme' ) || './assets/css/colors/default-dark.css';
    this.linkTheme?.setAttribute('href', _theme);
  }

  changeTheme( theme: string) {
    const url = `./assets/css/colors/${ theme }.css`;
    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem( '__theme', url );
    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    const links = document.querySelectorAll( '.selector' );

    links.forEach( element => {
      element.classList.remove( 'working' );
      const btnTheme = element.getAttribute( 'data-theme' );
      const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`;
      const currentTheme = this.linkTheme?.getAttribute( 'href' );
      if( currentTheme === btnThemeUrl) {
        element.classList.add( 'working' );
      }
    });
  }
}
