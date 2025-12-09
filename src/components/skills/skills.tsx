import styles from './skills.module.css'
import classNames from 'classnames'
import { useLanguage } from '../context/languageContext';

type SkillCard = {
    title: string,
    skillList: string[]
}

const skillsByLang: Record<'pt' | 'en', SkillCard[]> = {
    pt: [
        {
            title: "Programação",
            skillList: ['C#', 'Unity', 'Git', 'HLSL', 'HTML', 'CSS', 'TypeScript', 'C', 'Java', 'Python']
        },
        {
            title: "Gestão e Projeto",
            skillList: ['Trello', 'Jira', 'Slack', 'Scrum', 'Gerenciamento de Equipe']
        },
        {
            title: "Design",
            skillList: ['Game Design', 'Level Design', 'Shaders']
        },
        {
            title: "Idiomas",
            skillList: ['Português (nativo)', 'Ingles (fluente)']
        }
    ],
    en: [
        {
            title: "Programming",
            skillList: ['C#', 'Unity', 'Git', 'HLSL', 'HTML', 'CSS', 'TypeScript', 'C', 'Java', 'Python']
        },
        {
            title: "Project & Management",
            skillList: ['Trello', 'Jira', 'Slack', 'Scrum', 'Gerenciamento de Equipe']
        },
        {
            title: "Design",
            skillList: ['Game Design', 'Level Design', 'Shaders']
        },
        {
            title: "Languages",
            skillList: ['Portuguese (native)', 'English (fluent)']
        }
    ]
}

function Skills() {
    const { t, language } = useLanguage();
    const skills = skillsByLang[language];
    return (
        <section className='py-10' id='skills'>
            <h1 className='sectionTitle uppercase text-3xl tablet:text-4xl pb-5 tracking-wider text-center'>{t('skillsTitle')}</h1>
            <div className='pt-14 skillCard gap-3 grid  desktop:flex w-11/12 mx-auto'>
                {
                    skills.map((skill) => {
                        return (
                            <div key={skill.title} className={classNames('px-5 py-8 desktop:py-5 gap-3 rounded-lg w-full mx-auto', styles.skillCard)}>
                                <h2 className='text-2xl text-white font-bold pb-4'>{skill.title}</h2>
                                <div className='flex gap-2 flex-wrap'>
                                    {skill.skillList.map((skillItem) => (<span key={skillItem} className={classNames('block text-sm font-semibold rounded-md py-1 px-2', styles.skillItem)}> {skillItem}</span>))}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Skills