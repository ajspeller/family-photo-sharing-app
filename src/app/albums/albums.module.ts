import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { AlbumsListComponent } from './albums-list/albums-list.component';

@NgModule({
  declarations: [AlbumsListComponent],
  imports: [CommonModule]
})
export class AlbumsModule {}
