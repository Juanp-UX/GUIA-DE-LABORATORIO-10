import { Routes } from '@angular/router';
import { SolicitudesPageComponent } from './pages/solicitudes/solicitudes';
import { HomePageComponent } from './pages/home/home';
import { CategoriasPageComponent } from './pages/categorias/categorias';
import { ProductosPageComponent } from './pages/productos/productos';
import { MedicosPageComponent } from './pages/medicos/medicos';


export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'categorias', component: CategoriasPageComponent },
  { path: 'productos', component: ProductosPageComponent },
  { path: 'solicitudes', component: SolicitudesPageComponent },
  { path: 'medicos', component: MedicosPageComponent },
  { path: '**', redirectTo: '' },
];
