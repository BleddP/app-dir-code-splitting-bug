'use client'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import { NotLazy } from '@components/NotLazy/NotLazy'

const VeryLazyClient = dynamic(() =>
  import('@components/VeryLazyClient/VeryLazyClient').then(
    mod => mod.VeryLazyClient
  )
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
            onChange={() => setShowNormalImport(!showNormalImport)}
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
            onChange={() => setShowLazyImport(!showLazyImport)}
          />
          <label htmlFor="very-lazy-client">
            Show lazy (dynamic import, see network tab)
          </label>
        </div>
      </div>
      {showNormalImport && <NotLazy />}
      {showLazyImport && <VeryLazyClient />}
    </div>
  )
}
