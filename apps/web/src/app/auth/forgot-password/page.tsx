import Link from 'next/link'

import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
export default function ForgotPage() {
  return (
    <form
      action=""
      className="space-y-4
    "
    >
      <div className=" space-y-1">
        <Label htmlFor="email">E-mail</Label>
        <Input name="email" type="email" id="email" />
      </div>

      <Button className="w-full" type="submit">
        Recover password
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
        sign in instead
      </Link>
    </form>
  )
}
