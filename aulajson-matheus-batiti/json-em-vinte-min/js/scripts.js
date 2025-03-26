const objs = [
    {
        "nome": "Matheus",
        "idade": 30,
        "esta_trabalhando": true,
        "terraplanista": false,
        "macaco_shaolin": null,
        "detalhes_profissao":{
            "profissao": "Programador",
            "empresa":"Empresa X"
        },
        "hobbies": [
            "Programar",
            "Jogar",
            "Assistir filmes",
            "Ouvir música"
        ]
    },
    {
        "nome": "joão",
        "idade": 22,
        "esta_trabalhando": false,
        "terraplanista": true,
        "macaco_shaolin": true,
        "detalhes_profissao":{
            "profissao": null,
            "empresa": null
        },
        "hobbies": [
            "Programar",
            "correr",
            "ler",
            "alpinismo"
        ]
    }

]

// JSON
// converter objeto para json
const jsonData = JSON.stringify(objs)

console.log(jsonData)
console.log(typeof jsonData)

//converter json para objeto
const objData = JSON.parse(jsonData);
console.log(objData)
console.log(typeof objData)

objData.map((pessoa) =>{
    console.log(pessoa.nome)
})