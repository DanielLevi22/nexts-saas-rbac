import { Slash } from 'lucide-react'
import Image from 'next/image'

import logo from '@/assets/logo.svg'

import { OrganizationSwitch } from './organization-switcher'
import { ProfileButton } from './profile-button'
export function Header() {
  return (
    <div className="mx-auto flex max-w-[1200px] items-center justify-between">
      <div className="flex items-center gap-3">
        <Image src={logo} alt="logo" className="size-6 dark:invert" />
        <Slash className="size-3 -rotate-[24deg] text-border" />
        <OrganizationSwitch />
      </div>
      <div className="flex items-center gap-4">
        <ProfileButton />
      </div>
    </div>
  )
}
