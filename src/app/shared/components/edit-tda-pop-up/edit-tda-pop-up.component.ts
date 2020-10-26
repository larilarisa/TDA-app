import { STATUSES } from './../../../core/data/constants/app.constants';
import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-tda-pop-up',
  templateUrl: './edit-tda-pop-up.component.html',
  styleUrls: ['./edit-tda-pop-up.component.scss']
})
export class EditTdaPopUpComponent implements OnInit {

  genericForm: FormGroup;
  statuses = STATUSES;

  constructor( 
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditTdaPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
    this.buildGenericForm();
  }

    buildGenericForm(): void {
      this.genericForm = this.formBuilder.group({
        dates: this.getDatesFormArray()
        });
    }

    getDatesFormArray(): FormArray {
      const genericFormArray = new FormArray([]);
      this.data.tdaDataToEdit.forEach(dataToEdit => {
        genericFormArray.push(this.buildDatesFormGroup(dataToEdit.date,dataToEdit[this.data.valueToEdit], true))
    })
    return genericFormArray;
    }

    buildDatesFormGroup(date: Date, inputValue: any, isDisabled: boolean): FormGroup {
      return this.formBuilder.group({
        date: {value: date, disabled: isDisabled},
        value: {value: inputValue, disabled: isDisabled},
      })
    }

    addNewDate(): void {
      (this.genericForm.get('dates') as FormArray).push(this.buildDatesFormGroup(null, null, false))
    }

    deleteDate(index: number): void {
       (this.genericForm.get('dates') as FormArray).removeAt(index);
    }

    closeDialog(): void {
      this.dialogRef.close();
    }
}
