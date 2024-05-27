//-----------Função geradora-------//

/**
 * Função geradora básica que produz uma sequência de valores.
 */
function* geradora1() {
    // Primeiro código...
    yield "Valor 1"; // Retorna na primeira chamada da função

    // Segundo código...
    yield "Valor 2"; // Retorna na segunda chamada da função  

    // Terceiro código...
    yield "Valor 3"; // Retorna na terceira chamada da função
}

const g1 = geradora1();

console.log(g1.next().value); // "Valor 1"
console.log(g1.next().value); // "Valor 2"
console.log(g1.next().value); // "Valor 3"
console.log(g1.next().value); // undefined, pois não há mais valores para retornar

// Iterando sobre a função geradora
for (let valor of g1) {
    console.log(valor); // Não imprime nada, pois todos os valores já foram consumidos
}

/**
 * Função geradora que produz uma sequência infinita de números.
 */
function* geradora2() {
    let i = 0;
    while (true) {
        yield i;
        i++;
    }
}     

const g2 = geradora2();

// Imprime os primeiros 15 números da sequência
for (let i = 0; i < 15; i++) {
    console.log(g2.next().value);
}

/**
 * Função geradora simples que retorna três valores.
 */
function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}    

/**
 * Função geradora que delega parte da sua geração para outra função geradora.
 */
function* geradora4() {
    yield* geradora3(); // Delegação para outra função geradora
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();

// Itera sobre todos os valores da sequência gerada
for (let valor of g4) {
    console.log(valor);
}

/**
 * Função geradora que produz funções como valores.
 */
function* geradora5() {
    yield function() {
        console.log('vim do y1');
    }

    yield function() {
        console.log('vim do y2');
    }

    yield function() {
        console.log('vim do y3');
    }

    // O retorno final não será iterado, mas pode ser acessado diretamente
    return function() {
        console.log('Vim do return');
    };
}    

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
const func3 = g5.next().value;
const func4 = g5.next().value; // undefined, pois é o valor retornado e não yield

// Chama cada função gerada
func1();
func2();
func3();
func4(); // Verifica se func4 é definida antes de chamá-la
