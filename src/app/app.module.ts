import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartModule, ButtonModule, MenuModule} from 'primeng/primeng';
import { routing, appRoutingProviders } from 'app/app.routing';
import { StackedBarChartComponent } from 'app/stacked-bar-chart/stacked-bar-chart.component';
import { DoughNutChartComponent } from 'app/dough-nut-chart/dough-nut-chart.component';
import { LineChartComponent } from 'app/line-chart/line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    StackedBarChartComponent,
    DoughNutChartComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ChartModule,
    ButtonModule,
    MenuModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
