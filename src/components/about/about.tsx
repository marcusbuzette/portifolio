
import styles from './about.module.css'
import classNames from "classnames";
import Button from "../button/button";
import { FaDownload } from "react-icons/fa6";
import { useLanguage } from '../context/languageContext';
import DOMPurify from 'dompurify'

const resumeLinkLanguages: Record<'pt' | 'en', string> = {
    pt: "https://marcusbuzette.com/files/Curriculo-MarcusBuzette.pdf",
    en: "https://marcusbuzette.com/files/CV-MarcusBuzette.pdf"
}

function About() {
    const { t, language } = useLanguage()
    const resumeLink:string = resumeLinkLanguages[language];
    return (
        <section className={classNames('py-10 w-full', styles.about)} id='about'>
            <div className={classNames('mx-auto py-10 w-11/12 desktop:w-full px-6 desktop:px-20', styles.aboutCard)}>
                <h1 className={classNames("sectionTitle text-3xl tablet:text-4xl mb-8 tracking-wider text-center uppercase")}>{t('about')}</h1>
                <p className="" dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(t("aboutText"))
                            }}>
                </p>
                <div className="pt-5 flex justify-center">
                    <Button onClick={downloadCV}>{t("resumeButton")} <FaDownload /></Button>
                </div>
            </div>
        </section>
    )


    function downloadCV() {
        window.open(resumeLink, "_blank");
    }
}


export default About