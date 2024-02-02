import Image from 'next/image'
import Homer from '../../assets/simpsons.jpeg'
import styles from './very-lazy.module.scss'

export const VeryLazy = () => {
  return (
    <div className={styles['very-lazy']}>
      <h4>This is a very lazy component</h4>
      <Image
        src={Homer}
        alt="lazy"
        width={400}
        height={200}
        style={{ objectFit: 'cover' }}
      />
    </div>
  )
}
