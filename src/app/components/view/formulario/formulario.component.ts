import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LimiteService } from '../../service/limite.service';
import { Faixa } from '../../model/faixa.model';
import { Registro } from '../../model/registro.model';
import { FundoService } from '../../service/fundo.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { InformativoFormularioComponent } from '../dialogs/informativo-formulario/informativo-formulario.component';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Fundo } from '../../model/fundo.model';
import { Subject } from 'rxjs';
import { Limite } from '../../model/limite.model';
import { Alert } from 'selenium-webdriver';
import { Indexador } from '../../model/indexador.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  selectedIndex: number | undefined;

  constructor(
    private limiteService: LimiteService,
    public dialog: MatDialog,
    public FundoService: FundoService,
    private formBuilder: FormBuilder
  ) {}

  openDialog() {
    this.dialog.open(InformativoFormularioComponent);
  }

  fundo: Fundo;
  classificacoes: any[] = null;
  tipos: any[] = null;
  
  cenarios: any[] = null;
  eventos: any[] = null;
  codigoDrive: any = null;
  evento: any = null;
  percentuaisConfianca: any[] = null;
  percentualConfianca: any = null;
  cenario: any = null;
  indexador: any = null;
  tipo: any = null;
  classificacao: any = null;
  valorLimite: any = null;
  limiteInferior: any = null;
  limiteSuperior: any = null;
  periodo: any = null;
  sumula: any = null;
  dataInicio: any = null;
  dataFim: any = null;
  dataEncerramento: any = null;
  acrescimo: any = null;
  percentual: any = null;
  faixas: Faixa[] = null;
  funds: any[] = null;
  Overviews: any = null;
  verify: boolean = false;
  value: any[] = null;
  loadding: boolean = false;
  a: boolean = false;
  verifyTable: Array<boolean> = [];
  type: any;
  novoLimite: boolean = false;
  limiteDiferentes: any;
  selectedValue: string;
  deleteId: any;
  nomeLimite: any;
  limites: Limite[];

  indexadores:Indexador[];

  limiteForm: FormGroup;
  isSubmitted = false;

  ngOnInit(): void {
  
    

    this.limiteForm = this.formBuilder.group({
      sumula: ['', Validators.required],
      fimPrevisto: ['', Validators.required],
      valor: [''],
      valorinferior: [''],
      valorsuperior: [''],
      datainicio: ['', Validators.required],
      acrecimo: [''],
      acrecimoLimite: [''],
      periodo: [''],
      idindexador:[''],
    });
  }

  @ViewChild('myModal', { static: false }) myModal: ElementRef;
  elm: HTMLElement;

  @ViewChild('myDelete', { static: false }) myDelete: ElementRef;
  elmDelete: HTMLElement;

  @ViewChild('cadastroLimite', { static: false }) cadastroLimite: ElementRef;
  elmLimite: HTMLElement;

  ngAfterViewInit(): void {
    this.elm = this.myModal.nativeElement as HTMLElement;
    this.elmDelete = this.myDelete.nativeElement as HTMLElement;
    this.elmLimite = this.cadastroLimite.nativeElement as HTMLElement;
  }

  get formControls() {
    return this.limiteForm.controls;
  }

  cadastrarNovoLimite() {
    this.isSubmitted = true;
    if (this.limiteForm.invalid) {
      return;
    }
    let limite = {
      id: null,
      tipo: this.nomeLimite,
      situacao: null,
      idFundo: null,
      sumula: {
        idLimite: null,
        dataInicio: this.limiteForm.value.dataInicio,
        dataFim: null,
        numero: this.limiteForm.value.numero,
        valorLimite: this.limiteForm.value.valorLimite,
        valorLimiteInferior: this.limiteForm.value.valorLimiteInferior,
        acrescimoLimite: this.limiteForm.value.acrescimoLimite,
        dataFimPrevisto: this.limiteForm.value.dataFimPrevisto,
        valorLimiteSuperior: this.limiteForm.value.valorLimiteSuperior,
      },
      idIndexador: null,
      periodo: null,
      acrescimo: this.limiteForm.value.acrecimo,
      percentual: null,
      faixas: null,
    };

    let lim = limite;
    console.log(lim)

    if (
      this.nomeLimite == 'VAR_ABSOLUTO' ||
      this.nomeLimite == 'ESTRESSE' ||
      this.nomeLimite == 'ALAVANCAGEM' ||
      this.nomeLimite == 'DURATION'
    ) {

    } else if (
      this.nomeLimite == 'VAR_PARAMETRICO' ||
      this.nomeLimite == 'PERDA_MAXIMA'
    ) {
    } else if (
      this.nomeLimite == 'DURATION_DIFERENCIAL' ||
      this.nomeLimite == 'VAR_DIFERENCIAL' ||
      this.nomeLimite == 'ORCAMENTO_VAR' ||
      this.nomeLimite == 'VAR_BENCHMARK' ||
      this.nomeLimite == 'VAR_DINAMICO'
    ) {
    } else if (this.nomeLimite == 'TRACKING_ERROR') {
    } else if (
      this.nomeLimite == 'DESCASAMENTO_BENCHMARK' ||
      this.nomeLimite == 'DESCASAMENTO_BENCHMARK_PERCENTUAL_ACAO'
    ) {
    } else {
      alert('Tipo não encontrado!');
    }
    console.log(this.limiteForm.value);
  }

  abrirCadastroLimite(limite): void {
    this.nomeLimite = limite;
    console.log(limite);
    console.log(this.codigoDrive);

    this.limiteService.getIndexador().subscribe({
      next: (response) => {
        this.indexadores = response
      },
      error: (error) => {

        console.log(error);
      },
    })

    this.elmLimite.classList.add('show');
    this.elmLimite.style.width = '100vw';
  }

  fecharCadastroLimite(): void {
    this.elmLimite.classList.remove('show');
    setTimeout(() => {
      this.elmLimite.style.width = '0';
    }, 75);
  }

  close(): void {
    this.elm.classList.remove('show');
    setTimeout(() => {
      this.elm.style.width = '0';
    }, 75);
  }

  closeSumula(): void {
    this.elmDelete.classList.remove('show');
    setTimeout(() => {
      this.elmDelete.style.width = '0';
    }, 75);
  }
  open(tipo): void {
    console.log(tipo);
    // this.elm.classList.add('show');
    // this.elm.style.width = '100vw';
  }

  deleteSumula(type): void {
    this.elmDelete.classList.add('show');
    this.elmDelete.style.width = '100vw';
    this.type = type.id;
  }

  expansionPanelIndex(index: number) {
    // Step 2
    this.selectedIndex = index;
  }

  salvarLimite() {
    var registro: Registro = new Registro();

    registro.drive = this.codigoDrive;
    registro.idFundo = this.fundo[0][0];
    registro.idEvento = this.evento == null ? null : this.evento[0];
    registro.idCenario = this.cenario == null ? null : this.cenario[0];
    registro.tipo = this.tipo;
    registro.classificacao = this.classificacao;
    registro.percentualConfianca = this.percentualConfianca;
    registro.dataInicio = this.dataInicio;
    registro.dataFim = this.dataFim;
    registro.sumula = this.sumula;
    registro.dataEncerramento = this.dataEncerramento;
    registro.idIndexador = this.indexador == null ? null : this.indexador[0];
    registro.valorLimite = this.valorLimite;
    registro.limiteInferior = this.limiteInferior;
    registro.limiteSuperior = this.limiteSuperior;
    registro.periodo = this.periodo;
    registro.acrescimo = this.acrescimo;
    registro.percentual = this.percentual;
    var faixas: Faixa[] = this.faixas;
    registro.faixas = faixas;

    registro.tipoCadastro =
      this.dataEncerramento == null ? 'implantacao' : 'encerramento';

    console.log(registro);

    this.limiteService.salvarLimite(registro).subscribe(
      (resposta) => {
        console.log(resposta);
        if (resposta == 1) {
          alert('Limite alterado');
        }
      },
      (error) => {
        console.log(error);
        alert(error.message);
      }
    );
  }

  consultarFundo() {
    this.loadding = true;

    this.FundoService.getFunds(this.codigoDrive).subscribe({
      next: (response) => {
        // console.log(response);

        if (response != null) {
          this.loadding = false;
          this.verify = true;
          this.value = response;
          this.fundo = response;
          console.log(this.fundo);
          this.limites = response.limites;
          this.Overviews = response.limites;
          this.novoLimite = true;

          this.fundo.limites.forEach((element, count) => {
            this.FundoService.getOverviews(element.id).subscribe((response) => {
              this.limites[count]['values'] = response;
              console.log(this.limites[count]);
            });
          });

          console.log(this.limites);

          this.limites.forEach((val, index) => {
            this.limites[index]['loading'] = false;
          });
        } else {
          this.loadding = false;
          this.limites = [];
          this.verify = false;
          this.novoLimite = false;
          alert('Fundo não encontrado');
        }
      },
      error: (error) => {
        this.loadding = false;
        alert('erro de conexão');
        console.log(error);
      },
      complete: () => {},
    });
 
  }

  getOverviews(id) {
    this.verifyTable = [];
    this.FundoService.getOverviews(id).subscribe((response) => {
      let answer = response;
      let verifyacrescimoLimite = answer.filter(
        (e) => e.acrescimoLimite != null
      );
      verifyacrescimoLimite == 0
        ? this.verifyTable.push(false)
        : this.verifyTable.push(true);

      let DataFim = answer.filter((e) => e.dataFim != null);
      DataFim == 0 ? this.verifyTable.push(false) : this.verifyTable.push(true);

      let valorLimiteInferior = answer.filter(
        (e) => e.valorLimiteInferior != null
      );
      valorLimiteInferior == 0
        ? this.verifyTable.push(false)
        : this.verifyTable.push(true);

      let valorLimiteSuperior = answer.filter(
        (e) => e.valorLimiteSuperior != null
      );
      valorLimiteSuperior == 0
        ? this.verifyTable.push(false)
        : this.verifyTable.push(true);

      console.log(this.verifyTable);
      console.log(response);
    });
  }

  

  criaVariavelFaixasParaLimitesDescasamento() {
    this.faixas = new Array(6);
    this.faixas[0] = { faixa: null, percentualFaixa: null };
    this.faixas[1] = { faixa: null, percentualFaixa: null };
    this.faixas[2] = { faixa: null, percentualFaixa: null };
    this.faixas[3] = { faixa: null, percentualFaixa: null };
    this.faixas[4] = { faixa: null, percentualFaixa: null };
    this.faixas[5] = { faixa: null, percentualFaixa: null };
  }

 






  
  encerraLimite() {
    this.FundoService.deleteOverviews(this.type).subscribe((response) => {
      console.log(response);
      this.consultarFundo();
    });
  }

  getTiposSumulas() {
    this.FundoService.getLimite().subscribe({
      next: (response) => {
        var values = [];
        this.limites.forEach((element) => {
          values.push(element.tipo);
        });

        this.limiteDiferentes = response.filter((x) => !values.includes(x));

        console.log(this.limiteDiferentes);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {},
    });
  }
}
