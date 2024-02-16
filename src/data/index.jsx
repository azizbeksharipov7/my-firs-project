import {generateId} from "../utils";
export  const carouselData=[
    {
        id:generateId(),
        src:"https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
    },
    {
        id:generateId(),
        src:"https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
    },
    {
        id:generateId(),
        src:"https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
    }
];

export const btns=[
    {
        id:generateId(),
        text:'Поиск по  номеру',
        value:'номеру',
    },
    {
        id:generateId(),
        text:'Поиск по марке',
        value:'марке',
    },
    {
        id:generateId(),
        text:'Поиск по названию товара',
        value:'названию товара',
    },
    
]