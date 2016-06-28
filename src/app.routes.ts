import {provideRouter, RouterConfig} from '@angular/router';
import { BasicComponent } from './component/Demo/Basic';
import { BasicComponent2 } from './component/Demo2/Basic';

export const routes:RouterConfig = [
    {path: '', component: BasicComponent},
    {path: 'admin', component: BasicComponent2},
    {path: 'user', component: BasicComponent},
    {path: 'tag', component: BasicComponent2},
    {path: 'changeLog', component: BasicComponent},
    {path: 'goodBlog', component: BasicComponent2},
    {path: 'goodPlugin', component: BasicComponent},
    {path: 'friendLink', component: BasicComponent2},
    {path: 'systemSet', component: BasicComponent},
];

export const APP_ROUTER_PROVIDERS:any = [
    provideRouter(routes)
];
