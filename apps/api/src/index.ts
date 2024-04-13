import { ability } from '@saas/auth'

const userCanntInviteSemenoeElse = ability.can('invite', 'User')
const deletes = ability.can('delete', 'User')

console.log(deletes)
