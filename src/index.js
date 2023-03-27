const { request, response, json } = require("express");

const express = require("express");


const app = express();
app.use(express.json());
/**
 *  GET - Buscar uma informação dentro do servidor
 * POST - Inserir uma informação do servidor
 * PUT - Alterar uma informação no servidor
 * PATCH - Alterar uma informação especifica
 * DELETE - Deletar uma informação no servidor
 */

/**
 *  Tipos de parâmetros
 * Route Params => Indetificar um recurso editar/deletar/buscar
 * Query Params => Paginação / Filtro
 * BOdy Params => Os objetos inserção/ alteração
 */
app.get('/courses', (request, response) => {
    const { query } = request.query;
    console.log(query);
return response.json(["JavaScript", "Node.Js", "SQL" ]);
});
app.post("/courses", (request, response) => {
    const  body  = request.body;
    console.log(body);
    
    return response.json(["JavaScript", "Node.Js", "SQL", "Express.js" ]);
});
app.put('/courses/:id', (request, response) => {
    
    
    return response.json(["JavaScript", "Node.Js", "APIS", "Express.js" ]);
});
app.patch("/courses/:id", (request, response) => {
    return response.json(["JavaScript", "Node.Js", "APIS", "SQL, MongoDB" ]);
});
app.delete("/courses/:id", (request, response) => {
    return response.json(["JavaScript", "Node.Js", "APIS",]);
});
app.listen(3333);
