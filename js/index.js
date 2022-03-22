/*
Quando clicar no pokemon da listagem temos que esconder o cartao do pokemon aberto e mostrar o cartao correspondente ao que foi selecionado na listagem

pra isso vamos precisar trabralhar com dois elementos 
1 - listagem
2 - cartão pokémon

precisamos criar duas variáveis no JS pra trabalhar com os elemetos na tela

Vamos precisar trabalhar com evento de clique feito pelo usuario na listagem de pokémons

- remover a classe "aberto" só do cartao que está aberto
- ao clicar em um pokémon da listagem pegamos o id desse pokémon pra saber qyal cartão mostrar
- remover a classe "ativo" que marca o pokémon selecionado
- adicionar a classe ativo no item da lista selecionado

*/

//precisamos criar duas variaveis no JS pra trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')



//Vamos precisar trabalhar com evento de clique feito pelo usuario na listagem de pokémons
listaSelecaoPokemons.forEach(pokemon => {
    
    pokemon.addEventListener('click', () => {
        //remover a classe "aberto" só do cartao que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')



        //ao clicar em um pokémon da listagem pegamos o id desse pokémon pra saber qyal cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemosParaAbrir = document.getElementById(idCartaoPokemonParaAbrir)
        cartaoPokemosParaAbrir.classList.add('aberto')


        //remover a classe "ativo" que marca o pokémon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //adicionar a classe ativo no item da lista selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})