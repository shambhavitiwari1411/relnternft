import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Desktop61 } from './desktop61.component'

const routes = [
  {
    path: '',
    component: Desktop61,
  },
]

@NgModule({
  declarations: [Desktop61],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Desktop61],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Desktop61Module {}
