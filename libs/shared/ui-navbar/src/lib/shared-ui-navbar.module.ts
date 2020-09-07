import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NavMenuComponent } from './navbar/nav-menu/nav-menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule, RouterModule],
  declarations: [NavbarComponent, NavMenuComponent],
  exports: [NavbarComponent]
})
export class SharedUiNavbarModule {}
