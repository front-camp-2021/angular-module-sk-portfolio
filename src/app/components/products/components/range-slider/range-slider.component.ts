import { Component, OnInit, Input } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { FiltersService } from '../../core/filters/filters.service';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.scss']
})
export class RangeSliderComponent implements OnInit {
  @Input() title: any
  @Input() value: any
  @Input() highValue: any
  @Input() minValue: number = 0
  @Input() maxValue: number = 100
  @Input() step: number = 1
  sliderStatus = false
  options: Options = {
    floor: this.minValue,
    ceil: this.maxValue,
    step: this.step,
    minRange: 1,
    noSwitching:false 
  };


  constructor(private FiltersService: FiltersService) { }

  ngOnInit(): void {
    
    this.options = {
      floor: this.minValue,
      ceil: this.maxValue,
      step: this.step
    }
    this.setSliderValues({value:this.value, highValue:this.highValue},  this.title)
  }
  setSliderValues(e:any, title:string):void{
    this.FiltersService.setSlidersValue(e, title)
  }             
}
