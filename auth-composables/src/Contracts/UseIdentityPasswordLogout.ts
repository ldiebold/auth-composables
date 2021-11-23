import { Ref, ComputedRef } from 'vue-demi'

type UseIdentityPasswordLogout = () => {
  logout: () => Promise<void>;
  loading: Ref<boolean>;
  hasErrors: ComputedRef<boolean>;
  errors: Ref<{
      type: string;
      message: string;
  }[]>;
  resetStandardErrors: () => void;
  reset: () => void;
}

export default UseIdentityPasswordLogout