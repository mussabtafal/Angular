import { Component, EventEmitter, Output } from "@angular/core";


@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
})
export class Headeromponent {
  collapsed = true;
  @Output() featureSelected = new EventEmitter<string>();
  recipeOn = true;

  onSelect(feature: string) {
  this.featureSelected.emit(feature);
  }

}
