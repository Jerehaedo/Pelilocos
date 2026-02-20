import Image from "next/image"
import estilos from "@/estilos/header.module.css"

export default function Header(){
    return (
            <div className={estilos.cabezal}>
      <Image
        className={estilos.logo}
        src="/pelilocos_icon.png"
        alt="Pelilocos"
        width={58}
        height={58}
        priority
      />
      <h1 className={estilos.titulo}>Pelilocos</h1>
    </div>
)
}