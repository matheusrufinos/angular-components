import { AfterViewInit, Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';

import { TabsPanelComponent } from './tabs-panel/tabs-panel.component';
import getFilter from '../../helpers/icon-filter.helper';
import getHexColor from '../../helpers/hex-color.helper';

@Component({
  selector: 'lib-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterViewInit {
  tabs: TabsPanelComponent[] = [];
  colors = {
    neutral: '',
    static: '',
    hover: '',
  };

  @ViewChild('tabIcon') tabIcon: ElementRef;

  constructor (public readonly element: ElementRef, public readonly renderer: Renderer2) { }

  ngAfterViewInit() {
    this.getColors();
    this.setIconColor(this.colors.static);
  }

  addTab(tab: TabsPanelComponent) {
    if (this.tabs.length === 0) {
      tab.active = true;
    }
    this.tabs.push(tab);
  }

  selectTab(tab: TabsPanelComponent) {
    this.tabs.forEach((inactiveTab) => {
      inactiveTab.active = false;
      inactiveTab.tabFilter = this.colors.neutral;
    });
    tab.active = true;
    tab.tabFilter = this.colors.static;
  }

  private getColors() {
    const element = this.element.nativeElement;
    this.colors = {
      neutral: getFilter(getHexColor(element, '--neutral-dark')),
      static: getFilter(getHexColor(element, '--action-navigation-static')),
      hover: getFilter(getHexColor(element, '--action-navigation-hover')),
    };
  }

  public setIconColor(color: string): void {
    this.renderer.setStyle(this.tabIcon.nativeElement, 'filter', color);
  }

  applyStyle(tab: TabsPanelComponent): void {
    tab.tabFilter = this.colors.hover;
  }

  removeStyle(tab: TabsPanelComponent): void {
    tab.tabFilter = tab.active ? this.colors.static : this.colors.neutral;
  }
}
