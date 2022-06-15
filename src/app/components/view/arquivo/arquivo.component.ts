import { Component, OnInit } from '@angular/core';
import { LimiteService } from '../../service/limite.service';
import { InformativoArquivoComponent } from '../dialogs/informativo-arquivo/informativo-arquivo.component'
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-arquivo',
  templateUrl: './arquivo.component.html',
  styleUrls: ['./arquivo.component.css']
})
export class ArquivoComponent implements OnInit {

  constructor(private limiteService : LimiteService, 
              public dialog: MatDialog) { }

  fileToUpload: File = null;
  resultado: any = null;
  error: string = null;
  carregando : boolean =false; 

  ngOnInit(): void {
  }
  
  openDialog() {
    this.dialog.open(InformativoArquivoComponent);
  }


  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFile() {
    this.resultado = null;
    this.error = null;
    this.carregando = true;

    if (this.fileToUpload === null) {
        alert('Selecione um arquivo')
        this.carregando = false;
    } else {
      this.limiteService.postFile(this.fileToUpload).subscribe(resposta => {
        console.log(resposta)
        this.resultado = resposta
        this.carregando = false;
        }, error => {
          this.carregando = false;
          console.log(error);
          this.error =  'ERRO ' + error.error.message  + ' - ' +  error.message
        });
    }
  }


downloadFile(){
  let link = document.createElement("a");
  link.download = "ArquivoModelo.csv";
  link.href = "assets/file/ArquivoModelo.csv";
  link.click();
}

 

}
