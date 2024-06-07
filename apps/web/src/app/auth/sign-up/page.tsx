import Image from 'next/image'
import Link from 'next/link'

import githubIcon from '@/assets/github.svg'
import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
export default function SignUpPage() {
  return (
    <form
      action=""
      className="space-y-4
    "
    >
      <div className="space-y-1">
        <Label htmlFor="name">Name</Label>
        <Input name="name" id="name" />
      </div>
      <div className=" space-y-1">
        <Label htmlFor="email">E-mail</Label>
        <Input name="email" type="email" id="email" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input name="password" type="password" id="password" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="password_confirmations">Confirm your password</Label>
        <Input
          name="password_confirmations"
          type="password"
          id="password_confirmations"
        />
      </div>

      <Button className="w-full" type="submit">
        Create account
      </Button>
      <Link
        href="/auth/sign-in"
        className={buttonVariants({
          variant: 'link',
          className: 'w-full',
          size: 'sm',
        })}
        type="submit"
      >
        Already registered? Sign in
      </Link>

      <Separator />

      <Button variant="outline" type="submit" className="w-full">
        <Image src={githubIcon} alt="" className="mr-2 size-4 dark:invert" />
        Sign up with Github
      </Button>
    </form>
  )
}
