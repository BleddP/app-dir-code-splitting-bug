import Image from 'next/image'
import Homer from '../../assets/simpsons.jpeg'
import styles from './very-lazy-client.module.scss'

export const VeryLazyClient = () => {
  return (
    <div className={styles['very-lazy-client']}>
      <h2>
        <h4>This is a very lazy component, imported via dynamic import</h4>
      </h2>
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
