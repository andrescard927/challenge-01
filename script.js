const textarea = document.querySelector(".text-area");
const mensaje = document.querySelector(".msg");
const copy = document.querySelector(".copy")

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

document.querySelector('.encrypt-btn').addEventListener('click', btnEncriptar);
document.querySelector('.decrypt-btn').addEventListener('click', btnDesencriptar);
document.querySelector('.copy-btn').addEventListener('click', cpy);

function btnEncriptar() {
    const textoEncriptado = encriptar(textarea.value);
    if (textoEncriptado) {
        mensaje.value = textoEncriptado;
        textarea.value = "";
    }
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textarea.value);
    if (textoDesencriptado) {
        mensaje.value = textoDesencriptado;
    }
}

function cpy() {
    const btncopiar = mensaje.value;
    navigator.clipboard.writeText(btncopiar);
    copy.innerHTML = "copied";
}

function encriptar(stringEncriptado) {
    if (!stringEncriptado) {
        alert("Por favor introduzca un texto a encriptar");
        return;
    }
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()
    for (let i = 0; i < matrizCodigo.length; i++) {
        stringEncriptado = stringEncriptado.replace(new RegExp(matrizCodigo[i][0], "g"), matrizCodigo[i][1]);
    }

    return stringEncriptado;
}

function desencriptar(stringDesencriptado) {
    if (!stringDesencriptado) {
        alert("Por favor introduzca un texto a desencriptar");
        return;
    }
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()
    for (let i = 0; i < matrizCodigo.length; i++) {
        stringDesencriptado = stringDesencriptado.replace(new RegExp(matrizCodigo[i][1], "g"), matrizCodigo[i][0]);
    }
    return stringDesencriptado;
}
