import estilo from "@/estilos/footer.module.css"

export default function Footer(){
    return (
        <div className={estilo.piePagina}>
            <p>Diseñado por Jeremías Haedo Recofsky</p>
            <ul>
                <li><strong>Email:</strong> <a href="mailto:contacto@cocinacomunitaria.com">contacto@cocinacomunitaria.com</a></li>
                <li><strong>Teléfono:</strong> +54 011 123-4567</li>
                <li><strong>Dirección:</strong> 123 Blandengues, Bahia Blanca, Argentina</li>
            </ul>
        </div>
        
    )
}