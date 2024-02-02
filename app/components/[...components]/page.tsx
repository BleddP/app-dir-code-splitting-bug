import { ServerWrapper } from '@components/ServerWrapper/ServerWrapper'
import { ClientWrapper } from '@components/ClientWrapper/ClientWrapper'

/** Add your relevant code here for the issue to reproduce */
const SlugPage = ({ params }) => {
  const slug = params.components[0]

  return (
    <div>
      <h1>Page: {slug}</h1>
      {slug === 'server-wrapper' && (
        <div>
          <h4>Wihout dynamic client wrapper:</h4>
          <ServerWrapper />
        </div>
      )}
      {slug === 'client-wrapper' && (
        <div>
          <h4>With dynamic client wrapper:</h4>
          <ClientWrapper />
        </div>
      )}
    </div>
  )
}

export default SlugPage
