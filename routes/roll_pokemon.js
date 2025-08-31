const fs = require('fs');
const path = require('path');

class RollPokemon {
    constructor() {
        this.pokemonData = this.loadPokemonData();
    }

    // Cargar datos desde el archivo JSON
    loadPokemonData() {
        try {
            const dataPath = path.join(__dirname, '../rollimage/pokemon.json');
            const rawData = fs.readFileSync(dataPath, 'utf8');
            const data = JSON.parse(rawData);
            return data.personajes || [];
        } catch (error) {
            console.error('Error loading Pokemon data:', error);
            return [];
        }
    }

    // Obtener todos los Pokémon
    getAll() {
        return this.pokemonData;
    }

    // Obtener Pokémon por ID
    getById(id) {
        const pokemon = this.pokemonData.find(p => p.id === parseInt(id));
        if (!pokemon) {
            throw new Error(`Pokémon con ID ${id} no encontrado`);
        }
        return pokemon;
    }

    // Obtener Pokémon por nombre
    getByName(name) {
        const pokemon = this.pokemonData.find(p => 
            p.nombre.toLowerCase() === name.toLowerCase()
        );
        if (!pokemon) {
            throw new Error(`Pokémon ${name} no encontrado`);
        }
        return pokemon;
    }

    // Obtener Pokémon por tipo
    getByType(type) {
        return this.pokemonData.filter(p => 
            p.tipo.some(t => t.toLowerCase() === type.toLowerCase())
        );
    }

    // Obtener Pokémon aleatorio
    getRandom() {
        if (this.pokemonData.length === 0) {
            throw new Error('No hay datos de Pokémon disponibles');
        }
        const randomIndex = Math.floor(Math.random() * this.pokemonData.length);
        return this.pokemonData[randomIndex];
    }

    // Buscar Pokémon por término
    search(term) {
        const searchTerm = term.toLowerCase();
        return this.pokemonData.filter(p => 
            p.nombre.toLowerCase().includes(searchTerm) ||
            p.categoria.toLowerCase().includes(searchTerm) ||
            p.descripcion.toLowerCase().includes(searchTerm)
        );
    }

    // Obtener estadísticas de un Pokémon
    getStats(id) {
        const pokemon = this.getById(id);
        return pokemon.estadisticas;
    }

    // Obtener cadena evolutiva
    getEvolutionChain(id) {
        const pokemon = this.getById(id);
        const chain = {
            current: {
                id: pokemon.id,
                nombre: pokemon.nombre,
                imagen: pokemon.imagen
            }
        };

        if (pokemon.evoluciona_de) {
            chain.evolves_from = pokemon.evoluciona_de;
        }

        if (pokemon.evoluciona_a) {
            chain.evolves_to = pokemon.evoluciona_a;
        }

        return chain;
    }

    // Obtener movimientos de un Pokémon
    getMoves(id) {
        const pokemon = this.getById(id);
        return pokemon.movimientos_destacados || [];
    }

    // Filtrar por múltiples criterios
    filter(options = {}) {
        let filtered = [...this.pokemonData];

        if (options.type) {
            filtered = filtered.filter(p => 
                p.tipo.some(t => t.toLowerCase() === options.type.toLowerCase())
            );
        }

        if (options.minLevel) {
            filtered = filtered.filter(p => p.estadisticas.total >= options.minLevel);
        }

        if (options.maxLevel) {
            filtered = filtered.filter(p => p.estadisticas.total <= options.maxLevel);
        }

        if (options.hasEvolution) {
            filtered = filtered.filter(p => p.evoluciona_a !== null);
        }

        return filtered;
    }

    // Obtener tipos únicos disponibles
    getAvailableTypes() {
        const types = new Set();
        this.pokemonData.forEach(p => {
            p.tipo.forEach(t => types.add(t));
        });
        return Array.from(types).sort();
    }

    // Validar si existe un Pokémon
    exists(identifier) {
        if (typeof identifier === 'number' || !isNaN(identifier)) {
            return this.pokemonData.some(p => p.id === parseInt(identifier));
        }
        return this.pokemonData.some(p => 
            p.nombre.toLowerCase() === identifier.toLowerCase()
        );
    }

    // Obtener información básica (sin detalles extensos)
    getBasicInfo(id) {
        const pokemon = this.getById(id);
        return {
            id: pokemon.id,
            nombre: pokemon.nombre,
            categoria: pokemon.categoria,
            tipo: pokemon.tipo,
            imagen: pokemon.imagen,
            estadisticas: pokemon.estadisticas
        };
    }

    // Obtener count total
    getCount() {
        return this.pokemonData.length;
    }
}

// Exportar la clase y una instancia por defecto
module.exports = RollPokemon;
