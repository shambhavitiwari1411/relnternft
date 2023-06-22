import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component'
import { FormsModule } from '@angular/forms'

const routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/desktop3/desktop3.module').then((m) => m.Desktop3Module),
  },
  {
    path: 'desktop6',
    loadChildren: () =>
      import('./pages/desktop6/desktop6.module').then((m) => m.Desktop6Module),
  },
  {
    path: 'desktop61',
    loadChildren: () =>
      import('./pages/desktop61/desktop61.module').then(
        (m) => m.Desktop61Module
      ),
  },
]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes), ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
