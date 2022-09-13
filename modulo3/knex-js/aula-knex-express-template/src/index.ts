import { Request, Response } from "express"
import app from "./app";
import connection from "./connection";
import deleteActorById from "./endpoints/deletActorById";
import getActorById from "./endpoints/getActorById";
import getActorByName from "./endpoints/getActorByName";
import getAllActors from "./endpoints/getAllActors";
import getCountActors from "./endpoints/getCountActors";
import postCreatActor from "./endpoints/postCreatActor";
import putUpdateActor from "./endpoints/putUpdateActor";
import putUpdate from "./endpoints/putUpdateActor";



app.get("/actors", getAllActors)

//Buscar ator por Id 
app.get("/actors/:id", getActorById) 

//Buscar ator por Name
app.get("/actor/:name",getActorByName)


app.get("/actor", getCountActors);

app.post("/actor", postCreatActor);

app.put("/actor", putUpdateActor);

app.delete("/actor/:id", deleteActorById)


