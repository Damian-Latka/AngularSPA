import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ClockComponent } from './clock/clock.component';
import { TimerComponent } from './timer/timer.component';
import { CountdownComponent } from './countdown/countdown.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clock', component: ClockComponent },
  { path: 'timer', component: TimerComponent },
  { path: 'countdown', component: CountdownComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
