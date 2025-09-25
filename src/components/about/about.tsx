
import styles from './about.module.css'
import classNames from "classnames";
import Button from "../button/button";
import { FaDownload } from "react-icons/fa6";
import { useLanguage } from '../context/languageContext';
import DOMPurify from 'dompurify'

function About() {
    const { t } = useLanguage()
    return (
        <section className={classNames('py-10 w-full', styles.about)} id='about'>
            <div className={classNames('mx-auto py-10 px-8 desktop:px-20', styles.aboutCard)}>
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
}

function downloadCV() {
    window.open("https://marcusbuzette.s3.sa-east-1.amazonaws.com/files/Curriculo-MarcusBuzette.pdf", "_blank");
}

export default About