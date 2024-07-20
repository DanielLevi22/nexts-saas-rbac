import { XCircle } from 'lucide-react'
import { redirect } from 'next/navigation'

import { getCurrentOrg } from '@/auth/auth'
import { Button } from '@/components/ui/button'
import { shutdownOrganization } from '@/http/shutown-organization'

export function ShutdownOrganizationButton() {
  async function ShutdownOrganizationAction() {
    'use server'
    const currentOrg = getCurrentOrg()

    await shutdownOrganization({ org: currentOrg! })
    redirect('/')
  }

  return (
    <form action={ShutdownOrganizationAction}>
      <Button type="submit" variant="destructive" className="w-56">
        <XCircle className="mr-2 size-4" />
        Shutdown organization
      </Button>
    </form>
  )
}
