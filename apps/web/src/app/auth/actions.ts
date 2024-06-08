'use server'

import { redirect } from 'next/navigation'

export async function signInWithGithUb() {
  const githubSignInURL = new URL(
    'login/oauth/authorize',
    'https://github.com/',
  )
  githubSignInURL.searchParams.set('client_id', 'c1c4850ee05becdcd79a')
  githubSignInURL.searchParams.set(
    'redirect_uri',
    'http://localhost:3000/api/auth/callback',
  )
  githubSignInURL.searchParams.set('scope', 'user')

  redirect(githubSignInURL.toString())
}