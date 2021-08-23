import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { InitComponent } from './views/init/init.component';
import { BoardComponent } from './views/board/board.component';
import { GameComponent } from './views/game/game.component';
import { CanvasService } from './canvas.service';

@NgModule({
  declarations: [
    AppComponent,
    InitComponent,
    BoardComponent,
    GameComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule,
  ],
  providers: [CanvasService],
  bootstrap: [AppComponent]
})
export class AppModule { }