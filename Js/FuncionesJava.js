//Fecha hora
setInterval(reloj,1000)
function reloj(){
    const d=new Date()
    document.getElementById('demo').innerHTML=d.toLocaleDateString();
}
//Fecha hora
setInterval(calendario,1000)
function calendario(){
    const c=new Date()
    document.getElementById('demo1').innerHTML=c.toLocaleTimeString();
}
//cambiar colores
function Color() {
    return Math.floor(Math.random() * 241);
}
//cambiar colores
function parpadear() {
    const titulo = document.getElementById("titulo");
    setInterval(function () {
        let colorR = Color();
        let colorG = Color();
        let colorB = Color();
        titulo.style.color = `rgb(${colorR}, ${colorG}, ${colorB})`;
document.titulo.style.backgroundColor = `rgb(${colorR / 2}, ${colorG / 2}, ${colorB / 2})`; }, 1000);}
//carrusel
function carrusel() {
    const imagenes = ["../IMAGENES/car1.png", "../IMAGENES/car2.png", "../IMAGENES/car3.png"];
    let index = 0;
    const imagenCabecera = document.getElementById('imagenC');

    setInterval(() => {
        imagenCabecera.style.opacity = 0;
        setTimeout(() => {
            index = (index + 1) % imagenes.length;
            imagenCabecera.src = imagenes[index];
            imagenCabecera.style.opacity = 1;
        }, 1000);
    }, 1000);
}
//mostrar texto
function mostrarTexto() {
    document.getElementById('texto').style.display = 'block';
    setTimeout(() => {
        document.getElementById('texto').style.display = 'none';
    }, 10000);
}
function mostrarTexto1() {
    document.getElementById('texto1').style.display = 'block';
    setTimeout(() => {
        document.getElementById('texto1').style.display = 'none';
    }, 10000);
}
function mostrarTexto2() {
    document.getElementById('texto2').style.display = 'block';
    setTimeout(() => {
        document.getElementById('texto2').style.display = 'none';
    }, 10000);
}
//desaparecer redes
function desvanecerredes(imagen) {
    imagen.style.opacity = 0.1;
}
function aparecerredes(imagen) {
    imagen.style.opacity = 1;
}
//funciones
window.onload = () => {
    parpadear();
    carrusel();
};