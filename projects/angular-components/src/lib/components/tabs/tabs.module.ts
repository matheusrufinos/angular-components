import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { TabsPanelComponent } from './tabs-panel/tabs-panel.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TabsComponent, TabsPanelComponent],
  exports: [TabsComponent,TabsPanelComponent]
})
export class LibTabsModule {}
