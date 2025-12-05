import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton, UserProfile } from '@clerk/clerk-react'
import React from 'react'

const App = () => {
  return (
    <>
    <h1>Welcome to the app</h1>

<SignedOut>
    <SignInButton mode='modal'/>
</SignedOut>

<SignedIn>
  <SignOutButton/>
</SignedIn>

<UserButton/>
    </>
  )
}

export default App