personas = []

def solicitar_datos():
  while True:
    nombre = input('Ingrese su nombre: ')
    apellido = input('Ingrese su apellido: ')
    dni = input('Ingrese su DNI: ')
    telefonos = []

    while True:
      telefono = input('Ingrese su telefono: ')
      telefonos.append(telefono)
      continuar = input('Desea ingresar otro telefono? (s/n): ').lower()
      if continuar != 's':
        break

    hijos = []
    while True:
      hijo = input('Ingrese el nombre de su hijo: ')
      hijos.append(hijo)
      continuar = input('Desea ingresar otro hijo? (s/n): ').lower()
      if continuar != 's':
        break

    personas.append([nombre, apellido, dni, telefonos, hijos])
    print(personas)
    for persona in personas:
      print(f"Nombre: {persona[0]}\nApellido: {persona[1]}\nDNI: {persona[2]}\nCantidad de telefonos: {len(persona[3])}\nCantidad de hijos: {len(persona[4])}")

    while True:
      continuar = input('Desea filtrar por dni (s/n): ').lower()
      if continuar != 's':
          break
      dni_filtro = input('Ingrese el dni a filtrar: ')
      persona = next((p for p in personas if p[2] == dni_filtro), None)
      if persona is not None:
          print(f"Nombre: {persona[0]}\nApellido: {persona[1]}\nDNI: {persona[2]}\nCantidad de telefonos: {len(persona[3])}\nCantidad de hijos: {len(persona[4])}")
      else:
          print('No se encontró la persona con el dni ingresado')

    continuar = input('¿Quiere continuar con la ejecución del programa agregando otra persona? (s/n) ').lower()
    if continuar != 's':
        break

solicitar_datos()
