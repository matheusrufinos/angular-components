import { Component, Input, OnInit } from '@angular/core';
import { TabsComponent } from '../tabs.component';

@Component({
  selector: 'lib-tabs-panel',
  templateUrl: './tabs-panel.component.html',
  styleUrls: ['./tabs-panel.component.scss']
})
export class TabsPanelComponent implements OnInit {
  @Input() tabTitle;
  @Input() active: boolean;
  @Input() iconSrc: string;
  @Input() tabFilter: string;
  
  constructor(tabs: TabsComponent) {
    tabs.addTab(this)
  }

  ngOnInit(): void {
  }

}
