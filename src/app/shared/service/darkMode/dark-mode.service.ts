import { Injectable, signal } from '@angular/core';
import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  public darkModeSignal = signal<string>('light');

  constructor(private readonly localStorage: LocalStorageService) {}

  updateDarkMode() {
    this.darkModeSignal.update((value) => (value === 'dark' ? 'light' : 'dark'));
    this.localStorage.set('theme', this.darkModeSignal());
  }

  darkModeIsActive() {
    const localStorageTheme = this.localStorage.get('theme');

    if (localStorageTheme && localStorageTheme === 'dark') {
      this.updateDarkMode();
    }
  }
}
