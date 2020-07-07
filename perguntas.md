# Perguntas

## Aula 1

Link para o jogo pong no Scratch: <https://scratch.mit.edu/projects/410168240/>

1 - Para movimentar a raquete do oponente de forma inteligente, uma pessoa desenvolveu o seguinte código no ator bolinha:

![code-1](./imagens/print001.png)

E ator raquete oponente:

![code-2](./imagens/print002.png)

Após jogar algum tempo, percebeu que o jogo estava muito fácil, pois o oponente errava muito.

Com base no código usado pela pessoa, o que ela pode fazer para a raquete do oponente acertar mais a bolinha?

- No código de ator bolinha, a pessoa pode diminuir o valor do subtraendo.

> Certo! Quanto mais próximo de 0 for o subtraendo, mais perfeito será o movimento da raquete do oponente. Conforme diminuímos esse valor, aumentamos a chance de erro da raquete do oponente.

- No código de ator bolinha, a pessoa pode zerar o valor do subtraendo e passar a posição Y da bolinha.
- No código de ator bolinha, a pessoa pode alterar o valor do subtraendo para -100.

## Aula 2

1 - Sem alterar o comportamento do jogo, movemos alguns códigos da função draw para funções que criamos:

``` javascript
function mostraBolinha()
```

``` javascript
function movimentaBolinha()
```

``` javascript
function verificaColisaoBorda()
```

Sabendo disso, podemos definir que função é:

- Um conceito que está relacionado com a ideia de classificar e abstrair coisas.
- A união de vários códigos aleatórios, com comportamentos diferentes em um único lugar, visando tornar o código mais legível.
- __Um conjunto de comandos ou códigos que realiza uma tarefa específica.__

> Certo! No nosso caso, cada função criada é responsável por um comportamento, tornando a leitura do código mais intuitiva e simples.

## Aula 3

1 - Criamos o código que verifica a colisão da bolinha com a nossa raquete verificando a posição x e y de cada um deles. Porém, acessando a documentação do P5 Js, vimos que existe uma solução disponível no GitHub, para reconhecer a colisão entre objetos 2D.

Sabendo disso, analise as afirmações abaixo e marque as verdadeiras.

- O GitHub é o único lugar da web onde é possível hospedar código.
- O GitHub possui apenas soluções para projetos feitos em Javascript.
- __É possível compartilhar um código com a solução desenvolvida por nós para que outras pessoas possam usar.__

> Certo! Podemos hospedar nosso código no GitHub, compartilhando uma solução, ajudando assim outras pessoas da comunidade.

- __O GitHub permite a socialização com pessoas que possuem os mesmos interesses que você.__

> Certo! O GitHub funciona também como um rede social entre pessoas programadores.
