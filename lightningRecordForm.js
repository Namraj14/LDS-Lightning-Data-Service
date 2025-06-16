import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class LightningRecordForm extends LightningElement {

    recordId;

    handleError() {
        this.dispatchEvent(new ShowToastEvent({
            title: "Error",
            message: "Something went wrong while saving.",
            variant: "error"
        }));
   }

    handleSuccess(){
        const toast = new ShowToastEvent({
            title: 'Success',
            message: 'Account Created',
            variant: 'success',
        });
        this.dispatchEvent(toast);
    }
}