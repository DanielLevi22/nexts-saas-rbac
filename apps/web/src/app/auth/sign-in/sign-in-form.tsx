'use client'

import { AlertTriangle, Loader2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { type FormEvent, useState, useTransition } from 'react'

import githubIcon from '@/assets/github.svg'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

import { signInWithEmailAndPassword } from './actions'

export default function SignInForm() {
  const [isPending, startTransaction] = useTransition()
  const [{ errors, message, success }, setFormaState] = useState<{
    success: boolean
    message: string | null
    errors: Record<string, string[]> | null
  }>({
    success: false,
    message: null,
    errors: null,
  })

  async function handleSignIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    startTransaction(async () => {
      const result = await signInWithEmailAndPassword(data)
      setFormaState(result)
    })
  }

  return (
    <form
      onSubmit={handleSignIn}
      className="space-y-4
"
    >
      {success === false && message && (
        <Alert variant="destructive">
          <AlertTriangle className="size-4" />
          <AlertTitle>Sign in failed!</AlertTitle>
          <AlertDescription>
            <p>{message}</p>
          </AlertDescription>
        </Alert>
      )}

      <div className=" space-y-1">
        <Label htmlFor="email">E-mail</Label>
        <Input name="email" type="email" id="email" />
        {errors?.email && (
          <p className="text-sm font-medium text-red-500 dark:text-red-400">
            {errors.email[0]}
          </p>
        )}
      </div>
      <div className=" space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input name="password" type="password" id="password" />
        {errors?.password && (
          <p className="text-sm font-medium text-red-500 dark:text-red-400">
            {errors.password[0]}
          </p>
        )}
        <Link
          href="/auth/forgot-password"
          className="text-xs font-medium text-foreground hover:underline"
        >
          Forgot your password?
        </Link>
      </div>

      <Button className="w-full" type="submit" disabled={isPending}>
        {isPending ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          'Sign in with e-mail'
        )}
      </Button>

      <Link
        href="/auth/sign-up"
        className={buttonVariants({
          variant: 'link',
          className: 'w-full',
          size: 'sm',
        })}
        type="submit"
      >
        Create new account
      </Link>

      <Separator />

      <Button variant="outline" type="submit" className="w-full">
        <Image src={githubIcon} alt="" className="mr-2 size-4 dark:invert" />
        Sign in with Github
      </Button>
    </form>
  )
}
