import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pokemons',
    templateUrl: './pokemons.component.html',
    styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
    ngOnInit(): void { }
    constructor() { }

    pokemons = [
        { id: 1, nombre: 'Bulbasaur', categoria: 'Grano', tipo: 'Planta/Veneno', talla: 70, peso: 6900, img: './assets/imgPokemons/1.png' },
        { id: 2, nombre: 'Ivysaur', categoria: 'Grano', tipo: 'Planta/Veneno', talla: 100, peso: 13000, img: "./assets/imgPokemons/2.png" },
        { id: 3, nombre: 'Venusaur', categoria: 'Grano', tipo: 'Planta/Veneno', talla: 200, peso: 100000, img: "./assets/imgPokemons/3.png" },
        { id: 4, nombre: 'Charmander', categoria: 'Lagarto', tipo: 'Fuego', talla: 60, peso: 8500, img: "./assets/imgPokemons/4.png" },
        { id: 5, nombre: 'Charmeleon', categoria: 'Llama', tipo: 'Fuego', talla: 110, peso: 19000, img: "./assets/imgPokemons/5.png" },
        { id: 6, nombre: 'Charizard', categoria: 'Llama', tipo: 'Fuego/Volador', talla: 170, peso: 90500, img: "./assets/imgPokemons/6.png" }
    ];

    pokemonSeleccionado = '';
}
