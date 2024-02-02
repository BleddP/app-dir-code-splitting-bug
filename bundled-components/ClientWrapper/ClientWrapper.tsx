'use client'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import { NotLazy } from '@bundled-components'

const VeryLazyClient = dynamic(() =>
  import('@bundled-components').then(mod => mod.VeryLazyClient)
)

export const ClientWrapper = () => {
  const [showNormalImport, setShowNormalImport] = useState(false)
  const [showLazyImport, setShowLazyImport] = useState(false)

  return (
    <div>
      <div>
        <div>
          <input
            type="checkbox"
            id="not-lazy-client"
            name="not-lazy-client"
            checked={showNormalImport}
            onClick={() => setShowNormalImport(!showNormalImport)}
          />
          <label htmlFor="not-lazy-client">
            Show not lazy (no dynamic import)
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="very-lazy-client"
            name="very-lazy-client"
            checked={showLazyImport}
            onClick={() => setShowLazyImport(!showLazyImport)}
          />
          <label htmlFor="very-lazy-client">
            Show lazy (dynamic import, see network tab, not working..)
          </label>
        </div>
      </div>
      {showNormalImport && <NotLazy />}
      {showLazyImport && <VeryLazyClient />}
    </div>
  )
}
