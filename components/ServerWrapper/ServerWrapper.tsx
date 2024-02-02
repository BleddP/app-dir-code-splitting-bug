import dynamic from 'next/dynamic'
import { NotLazy } from '@components/NotLazy/NotLazy'

const VeryLazyClient = dynamic(() =>
  import('@components/VeryLazyClient/VeryLazyClient').then(
    mod => mod.VeryLazyClient
  )
)

export const ServerWrapper = () => {
  return (
    <div>
      <NotLazy />
      <VeryLazyClient />
    </div>
  )
}
