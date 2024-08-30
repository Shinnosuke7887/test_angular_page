import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
  imports: [
    CommonModule,
    NzMenuModule,
    NzIconModule,
    NzToolTipModule
  ],
  declarations: [],
  exports:[
    NzMenuModule,
    NzIconModule,
    NzToolTipModule
  ]
})
export class ShareModule { }
