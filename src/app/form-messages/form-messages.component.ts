import {Component, OnInit, Input} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Component({
    selector: 'bm-form-messages',
    templateUrl: './form-messages.component.html',
    styleUrls: ['./form-messages.component.css']
})
export class FormMessagesComponent implements OnInit {

    @Input() control: AbstractControl; // Elementreferenz
    @Input() controlName: string;

    private allMessages = {
        title: {
            required: 'Ein Buchtitel muss angegeben werden.'
        },
        isbn: {
            required: 'Es muss eine ISBN angegeben werden.',
            minlength: 'Die ISBN muss mindestens 10 Zeichen haben.',
            maxlength: 'Die ISBN darf höchstens 13 Zeichen haben.'
        },
        published: {
            required: 'Es muss ein Erscheinungsdatum angegeben werden.'
        },
        authors: {
            required: 'Es muss ein Autor angegeben werden.'
        }
    };

    constructor() {
    }

    ngOnInit() {
        console.log('INIT')
    }

    errorsForControl(): string[] {
        const messages = this.allMessages[this.controlName];
        console.log(this.controlName);

        if (
            !this.control ||
            !this.control.errors ||
            !messages ||
            !this.control.dirty
        ) {
            return null;
        }
        Object.keys(this.control.errors).map(err => console.log(messages[err]));
        return Object.keys(this.control.errors) // liefert ein Array, dessen Elemente Strings sind, welche die aufzählbaren Eigenschaften des Objekts respräsentieren.
            .map(err => messages[err]); // The map() method calls the provided function once for each element in an array, in order.
    }

}
