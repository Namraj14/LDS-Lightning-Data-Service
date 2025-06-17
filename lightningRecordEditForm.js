import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class LightningRecordEditForm extends LightningElement {
 
    @api recordId;

    handleSuccess(event) {  //add event else it will throw error
        const updatedRecordId = event.detail.id; //The event.detail.id is safe and reliable in the success handler — don’t forget to wrap it safely. 
        console.log('Record saved with ID:', updatedRecordId);

        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: 'Contact updated successfully!',
                variant: 'success'
            })
        );
    }
    handleError(event) {
    const message = event.detail?.message || 'An unknown error occurred';
    this.dispatchEvent(
        new ShowToastEvent({
            title: 'Error',
            message: message,
            variant: 'error'
        })
    );

    // Log full event for debugging
    console.error('handleError:', JSON.stringify(event));
}

    handleCancel() {
        const fields = this.template.querySelectorAll('lightning-input-field');
        fields.forEach(field => field.reset());
    }
}