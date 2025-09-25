import classNames from 'classnames'
import styles from './footer.module.css'
import { useLanguage } from '../context/languageContext';

const year = new Date().getFullYear();

const Footer = () => {
  const {t} = useLanguage();
  return (
    <div className={classNames( styles.footerSection, 'py-8')}>
        <p className='text-center text-white font-medium'>© {year} {t('footer')} </p>
    </div>
  )
}

export default Footer