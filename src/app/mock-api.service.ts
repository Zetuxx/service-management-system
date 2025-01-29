import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MockApiService {
  constructor() {}

  getData(): Observable<any> {
    const mockData = {
      response: {
        result: [
          {
            imie: 'Jan',
            nazwisko: 'Kowalski',
            adres: 'ul. Słoneczna 12, Warszawa',
            telefon: '123-456-789',
            ilosc_obiektow: 3,
            oferty: [
              {
                id: 1,
                data_zlecenia: '2025-01-02',
                rozpoczecie: '2025-01-02T10:00',
                zakonczenie: '2025-01-02T10:00',
                adres: 'ul. Zielona 4, Warszawa',
                rodzaj: 'Malowanie',
                imie_nazwisko_klienta: 'Anna Nowak',
                imie_nazwisko_pracownika: 'Jan Kowalski',
              },
              {
                id: 2,
                data_zlecenia: '2025-01-02',
                rozpoczecie: '2025-01-08T10:00',
                zakonczenie: '2025-01-15T10:00',
                adres: 'ul. Krakowska 18, Warszawa',
                rodzaj: 'Remont',
                imie_nazwisko_klienta: 'Katarzyna Wiśniewska',
                imie_nazwisko_pracownika: 'Jan Kowalski',
              },
              {
                id: 3,
                data_zlecenia: '2025-01-02',
                rozpoczecie: '2025-01-02T10:00',
                zakonczenie: '2025-01-02T10:00',
                adres: 'ul. Piękna 22, Warszawa',
                rodzaj: 'Naprawa',
                imie_nazwisko_klienta: 'Piotr Malinowski',
                imie_nazwisko_pracownika: 'Jan Kowalski',
              },
            ],
            faktury: [
              {
                id: 1,
                imie_nazwisko_klienta: 'Anna Nowak',
                nazwa_pliku: 'faktura_1.pdf',
              },
              {
                id: 2,
                imie_nazwisko_klienta: 'Katarzyna Wiśniewska',
                nazwa_pliku: 'faktura_2.pdf',
              },
              {
                id: 3,
                imie_nazwisko_klienta: 'Piotr Malinowski',
                nazwa_pliku: 'faktura_3.pdf',
              },
            ],
            umowy: [
              {
                id: 1,
                imie_nazwisko_klienta: 'Anna Nowak',
                nazwa_pliku: 'umowa_1.pdf',
              },
              {
                id: 2,
                imie_nazwisko_klienta: 'Katarzyna Wiśniewska',
                nazwa_pliku: 'umowa_2.pdf',
              },
              {
                id: 3,
                imie_nazwisko_klienta: 'Piotr Malinowski',
                nazwa_pliku: 'umowa_3.pdf',
              },
            ],
          },
          {
            imie: 'Jan2',
            nazwisko: 'Kowalski2',
            adres: 'ul. Słoneczna 12, Warszawa',
            telefon: '123-456-789',
            ilosc_obiektow: 3,
            oferty: [
              {
                id: 1,
                data_zlecenia: '2025-01-02',
                rozpoczecie: '2025-01-02T10:00',
                zakonczenie: '2025-01-02T10:00',
                adres: 'ul. Zielona 4, Warszawa',
                rodzaj: 'Malowanie',
                imie_nazwisko_klienta: 'Anna Nowak',
                imie_nazwisko_pracownika: 'Jan Kowalski',
              },
              {
                id: 2,
                data_zlecenia: '2025-01-02',
                rozpoczecie: '2025-01-08T10:00',
                zakonczenie: '2025-01-15T10:00',
                adres: 'ul. Krakowska 18, Warszawa',
                rodzaj: 'Remont',
                imie_nazwisko_klienta: 'Katarzyna Wiśniewska',
                imie_nazwisko_pracownika: 'Jan Kowalski',
              },
              {
                id: 3,
                data_zlecenia: '2025-01-02',
                rozpoczecie: '2025-01-02T10:00',
                zakonczenie: '2025-01-02T10:00',
                adres: 'ul. Piękna 22, Warszawa',
                rodzaj: 'Naprawa',
                imie_nazwisko_klienta: 'Piotr Malinowski',
                imie_nazwisko_pracownika: 'Jan Kowalski',
              },
            ],
            faktury: [
              {
                id: 1,
                imie_nazwisko_klienta: 'Anna Nowak2',
                nazwa_pliku: 'faktura_1.pdf',
              },
              {
                id: 2,
                imie_nazwisko_klienta: 'Katarzyna Wiśniewska2',
                nazwa_pliku: 'faktura_2.pdf',
              },
              {
                id: 3,
                imie_nazwisko_klienta: 'Piotr Malinowski2',
                nazwa_pliku: 'faktura_3.pdf',
              },
            ],
            umowy: [
              {
                id: 1,
                imie_nazwisko_klienta: 'Anna Nowak2',
                nazwa_pliku: 'umowa_1.pdf',
              },
              {
                id: 2,
                imie_nazwisko_klienta: 'Katarzyna Wiśniewska2',
                nazwa_pliku: 'umowa_2.pdf',
              },
              {
                id: 3,
                imie_nazwisko_klienta: 'Piotr Malinowski2',
                nazwa_pliku: 'umowa_3.pdf',
              },
            ],
          },
        ],
      },
    };

    return of(mockData).pipe();
  }
}
