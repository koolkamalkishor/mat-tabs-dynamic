import { Component, ViewChild } from '@angular/core';

/**
 * @title Basic select
 */
@Component({
  selector: 'select-overview-example',
  templateUrl: 'select-overview-example.html',
  styleUrls: ['select-overview-example.css'],
})
export class SelectOverviewExample {
  tabs = [
    { id: 'queue', label: 'Queue', number: '06' },
    { id: 'earlier', label: 'Earlier', number: '02' },
    { id: 'waitlist', label: 'Wait List', number: '05' },
    { id: 'noshow', label: 'No Show', number: '0' }
  ];
  activeTab: string = this.tabs[0].id;

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }
}

/**  Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
