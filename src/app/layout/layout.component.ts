import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmptyComponent } from './components/empty/empty.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ActivatedRoute } from '@angular/router';
import { Layout } from './layout.type';
import { DarkModeService } from '../shared/service/darkMode/dark-mode.service';

@Component({
  selector: 'activity-layout',
  standalone: true,
  imports: [SidebarComponent, EmptyComponent, CommonModule],
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {
  public layout!: Layout;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    public darkModeService: DarkModeService
  ) {}

  ngOnInit(): void {
    this.darkModeService.darkModeIsActive();

    this.activatedRoute.data.subscribe((data: any) => {
      if (data.layout) {
        this.layout = data.layout;
      }
    });
  }
}
