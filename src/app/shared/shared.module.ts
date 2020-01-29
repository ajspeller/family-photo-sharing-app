import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { MarginIconComponent } from './margin-icon/margin-icon.component';

@NgModule({
  declarations: [ToolbarComponent, MarginIconComponent],
  imports: [CommonModule, MatButtonModule, MatToolbarModule, MatIconModule],
  exports: [ToolbarComponent, MarginIconComponent]
})
export class SharedModule {}
