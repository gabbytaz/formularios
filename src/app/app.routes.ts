import { Routes } from '@angular/router';
import { FormularioNormal } from './formulario-normal/formulario-normal';
import { FormularioReactivo } from './formulario-reactivo/formulario-reactivo';

export const routes: Routes = [
{
    path:"",
    component:FormularioNormal,
    title:'Form Normal'
},
{
    path:"reactivo",
    component:FormularioReactivo,
    title:'Form Reactivo'
},

];
