import { Component, OnInit,  Input, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-agrfact',
  templateUrl: './agrfact.component.html',
  styleUrls: ['./agrfact.component.scss'],
})
export class AgrfactComponent  implements OnInit {

  
  item:any;
  // the data object to hold values from this component
  @Input() data: any

  // emitt an event to indicate the user has clicked on 
  // the delete button in this component
  @Output() onDelete = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    this.data.id = new Date().getTime()
  }
  deleteClicked(item) {
    console.log("deleteClicked")
    this.onDelete.next(this.data)
  }

}
