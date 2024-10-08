import { ChangeDetectionStrategy, Component, Inject, inject, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { Stock } from '../models/stock';
import { InvestService } from '../service/invest.service';
import { Sell } from '../models/sell';
import { Investment } from '../models/investment';
import { Buy } from '../models/buy';
import {MatSnackBar} from '@angular/material/snack-bar';

export interface ModalActionData {
  ativoNome: string;
  idAtivo: number;
  acao: 'comprar' | 'vender';
  preco: number;
  investiment: Investment[] | null
}

@Component({
  selector: 'app-modal-action',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './modal-action.component.html',
  styleUrl: './modal-action.component.scss'
})
export class ModalActionComponent {
  quantidade: number = 1; // Quantidade inicial
  valorTotal: number = 0;
  sell: Sell = new Sell(0, 0);
  buy: Buy = new Buy(0,0);


  constructor(
    public dialogRef: MatDialogRef<ModalActionComponent>, @Inject(MatSnackBar) private matSnackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: ModalActionData, private investService: InvestService
  ) {
    this.calcularValorTotal();
  }

  openSnackBar(message: string, action: string): void {
    this.matSnackBar.open(message, action, {
      duration: 2800
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  realizarAcao(): void {
    console.log(`${this.data.acao} ${this.quantidade} do ativo ${this.data.ativoNome}`);
    if (this.data.acao === "vender") {
      this.vender();
    }

    if (this.data.acao === "comprar") {
      this.comprar();
    }

  }

  vender(): void {
    if (this.data.investiment) {
      this.sell.investment_id = this.data.investiment[0].id;
      this.sell.quantity = this.quantidade;
      this.investService.venderInvestimento(this.sell).subscribe(
      { next: (inv) => {
        this.dialogRef.close({ investiment: inv });
        this.openSnackBar("Venda realizada com sucesso", "Fechar");
      },
      error: (err) => {
        this.openSnackBar(`Erro ao realizar a venda: ${err.error.message}`, "Fechar");
      }
      });
    }
  }

  comprar(): void {

    this.buy.quantity = this.quantidade;
    this.buy.stock_id = this.data.idAtivo;
    this.investService.comprarInvestimento(this.buy).subscribe({
      next: (response) => {
        this.dialogRef.close();
        this.openSnackBar("Compra realizada com sucesso", "Fechar");
      },
      error: (err) => {
        this.openSnackBar(`Falha a realizar a compra: ${err.error.message}`, "Fechar");
      }
    });
  }

  calcularValorTotal(): void {
    this.valorTotal = this.quantidade * this.data.preco;
  }
}
