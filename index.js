//RESUELVE LOS EJERCICIOS AQUI

//MAP --------------------------------------------------- 

/*EJERCICIO 1 
    Dado el array numbers cuyo valor sea [4, 5, 6, 7, 8, 9, 10], crea una función elevados que sea el resultado de elevar cada número a si mismo.*/
        console.log("EJERCICIO 1 ---------------- ");
        let numbers = [4, 5, 6, 7, 8, 9, 10];

        //* La función accede a una variable global
        //Uso de .map((elemento, índice, arrayoriginal) => función cb)
        function elevados(){
            let numeroElevado =  numbers.map(i => i ** i); 
            return numeroElevado
            }
        
        console.log(elevados(numbers))




/*EJERCICIO 2 
    Dado el array foodList con valor ['Pizza', 'Ramen', 'Paella', 'Entrecot'], generar un segundo array que consiga generar de salida el resultado esperado.
        [
        'Como soy de Italia, amo comer Pizza',
        'Como soy de Japón, amo comer Ramen',
        'Como soy de Valencia, amo comer Paella',
        'Aunque no como carne, el Entrecot es sabroso'
    ]*/

        let foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot']

        //Array Paralelo
        let mensajes = [
            `Como soy de Italia, amo comer ${foodList[0]}`,
            `Como soy de Japón, amo comer ${foodList[1]}`,
            `Como soy de Valencia, amo comer ${foodList[2]}`,
            `Aunque no como carne, el ${foodList[3]} es sabroso`,
        ];

        //Uso de .map((elemento, índice, array original) => función cb)
        let result2 = foodList.map((comida, index) => mensajes[index]);

        console.log(result2);




/*EJERCICIO 3
    Dado el array staff, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:
        Resultado esperado:
        [
            'Pepe es The Boss y le gusta leer y ver pelis',
            'Ana es becaria y le gusta nadar y bailar',
            'Luis es programador y le gusta dormir y comprar',
            'Ana es becaria y le gusta nadar y bailar',
            'Carlos es secretario y le gusta futbol y queso'
        ]
*/

        const staff = [
            {
                name: 'Pepe',
                role: 'The Boss',
                hobbies: ['leer', 'ver pelis']
            },
            {
                name: 'Ana',
                role: 'becaria',
                hobbies: ['nadar', 'bailar']
            },
            {
                name: 'Luis',
                role: 'programador',
                hobbies: ['dormir', 'comprar']
            },
            {
                name: 'Carlos',
                role: 'secretario',
                hobbies: ['futbol', 'queso']
            }
        ];


        //Solución fácil (manual)
        let staffDescriptions  = [
            `${staff[0].name} es ${staff[0].role} y le gusta ${staff[0].hobbies[0]} y ${staff[0].hobbies[1]}`,
            `${staff[1].name} es ${staff[1].role} y le gusta ${staff[1].hobbies[0]} y ${staff[1].hobbies[1]}`,
            `${staff[2].name} es ${staff[2].role} y le gusta ${staff[2].hobbies[0]} y ${staff[2].hobbies[1]}`,
            `${staff[3].name} es ${staff[3].role} y le gusta ${staff[3].hobbies[0]} y ${staff[3].hobbies[1]}`,
            ]

        let result3 = staffDescriptions
        console.log(result3);


        //Solución avanzada (automatizada con .map)
        const result31 = staff.map((persona) => {
        return `${persona.name} es ${persona.role} y le gusta ${persona.hobbies[0]} y ${persona.hobbies[1]}`;
        });

        console.log(result31);//Array completo
        console.log(result31[2]);//Slot 2 del Array

    



//FILTER ---------------------------------------------------   
/*EJERCICIO 4 
    Crea un segundo array result4 a partir del array numbers2 que devuelva solo los impares.
*/

    const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    let result4 = numbers2.filter((number, index, array) =>{
            if (number % 2 !== 0){
                return number
            } 
        }
    )
    console.log(result4);

    //Versión pro: 
        //Si la función devuelve true, el elemento se mantiene.
        //number % 2 !== 0 es una expresión booleana, no necesita if.

    let result41 = numbers2.filter(number => number % 2 !== 0);
    console.log(result41);




/*EJERCICIO 5 
    Dado el array foodList2, genera un segundo array result5 que filtre los platos veganos y saque una sentencia como la del ejemplo:

        ['Que rico Tempeh me voy a comer!',
        'Que rica Tofu burguer me voy a comer!']
*/

    const foodList2 =[
    {
        name: 'Tempeh',
        isVeggie: true
    },
    {
        name: 'Cheesbacon burguer',
        isVeggie: false
    },
    {
        name: 'Tofu burguer',
        isVeggie: true
    },
    {
        name: 'Entrecot',
        isVeggie: false
    }];


    let result5 = foodList2
    .filter(item => item.isVeggie)
    .map(item => `Que ric${item.name.startsWith('To') ? 'a' : 'o'} ${item.name} me voy a comer!`)

    console.log(result5)
    // *Dudas con la condición para forzar el género de ricO o ricA




/*EJERCICIO 6 
    Dado el array inventory, devolver un array con los nombres de los elementos que valgan más de 300 euros.
        [
            'TV Samsung',
            'Viaje a Cancún'
        ]
*/

    const inventory = [
    {
        name: 'Mobile phone',
        price: 199
    },
    {
        name: 'TV Samsung',
        price: 459
    },
    {
        name: 'Viaje a Cancún',
        price: 600
    },
    {
        name: 'Mascarilla',
        price: 1
    }
    ];


    let result6 = inventory
        .filter((item) => item.price > 300)
        .map((item) => item.name)

    console.log(result6);






//REDUCE ---------------------------------------------------   

/*EJERCICIO 7 
    Dado el siguiente array numeros [39, 2, 4, 25, 62], obten la multiplicación de todos los elementos del array
*/

    const numeros3 =  [39, 2, 4, 25, 62]

    //Multiplicar todos los elementos
    let result7 = numeros3.reduce((acumulador, numero) => acumulador * numero)

    console.log(result7)




/*EJERCICIO 8 
    Concatena todos los elementos del array con reduce para que devuelva una sola frase.
    Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'
*/

    const sentenceElements = [
        'Me',
        'llamo',
        'Irene',
        'y',
        'quiero',
        'sentir',
        'la',
        'fuerza',
        'con',
        'javascript'
        ];

   
    // Transformar un array en string
    let result8 = sentenceElements.reduce((acumulador, itemActual) => acumulador + ' ' + itemActual); 

    console.log(result8) 


    
    /*EJERCICIO 9
        Obtener el monto total de los elementos que pertenecen a catergory "code" en el siguiente array.
        Resultado --> 60
    */

    const books = [
        {
            name: ' JS for dummies',
            author: 'Emily A. Vander Veer',
            price: 20,
            category: 'code'
        },
        {
            name: 'Don Quijote de la Mancha',
            author: 'Cervantes',
            price: 14,
            category: 'novel'
        },
        {
            name: 'Juego de tronos',
            author: 'George R. Martin',
            price: 32,
            category: 'Fantasy'
        },
        {
            name: 'javascript the good parts',
            author: 'Douglas Crockford',
            price: 40,
            category: 'code'
        }
    ];
   
    let result9 = books.reduce((acumulador, actual) => {
        return actual.category === 'code' ? acumulador + actual.price : acumulador;}, 0)

    // acumulador: lleva la suma total
    // actual: cada objeto del array
    // actual.category === 'code': solo suma si la categoría es "code"
    // 0: valor inicial del acumulador
        
    console.log(result9)