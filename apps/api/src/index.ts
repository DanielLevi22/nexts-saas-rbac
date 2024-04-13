import { defineAbilityFor } from '@saas/auth'

const ability = defineAbilityFor({ role: 'MEMBER' })

const userCanntInviteSemenoeElse = ability.can('invite', 'User')
const deletes = ability.can('delete', 'User')

console.log(deletes, userCanntInviteSemenoeElse)
