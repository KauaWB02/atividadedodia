import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DarkModeService } from '../../../shared/service/darkMode/dark-mode.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'activity-empty',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './empty.component.html',
})
export class EmptyComponent implements OnInit {
  constructor(private readonly darkModeService: DarkModeService) {}

  ngOnInit(): void {
    console.log('Testando');
  }

  toggleDarkMode() {
    this.darkModeService.updateDarkMode();
  }
}
