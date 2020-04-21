import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';


const MaterialModules = [
  MatToolbarModule, MatSidenavModule,
  MatButtonModule, MatIconModule, MatSliderModule, MatSlideToggleModule, FormsModule,
  MatCardModule, MatInputModule, MatBadgeModule, MatProgressSpinnerModule, MatTableModule,
  MatFormFieldModule, MatListModule, MatMenuModule, MatCheckboxModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModules
  ],
  exports: [
    MaterialModules
  ]
})
export class MaterialModule { }
