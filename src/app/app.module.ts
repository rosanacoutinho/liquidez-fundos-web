import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { DataTablesModule } from 'angular-datatables';

/** Material  */
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter/';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card'; 
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox'; 
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';


import { CadastroComponent } from './components/view/cadastro/cadastro.component'; 
import { MatTabsModule } from '@angular/material/tabs';
import { FormularioComponent } from './components/view/formulario/formulario.component';
import { ArquivoComponent } from './components/view/arquivo/arquivo.component';

import { SumulaComponent } from './components/view/sumula/sumula.component';
import { InformativoFormularioComponent } from './components/view/dialogs/informativo-formulario/informativo-formulario.component';
import { InformativoArquivoComponent } from './components/view/dialogs/informativo-arquivo/informativo-arquivo.component';
import { OrigemplComponent } from './components/view/origempl/origempl.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CdkAccordionModule } from '@angular/cdk/accordion';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CadastroComponent,
    FormularioComponent,
    ArquivoComponent,
    SumulaComponent,
    InformativoFormularioComponent,
    InformativoArquivoComponent,
    OrigemplComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule ,
    MatSelectModule ,
    MatGridListModule,
    MatDialogModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatExpansionModule,
    DataTablesModule,
    HttpClientModule,
    MatTabsModule,
    CdkAccordionModule,
    MatProgressSpinnerModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
