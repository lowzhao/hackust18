import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { TestingPage } from '../testing/testing'; 
import { Testing2Page } from '../testing2/testing2'; 
import { GraphpagePage } from '../graphpage/graphpage';
import { CalculatorPage } from '../calculator/calculator';
import { CalendarPage } from '../calendar/calendar';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CalculatorPage;
  tab3Root = ContactPage;
  tab4Root = TestingPage;
  tab5Root = CalendarPage;
  //GraphpagePage;
  //Testing2Page;  

  constructor() {

  }
}
