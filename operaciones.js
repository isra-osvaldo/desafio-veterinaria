import fs from 'node:fs'

// Registrar cita
export const registrar = (nombre, edad, animal, color, enfermedad) => {
    const citas = JSON.parse(fs.readFileSync('./citas.json', 'utf-8')) 

    const nuevaCita = {
        nombre,
        edad,
        animal,
        color,
        enfermedad
    }

    citas.push(nuevaCita)

    fs.writeFileSync('./citas.json', JSON.stringify(citas))
    console.log('Cita agregada exitosamente')
}

// Leer citas
export const leer = () => {
    const citas = JSON.parse(fs.readFileSync('./citas.json', 'utf-8'))
    console.log('Registro de citas')
    console.log(citas)
}