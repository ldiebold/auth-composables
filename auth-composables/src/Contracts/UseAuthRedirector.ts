import { RouteLocationRaw, Router } from 'vue-router'
import { MaybeRef } from '@vueuse/core'
import { Ref } from 'vue-demi'

export type UserOnCheckedFunction = (user: unknown | null) => void;
export type RedirectTriggers = 'authenticated' | 'unauthenticated' | 'error';

export interface UseAuthRedirectorReturn {
  execOnAuthStateChange: () => void;
  execOnAuthStateEnsured: () => void;
  exec: () => void;
  redirectTo: MaybeRef<RouteLocationRaw>;
  checking: Ref<boolean>;
  onChecked: Ref<UserOnCheckedFunction | null>;
}

export type UseAuthRedirector = (
  redirectOn: RedirectTriggers,
  redirectTo?: MaybeRef<RouteLocationRaw>,
  router?: Router
) => UseAuthRedirectorReturn
