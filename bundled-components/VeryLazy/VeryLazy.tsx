import Image from 'next/image'
import Homer from '../../assets/simpsons.jpeg'

export const VeryLazy = () => {
  return (
    <div style={{ border: '1px solid gray', padding: 12, margin: 12 }}>
      <h4>This is a very lazy component, imported via dynamic import</h4>
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
