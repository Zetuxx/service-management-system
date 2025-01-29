import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nested-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './nested-table.component.html',
  styleUrls: ['./nested-table.component.css'],
})
export class NestedTableComponent implements AfterViewInit {
  @Input() dataSource!: any;
  @Input() objectKeys: (element: any) => string[] = () => [];
  @Input() formatString!: (value: string) => string;
  @Input() getColumnDisplayName!: (key: string) => string;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  tableDataSource!: MatTableDataSource<any>;

  ngOnInit() {
    this.tableDataSource = new MatTableDataSource(this.dataSource);
  }

  ngAfterViewInit() {
    this.tableDataSource.paginator = this.paginator;
  }
}
