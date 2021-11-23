import { RouteLocationRaw, Router } from 'vue-router'
import { MaybeRef } from '@vueuse/core'
import { Ref } from 'vue-demi'

type UserOnCheckedFunction = (user: unknown | null) => void;
type RedirectTriggers = 'authenticated' | 'unauthenticated' | 'error';

type UseAuthRedirector = (
  redirectOn: RedirectTriggers,
  redirectTo: MaybeRef<RouteLocationRaw>,
  router?: Router
) => {
  execOnAuthStateChange: () => void;
  execOnAuthStateEnsured: () => void;
  exec: () => void;
  redirectTo: MaybeRef<RouteLocationRaw>;
  checking: Ref<boolean>;
  onChecked: Ref<UserOnCheckedFunction | null>;
}

export default UseAuthRedirector