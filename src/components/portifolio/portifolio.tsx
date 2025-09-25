import Carrousel from '../carrousel/carrousel'
import styles from './portifolio.module.css'
import { useLanguage } from '../context/languageContext';


function Portifolio() {
  const { t } = useLanguage()
  return (
    <section className={`${styles.portifolio} py-10 pb-36`} id='projects'>
      <h1 className='sectionTitle text-3xl tablet:text-4xl mb-8 tracking-wider text-center uppercase'>{t('projects')}</h1>
      <Carrousel></Carrousel>
    </section>
  )
}

export default Portifolio