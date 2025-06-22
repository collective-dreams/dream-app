'use client'

import { HomeScreen } from '@dream-app/app'
import { api } from '~/utils/api'

export default function HomePage() {
  const hello = api.hello.useQuery({ name: 'Developer' })
  const test = api.test.useQuery()
  const simple = api.simple.useQuery()

  return (
    <>
      <HomeScreen />
      <div style={{ 
        position: 'fixed', 
        bottom: 20, 
        right: 20, 
        background: 'white',
        padding: '15px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ margin: 0, marginBottom: 10 }}>tRPC Status:</h3>
        <p style={{ margin: 0 }}>
          Hello: {hello.isLoading ? 'Loading...' : hello.error ? hello.error.message : hello.data?.greeting}
        </p>
        <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>
          Test: {test.isLoading ? 'Loading...' : test.error ? test.error.message : test.data?.message}
        </p>
        <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>
          Simple: {simple.isLoading ? 'Loading...' : simple.error ? simple.error.message : simple.data}
        </p>
      </div>
    </>
  )
}