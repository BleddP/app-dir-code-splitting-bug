import dynamic from 'next/dynamic'
import { NotLazy } from '@components/NotLazy/NotLazy'

const VeryLazy = dynamic(() =>
  import('@components/VeryLazy/VeryLazy').then(mod => mod.VeryLazy)
)

export const ServerWrapper = () => {
  return (
    <div>
      <NotLazy />
      <VeryLazy />
    </div>
  )
}
