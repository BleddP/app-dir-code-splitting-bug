import Link from 'next/link'

/** Add your relevant code here for the issue to reproduce */
const Home = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <div>
        <h4>The problem:</h4>
        <p>
          Next 14 does not properly code-split component that are dynamically
          imported when using a catch-all route such as [...slug]
        </p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h4>Slug pages:</h4>

          <div>
            <Link href="/bundled/server-wrapper">
              With server wrapper (using export * from index.ts)
            </Link>
            <p>
              ↑ This <strong>will not</strong> lazy-load the dyanmically
              imported component (expected)
            </p>
          </div>
          <div>
            <Link href="/bundled/client-wrapper">
              With client wrapper (using export * from index.ts)
            </Link>
            <p>
              ↑ This <strong>will not</strong> lazy-load the dyanmically
              imported component, only because it is exported as * from
              index.ts?
            </p>
          </div>
          <div>
            <Link href="/components/server-wrapper">
              With server wrapper (components)
            </Link>
            <p>
              ↑ This <strong>will not</strong> lazy-load the dyanmically
              imported component
            </p>
          </div>
          <div>
            <Link href="/components/client-wrapper">
              With client wrapper (components)
            </Link>

            <p>
              ↑ This <strong>will</strong> lazy-load the dyanmically imported
              component's Javascript and CSS.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
