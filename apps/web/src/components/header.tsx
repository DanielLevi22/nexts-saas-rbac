import { Slash } from 'lucide-react'
import Image from 'next/image'

import logo from '@/assets/logo.svg'
import { ability } from '@/auth/auth'

import { OrganizationSwitch } from './organization-switcher'
import { ProfileButton } from './profile-button'
import { ThemeSwitcher } from './theme/theme-switcher'
import { Separator } from './ui/separator'
export async function Header() {
  const permissions = await ability()
  return (
    <div className="mx-auto  flex max-w-[1200px] items-center justify-between border-b pb-2">
      <div className="flex items-center gap-3">
        <Image src={logo} alt="logo" className="size-6 dark:invert" />
        <Slash className="size-3 -rotate-[24deg] text-border" />
        <OrganizationSwitch />

        {permissions?.can('get', 'Project') && <p>projetos</p>}
      </div>
      <div className="flex items-center gap-4">
        <ThemeSwitcher />
        <Separator orientation="vertical" className="h-5" />
        <ProfileButton />
      </div>
    </div>
  )
}
