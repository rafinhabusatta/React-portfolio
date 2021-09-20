import overlayBackground from "./assets/background.jpg"
import profilePicture from "./assets/header-image.jpg"

export const data = {
    user: {
        background: overlayBackground,
        picture: profilePicture,
        name: "Rafael Lacerda",
        description: "Front-end Developer"
    },

    content: [
        {
            title: "Go Beyond",
            posts: [
                {
                    background: "background",
                    link: "link.com.br",
                    title: "E-commerce em HTML & CSS",
                    description: "Página inical criada em HTML & CSS, utilizando JavaScript para o slider"
                },
                {
                    background: "background",
                    link: "link.com.br",
                    title: "App do Salário do Vendedor em JS",
                    description: "Página inical criada em HTML & CSS, com uso do framework Bootstrap, e lógica do programa em JavaScript, calculando o salário final do vendedor."
                },
                {
                    background: "background",
                    link: "link.com.br",
                    title: "Portfolio em React JS",
                    description: "Página criada com componentes dinâmicos, com estilização em CSS e uso de estados nos botões."
                },
            ]
        }
    ],

    navigaton: {
        linkedin: "https://www.linkedin.com/in/rafabusatta/",
        behance: "https://www.behance.net/rafabusatta",
        github: "https://github.com/rafinhabusatta"
    }
}