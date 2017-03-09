import { Component, EventEmitter, Output } from '@angular/core';
import { ElementRef } from '@angular/core';
import { OnInit } from '@angular/core';
declare var jQuery:any;

//http://jqueryui.com/datepicker/#date-formats
@Component({
    selector:'my-jquery',
    template: `
        <div>
        <button>Click me</button>
        <div class="form-group">
            <label>Date of birth</label>
            <input 
                id="start_date" 
                name="start_date"
                type="text" 
                class="form-control" 
                placeholder="yyyy-mm-dd"
                readonly="readonly"
                style="cursor: pointer;background: #fff;border-bottom: 2px solid #d8d8d8;"
            >
            <p class="message-input error-input">
            {{!startDateValue?'Required':''}}
            </p>
        </div>
        </div>
    `
})

export class jQueryComponent{

    @Output() startDateChanged = new EventEmitter<string>();

    constructor(private _elRef:ElementRef){

    }
    public startDateValue  : string;
    ngOnInit():any{
        jQuery('#start_date').datepicker({
            autoclose: true,
            todayHighlight: true,
            endDate:new Date(),
            dateFormat: 'yy-mm-dd'
        }).change(()=>{
            this.startDateValue=jQuery('#start_date').val();
            this.startDateChanged.emit(this.startDateValue);
        });

        jQuery(this._elRef.nativeElement).find('button').on('click',function(){
            location.href='http://localhost:8080/csContactLog.do?method=getList'+'&date='+jQuery('#start_date').val().replace(/[^0-9]/g, "");
        });
    }
}