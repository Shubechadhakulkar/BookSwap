import { Component, OnInit,Input} from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-pricing-form',
  templateUrl: './pricing-form.component.html',
  styleUrls: ['./pricing-form.component.scss']
})
export class PricingFormComponent implements OnInit {
  @Input() form!: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
