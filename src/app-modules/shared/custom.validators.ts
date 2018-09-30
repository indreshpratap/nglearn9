import { FormControl } from "@angular/forms";

function hasValue(value) {
    return value !== null || value;
}

export class CustomValidators {
    static stringOnly(control: FormControl) {
        let val = control.value;
        if (hasValue(val)) {
            if (/^[a-zA-Z ]+$/.test(val)) {
                // Test pass so no error
                return null;
            } else {
                // ! Test failed so return key for this validator 
                // ! which value will be true
                return { stringOnly: true }
            }
        } else {
            // Let it pass because no value to check
            return null;
        }
    }
}

