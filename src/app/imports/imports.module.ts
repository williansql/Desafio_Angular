import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({

  exports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatGridListModule
  ]
})
export class ImportsModule { }
