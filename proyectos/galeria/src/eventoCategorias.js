import dataFotos from './datos/fotos';
import { cargarImagen } from './galeria/cargarImagen';
const contenedorCategorias = document.getElementById('categorias');
const galeria = document.getElementById('galeria')

contenedorCategorias.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (e.target.closest('a')){
        galeria.classList.add('galeria--active');
        document.body.style.overflow = 'hidden';

        const categoriaActiva = e.target.closest('a').dataset.categoria;
        const fotos = dataFotos.fotos[categoriaActiva];
        const carousel = document.querySelector(".galeria__carousel-slides")

        const {id, nombre, ruta, descripcion} = fotos[0];
            /* Esta desestructuracion seria como esto:
            
            const id = fotos[0].id;
            const nombre = fotos[0].nombre;
            const ruta = fotos[0].ruta;
            const descripcion = fotos[0].descripcion; */
        cargarImagen(id, nombre, ruta, descripcion);

        carousel.innerHTML = '';

        fotos.forEach((foto) => {
            const slide = `
                <a href="#" class="galeria__carousel-slide">
					<img class="galeria__carousel-image" src="${foto.ruta}" alt="" />
				</a>
            `;

            galeria.querySelector('.galeria__carousel-slides').innerHTML += slide;

            galeria.querySelector('.galeria__carousel-slide').classList.add('galeria__carousel-slide--active');
        });
    }
}); 