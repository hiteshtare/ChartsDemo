import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StackedBarChartComponent } from 'app/stacked-bar-chart/stacked-bar-chart.component';
import { DoughNutChartComponent } from 'app/dough-nut-chart/dough-nut-chart.component';
import { LineChartComponent } from 'app/line-chart/line-chart.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'stackedbarchart', pathMatch: 'full' },
    { path: 'stackedbarchart', component: StackedBarChartComponent },
    { path: 'doughnutchart', component: DoughNutChartComponent },
    { path: 'linechart', component: LineChartComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
