// ESTO ES UN MODEL DE DJANGO O UNA INTERFAZ. Aca lo que hacemos
// es dejar bien tipado lo que es el contenido que se va a mostrar. 
// Ese es el chiste de typescript...

export interface Product{ //hay que poner export para que nuestro proyecto pueda saber que puede usarlo
    id          : string;
    image       : string;
    title       : string;
    price       : number;
    description : string;

}