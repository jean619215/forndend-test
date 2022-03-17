import * as React from "react";
import { render } from "react-dom";
import MainPanel from "./components/MainPanel";
//import { Server } from 'miragejs/server';
import { Server, Model, Factory } from 'miragejs';
import * as RealEstateServer from "./server/RealEstateServer";


//import RealEstateServer from "./server/realEstateServer";

const realEstateServer = RealEstateServer;


// new Server({
//     models: {
//         todo: Model
//     },

//     factories: {
//         todo: Factory.extend({
//             id(i) {
//                 return `${i + 1}`;
//             },
//             // city: getRadomString(CITYS),
//             // state: getRadomString(STATES),
//             // type: getRadomString(TYPES),
//             // price: getRandomInt(1900)+100
//         })
//     },

//     seeds(server) {
//         server.create("todo")
//     },

//     routes() {
//         //this.get("/properties")
//         this.get("api/properties", (schema) => {
//             let res: any = schema;

//             console.warn(schema);

//             return res.todo.all();
//         })
//     },
// })


const rootElement = document.getElementById("root");
render(<MainPanel />, rootElement);