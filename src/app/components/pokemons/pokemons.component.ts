import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pokemons',
    templateUrl: './pokemons.component.html',
    styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
    ngOnInit(): void { }
    constructor() { }

    Pokemons = [
        { id: 1, nombre: 'Bulbasaur', categoria: 'Grano', tipo: 'Planta/Veneno', talla: 70, peso: 6900 },
        { id: 2, nombre: 'Ivysaur', categoria: 'Grano', tipo: 'Planta/Veneno', talla: 100, peso: 13000 },
        { id: 3, nombre: 'Venusaur', categoria: 'Grano', tipo: 'Planta/Veneno', talla: 200, peso: 100000 },
        { id: 4, nombre: 'Charmander', categoria: 'Lagarto', tipo: 'Fuego', talla: 60, peso: 8500 },
        { id: 5, nombre: 'Charmeleon', categoria: 'Llama', tipo: 'Fuego', talla: 110, peso: 19000 },
        { id: 6, nombre: 'Charizard', categoria: 'Llama', tipo: 'Fuego/Volador', talla: 170, peso: 90500 }
    ];

    formatearNumero(num: number): string {
        const numFormateado = num.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
        return numFormateado.endsWith('.00') ? numFormateado.slice(0, -3) : numFormateado;
    }
}
