import { FaSquareInstagram } from 'react-icons/fa6'
import { FaSquareWhatsapp } from 'react-icons/fa6'
import { FaSquareGithub } from 'react-icons/fa6'
import { FaSquareEnvelope } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa6'
import type { IconType } from 'react-icons'
import classNames from 'classnames'
import styles from './contact.module.css'
import { useLanguage } from '../context/languageContext'

type ContactOption = {
    selector: IconType,
    link: string
}

const contacts: ContactOption[] = [
    {
        selector: FaSquareEnvelope,
        link: 'mailto:marcusbuzette@hotmail.com'
    },
    {
        selector: FaLinkedin,
        link: 'https://www.linkedin.com/in/marcus-buzette-467862116/'
    },
    {
        selector: FaSquareGithub,
        link: 'https://github.com/marcusbuzette'
    },
    {
        selector: FaSquareInstagram,
        link: 'https://www.instagram.com/marcusbuzette/'
    },
    {
        selector: FaSquareWhatsapp,
        link: 'https://wa.me/5531985320899'
    },
]

const Contact = () => {
    const {t} = useLanguage();
    return (
        <div className={classNames(styles.contactSection, 'py-10')} id='contact'>
            <h1 className='sectionTitle uppercase text-3xl tablet:text-4xl pb-5 tracking-wider text-center'>{t('contactTitle')}</h1>
            <div className='grid tablet:flex gap-5 w-4/5 desktop:w-1/2 mx-auto items-center'>
                <img className='my-10 mb-2 h-48 w-48 rounded-full flex mx-auto' src='https://media.licdn.com/dms/image/v2/C4E03AQHm-66xsb8XvQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1562413983363?e=1761782400&v=beta&t=UjTLfyUZkvpZE1cLqk9dh-MpzgWF7irgnHNhnLk1A6c'></img>
                <div>
                    <p className={classNames(styles.contactText, 'py-6 text-lg text-center desktop:text-left')}>{t('contactText')}</p>
                    <div className='flex justify-center desktop:justify-left mx-auto gap-3 items-center'>
                        {contacts.map(({ selector: Icon, link }, i) => (
                            <a key={i} href={link} target="_blank" rel="noopener noreferrer">
                                <Icon className={classNames(styles.contactIcon, "w-10 h-10")} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact