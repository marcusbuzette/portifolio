import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

type Language = 'pt' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations: Record<Language, any> = {
  pt: {
    home: "Início",
    projects: "Projetos",
    about: "Sobre Mim",
    contact: "Contato",
    contactTitle: "Vamos Conversar",
    contactText: "Interessado em colaborar em um projeto ou tirar uma ideia do papel? Entre em contato!",
    skills: "Habilidades",
    skillsTitle: "Minas Habilidades",
    switchLang: "EN",
    title: "Marcus Buzette",
    aboutText: `Olá! Sou Marcus Buzette, desenvolvedor de jogos em formação e apaixonado por criar experiências 
                    interativas que unam desafio, narrativa e diversão. Atualmente curso o Bacharelado em 
                    Game Development na PUC Minas (7º semestre), onde tenho desenvolvido projetos em Unity, C# e 
                    programação de mecânicas de jogo, sempre explorando como o design pode transformar a experiência
                     do jogador.
                    <br></br>
                    Antes de migrar para a área de games, atuei por vários anos como desenvolvedor web, com foco em Angular 
                    e Node.js, trabalhando em equipes internacionais e em contato direto com clientes. Essa trajetória foi 
                    fortalecida pela minha graduação em Engenharia de Computação pelo CEFET-MG, que me deu uma base sólida 
                    em programação, tecnologia, desenvolimento de projetos e resolução de problemas.
                    <br></br>
                    Hoje, busco unir esse conhecimento técnico com minha paixão por jogos para construir mundos imersivos, 
                    sistemas bem estruturados e experiências que inspirem pessoas, assim como fui inspirado quando criança.`,
    resumeButton: "Currículo",
    footer: "por Marcus Buzette"
  },
  en: {
    home: "Home",
    projects: "Projects",
    about: "About Me",
    contact: "Contact",
    contactTitle: "Let's Talk",
    contactText: "Interested in collaborating on a project or bringing an idea to life? Get in touch!",
    skills: "Skills",
    skillsTitle: "My Skills",
    switchLang: "PT",
    title: "Marcus Buzette",
    aboutText: `Hello! I'm Marcus Buzette, a game developer in training, passionate about creating interactive experiences that combine challenge, narrative, and fun. I am currently pursuing a Bachelor's degree in Game Development at PUC Minas (7th semester), where I have been working on projects in Unity and C#, programming game mechanics, and constantly exploring how design can enhance the player experience.
                <br /><br />
                Before transitioning into the games industry, I worked for several years as a web developer, focusing on Angular and Node.js, collaborating with international teams and directly with clients. This path was strengthened by my degree in Computer Engineering from CEFET-MG, which provided me with a solid foundation in programming, technology, project development, and problem-solving.
                <br /><br />
                Today, I aim to combine this technical knowledge with my passion for games to build immersive worlds, well-structured systems, and experiences that inspire people—just as I was inspired when I was a child.`,
    resumeButton: "CV",
    footer: "by Marcus Buzette"
  },
}


export function LanguageProvider({ children }: { children: ReactNode }) {
  const browserLang = navigator.language.slice(0, 2) // pega "pt" ou "en"
  const initialLang: Language = browserLang === 'en' ? 'en' : 'pt'

  const [language, setLanguage] = useState<Language>(initialLang)

  function t(key: string) {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage precisa estar dentro de LanguageProvider")
  return context
}
