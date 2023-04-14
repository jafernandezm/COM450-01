
export function obternerAccion(esObligatorio, esDocente, esExterno, tipoPersonaDestino, estadoRegistro) {
    var accion =""
    if (esObligatorio == "si" && esDocente == true) {
        accion = "Actualizar"
    }
    if (esObligatorio == "no" && esDocente == true) {
        accion = "Matricular"
    }
    if (esExterno == true && estadoRegistro == "porConfirmar") {
        accion = "Actualizar"
    }
    if (esExterno == true && tipoPersonaDestino == "externo") {
        accion = "Registrar"
    }
    if (esExterno == true && estadoRegistro == "Vigente") {
        accion = "Matricular"
    }
    return accion
}





