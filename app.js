const prompt = require('prompt-sync')({ sigint: true });

let personas = [];

const solicitarDatos = () => {
  while (true) {
    const nombre = prompt('Ingrese su nombre: ');
    const apellido = prompt('Ingrese su apellido: ');
    const dni = prompt('Ingrese su DNI: ');

    let telefonos = [];
    while (true) {
      const telefono = prompt('Ingrese su telefono: ');
      telefonos.push(telefono);
      const continuar = prompt(
        'Desea ingresar otro telefono? (s/n)',
      ).toLowerCase();
      if (continuar !== 's') break;
    }

    let hijos = [];
    while (true) {
      const hijo = prompt('Ingrese el nombre de su hijo: ');
      hijos.push(hijo);
      const continuar = prompt('Desea ingresar otro hijo? (s/n)').toLowerCase();
      if (continuar !== 's') break;
    }

    personas.push([nombre, apellido, dni, telefonos, hijos]);

    console.log(personas);
    personas.map((persona) => {
      console.log(
        `Nombre: ${persona[0]} \n Apellido: ${persona[1]} \n DNI: ${persona[2]} \n Cantidad de telefonos: ${persona[3].length} \n Cantidad de hijos: ${persona[4].length}`,
      );
    });

    while (true) {
      const continuar = prompt('Desea filtrar por dni (s/n)').toLowerCase();
      if (continuar !== 's') break;
      const dni = prompt('Ingrese el dni a filtrar: ');
      const persona = personas.find((persona) => persona[2] === dni);

      if (persona) {
        console.log(
          `Nombre: ${persona[0]} \n Apellido: ${persona[1]} \n DNI: ${persona[2]} \n Cantidad de telefonos: ${persona[3].length} \n Cantidad de hijos: ${persona[4].length}`);
      } else {
        console.log('No se encontro la persona con el dni ingresado');
      }
    }

    let continuar = prompt(
      '¿Quiere continuar con la ejecución del programa agregando otra persona? (s/n) ',
    ).toLowerCase();
    if (continuar !== 's') break;
  }
};

solicitarDatos();
