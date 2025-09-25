import styles from './carouselSlide.module.css'
import classNames from 'classnames'
import type { CarrouselSlideProps } from '../../../../types/types'
import DOMPurify from 'dompurify'
import ReactPlayer from 'react-player'

function CarouselSlide(props: CarrouselSlideProps) {
  return (
    <section id='projects'>
      <div className={`${styles.slideWrapper} grid desktop:flex gap-3 overflow-hidden rounded-md mx-auto w-11/12 desktop:min-h-80 justify-between relative`}>
        <div className='w-full desktop:w-3/5 desktop:pt-8 order-2 desktop:order-1 bg-transparent rounded-md relative'>
          {props.mediaType == "image" ?
            <img className='h-full w-auto object-cover object-left' src={props.mediaLink}></img>
            :
            <div className={`relative w-full ${styles.ytWrapper} mx-auto`}>
              <ReactPlayer
                src={props.mediaLink}
                width="100%"
                height="100%"
                className={`${styles.videoOverride} absolute`}
                controls
              />
            </div>
          }
        </div>
        <div className={`w-full desktop:w-2/5 ${styles.projectInfo} order-1 desktop:order-2 rounded-md p-5`}>
          <h2 className={`text-4xl text-center desktop:text-left uppercase font-semibold ${styles.projectTitle}`}>{props.projectName}</h2>
          {props.habilitiees.length > 0 ? <div className='flex flex-wrap justify-center desktop:justify-start pt-2 gap-3'>
            {
              props.habilitiees.map((hability) => {
                return (<span key={hability} className={classNames('py-1 px-2 font-semibold text-nowrap rounded-md', styles.habilityTag)}>{hability}</span>)
              })
            }
          </div> : <></>}
          <p
            className={`prose ${styles.projectDescription} text-normal pt-5`}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(props.projectDescription)
            }}
          />
        </div>
      </div>

    </section>
  )
}

export default CarouselSlide