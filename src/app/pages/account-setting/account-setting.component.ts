import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styleUrl: './account-setting.component.css'
})
export class AccountSettingComponent implements OnInit {

  constructor( private settingsService: SettingsService){}

  ngOnInit() {
    this.settingsService.checkCurrentTheme();
  }

  changeTheme( theme: string) {
    this.settingsService.changeTheme( theme );
  }
}
