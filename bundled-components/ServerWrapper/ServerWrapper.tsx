import dynamic from 'next/dynamic'
import { NotLazy } from '@bundled-components'

const VeryLazy = dynamic(() =>
  import('@bundled-components').then(mod => mod.VeryLazy)
)

export const ServerWrapper = () => {
  return (
    <div>
      <NotLazy />
      <VeryLazy />
    </div>
  )
}
