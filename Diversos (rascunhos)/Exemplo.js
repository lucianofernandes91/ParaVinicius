// Rota login
// enpoint/auth/local
async function login(ctx){
    return {
        user:{
            uid:"a671313apsdasd",
            nome:"teste",
            email:"admin@teste.com"
        },
        jwt:""
    }
}

// Rota de associados
// endpoint/associados

// buscar associados
// get /associados
async function find(ctx){
    const associados = []
    return associados;
}

// buscar associado por id
// get /associados/:id
async function findOne(ctx){
    const {id} = ctx.params
    const associado = await strapi.query("associados").findOne({id:id})
    return associado;
}

// cadastra associado
// post /associados
async function create(ctx){
    const {body} = ctx.request
    const associado = await strapi.query("associados").create(body)
    return associado;
}

// atualiza associado por id
// update /associados
async function update(ctx){
    const {id} = ctx.params
    const associado = await strapi.query("associados").update({id:id})
    return associado;
}