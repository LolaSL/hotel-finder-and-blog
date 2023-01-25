import { authenticate } from 'passport'

export const userAuth = authenticate('jwt', { session: false })