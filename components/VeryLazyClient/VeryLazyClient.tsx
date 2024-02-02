import Image from 'next/image'
import Homer from '../../assets/simpsons.jpeg'

export const VeryLazyClient = () => {
  return (
    <div style={{ border: '1px solid gray', padding: 12, margin: 12 }}>
      <h2>
        I am very lazy too, let's change some things so the chunk is different
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
