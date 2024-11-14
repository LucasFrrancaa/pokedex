const teste = document.getElementById('teste')
const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const limit = 5;
let offset = 0;

const maxRecords = 151


function loadPokemonItens(offset, limit){
    function convertPokemonToHtml(pokemon){
        return `
        <button id="teste">
                <li class="pokemon ${pokemon.type}">
                    <span class="number">${pokemon.order}</span>
                    <span class="name">${pokemon.name}</span>
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
                            <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>
                </li>
        </button>
        `
    }

    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToHtml).join('');
        pokemonList.innerHTML += newHtml;
        })
        
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () =>{
    offset +=limit

    const qtdRecord = offset + limit

    if(qtdRecord >= maxRecords){
        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, newLimit);

        loadMoreButton.parentElement.removeChild(loadMoreButton)

    }else{
        loadPokemonItens(offset, limit)
    }
    
})

function Sera(){
    teste.addEventListener('click', () =>{
    console.log('erwrwrewr')
})
}



