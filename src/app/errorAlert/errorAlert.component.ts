import { Component } from '@angular/core';

@Component({
  selector: '.error-alert',
  templateUrl: './errorAlert.component.html',
  styles: [`p {
              padding: 20px;
              background-color: mistyrose;
              border: 1px solid red;
              color: red;
            }
          `]
})
export class ErrorAlert {
}
