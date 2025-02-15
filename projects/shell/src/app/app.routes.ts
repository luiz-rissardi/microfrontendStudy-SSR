import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"teste",
        loadComponent:()=> loadRemoteModule("remote","./Component").then(m => m.AppComponent)
    },
    {
        path:"teste2",
        loadComponent:()=> loadRemoteModule("remote2","./Component").then(m => m.AppComponent)
    }
];
