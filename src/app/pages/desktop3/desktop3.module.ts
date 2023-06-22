import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Desktop3 } from './desktop3.component'
import { FormsModule } from '@angular/forms'

const routes = [
  {
    path: 'd',
    component: Desktop3,
  },
]

@NgModule({
  declarations: [Desktop3],
  imports: [CommonModule, ComponentsModule, FormsModule, RouterModule.forChild(routes)],
  exports: [Desktop3],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Desktop3Module {}
