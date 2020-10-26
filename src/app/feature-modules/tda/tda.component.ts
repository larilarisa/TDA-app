import { EditTdaPopUpComponent } from './../../shared/components/edit-tda-pop-up/edit-tda-pop-up.component';
import { TdaService } from './services/tda.service';
import { Tda } from './../../core/data/models/app.models';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tda',
  templateUrl: './tda.component.html',
  styleUrls: ['./tda.component.scss']
})
export class TdaComponent implements OnInit {

  tda: Tda;

  constructor(private tdaService: TdaService, public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.getTdaData();
  }

  getTdaData(): void {
    this.tdaService.getTda().subscribe((tda: Tda) => {
      this.tda = tda;
    })
  }

  openEditDialog(tdaDataToEdit: any[], tdaLabelnput: string, valueToEdit: string): void {
const dialogRef = this.dialog.open(EditTdaPopUpComponent, {
      width: '600px',
      data: { tdaDataToEdit: tdaDataToEdit, tdaLabelnput: tdaLabelnput, valueToEdit: valueToEdit}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
    }
    )
  }

}
