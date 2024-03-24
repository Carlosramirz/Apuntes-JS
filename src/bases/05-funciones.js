//Funciones
/* 
const saludar = function(nombre){
    return `Hola, ${nombre}`;
} */

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola mundo`;


console.log(saludar2('Carlos'));
console.log(saludar3('Fernando'));
console.log(saludar4());

const getuser = () => ({
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
)

const user = getuser();
console.log(user);

const getUsuarioActivo = (nombre) => (
    {
        uid: 'ABC567',
        username: nombre
});


const usuarioActivo = getUsuarioActivo('Carlos');
console.log(usuarioActivo);

