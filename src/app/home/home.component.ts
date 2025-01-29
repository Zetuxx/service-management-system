import {
  OnInit,
  AfterViewInit,
  Component,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

import { RouterOutlet } from '@angular/router';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { NestedTableComponent } from '../shared/nested-table/nested-table.component';
import { MockApiService } from '../mock-api.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatTableModule,
    MatPaginator,
    MatPaginatorModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    NestedTableComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor(private mockApiService: MockApiService) {}

  RESPONSE: any;
  title = 'service-management-system';
  columns: string[] = [];
  displayedColumns: string[] = [];
  @ViewChild('paginator') paginator!: MatPaginator;
  expandedElement: any | null;
  dataSource = new MatTableDataSource<any>();
  currentDataSource = new MatTableDataSource<any>();

  ngOnInit() {
    this.mockApiService.getData().subscribe((response) => {
      this.RESPONSE = response;
    });

    let tempDataSource = this.RESPONSE.response.result.map((object: any) => ({
      ...object,
      imie_i_nazwisko: `${object.imie} ${object.nazwisko}`,
    }));
    this.columns = Object.keys(tempDataSource[0]).filter(
      (key) =>
        !Array.isArray(tempDataSource[0][key]) &&
        key !== 'imie' &&
        key !== 'nazwisko'
    );
    this.displayedColumns = [
      'expand',
      'imie_i_nazwisko',
      ...this.columns,
      'Akcje',
    ];
    this.dataSource = new MatTableDataSource(tempDataSource);
  }
  ngAfterViewInit() {
    // this.paginator._intl.nextPageLabel = 'Poprze.';
    this.dataSource.paginator = this.paginator;
  }
  objectKeysWithArrayValues(element: any): string[] {
    return Object.keys(element).filter((key) => Array.isArray(element[key]));
  }
  objectKeys(element: any): string[] {
    return Object.keys(element[0]);
  }

  getColumnDisplayName(key: string): string {
    const columnMappings: { [key: string]: string } = {
      imie: 'Imię',
      nazwisko: 'Nazwisko',
      adres: 'Adres',
      telefon: 'Numer telefonu',
      ilosc_obiektow: 'Obiekty',
      oferty: 'Oferty',
      faktury: 'Faktury',
      umowy: 'Umowy',
      id: 'ID',
      data_zlecenia: 'Data zlecenia',
      rozpoczecie: 'Rozpoczęcie',
      zakonczenie: 'Zakończenie',
      rodzaj: 'Rodzaj',
      imie_i_nazwisko: 'Imię i nazwisko',
      imie_nazwisko_klienta: 'Klient',
      imie_nazwisko_pracownika: 'Przypisany pracownik',
      nazwa_pliku: 'Nazwa Pliku',
    };
    return columnMappings[key] || key;
  }
  formatString(value: string): string {
    const dateTimeRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/;
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    const phoneRegex = /^\d{3}-\d{3}-\d{3}$/;
    if (phoneRegex.test(value)) return value.replace(/-/g, ' ');

    if (typeof value !== 'string') return value;
    if (dateTimeRegex.test(value)) {
      const date = new Date(value);
      if (isNaN(date.getTime())) return value;
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}`;
    }
    if (dateRegex.test(value)) {
      const date = new Date(value);
      if (isNaN(date.getTime())) return value;
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();
      return `${day}.${month}.${year}`;
    }

    return value;
  }
  expandRow(element: any): void {
    this.expandedElement = this.expandedElement === element ? null : element;
  }
}
