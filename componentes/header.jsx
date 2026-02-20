import Image from "next/image"
import estilos from "@/estilos/header.module.css"

export default function Header(){
    return (
            <div className={estilos.cabezal}>
      <Image
        className={estilos.logo}
        src="/CocinaComunitaria_logo.png"
        alt="logo"
        width={150}
        height={90}
        priority
        style={{ objectFit: "contain" }}
      />
    </div>
)
}