import { Ref, ComputedRef } from 'vue-demi'

interface AuthState {
  authIsReady: Ref<boolean>
  isAuthenticated: ComputedRef<boolean>
  user: Record<string | number, unknown>
}

export default AuthState

export {
  AuthState
}