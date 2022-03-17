// import { createServer, Model, Factory } from 'miragejs';
// import { TYPES } from './../components/MainPanel';
// import { getRandomInt } from './../tools/help';

// const STATES = [
//     'Georgia',
//     'Wyoming',
//     'Montana'
// ]

// const CITYS = [
//     'Attleboro',
//     'Enterprise',
//     'South Hill'
// ]

// // const CITY_TYPE = {
// //     [STATE_TYPE.Georgia]: {
// //         Attleboro: 'Attleboro',
// //         Columbus: 'Columbus',
// //         Macon: 'Macon'
// //     },
// //     [STATE_TYPE.Wyoming]: {
// //         Enterprise: 'Enterprise',
// //         Cheyenne: 'Cheyenne',
// //         Laramie: 'Laramie'
// //     },
// //     [STATE_TYPE.Montana]: {
// //         SouthHill: 'South Hill',
// //         Belgrade: 'Belgrade',
// //         Hobson: 'Hobson'
// //     }
// // }


// function getRadomString(target: Array<string>): string {
//     return target[getRandomInt(target.length)];
// }

// // export default function RealEstateServer() {
// //     return  createServer({
// //         models: {
// //             todo: Model
// //         },

// //         factories: {
// //             todo: Factory.extend({
// //                 id(i) {
// //                     return `${i + 1}`;
// //                 },
// //                 // city: getRadomString(CITYS),
// //                 // state: getRadomString(STATES),
// //                 // type: getRadomString(TYPES),
// //                 // price: getRandomInt(1900)+100
// //             })
// //         },

// //         seeds(server) {
// //             //server.createList("todo", 50)
// //             server.create('todo',{});
// //         },

// //         routes() {
// //             this.namespace = "api",
// //             //this.get("/properties")
// //             this.get("/properties", (schema) => {
// //                 let res: any = schema;

// //                 console.warn(schema);

// //                 return res.todo.all();
// //             })
// //         },


// //     })
// // }

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
//         server.create("todo",{})
//     },

//     routes() {
//     this.namespace = "api",
//     //this.get("/properties")
//     this.get("/properties", (schema) => {
//         let res: any = schema;

//         console.warn(schema);

//         return res.todo.all();
//     })
// },
// })

import { createServer, Model, Factory } from "miragejs"

export default createServer({
    models: {
        propertie: Model
    },
  
  	factories: {
    	propertie: Factory.extend({
          	text(i){
              return i ;
            }
          	
        })
    },
  
    seeds(server) {
      	//server.create('todo', {text: 'Learn Mrage', isDon: true } );
        server.createList('propertie', 5);
    },
  
  routes() {
    this.namespace = "api"
    this.get('/properties', schema =>{
        let res: any = schema;
    	return res.properties.all();
    });
  },
})