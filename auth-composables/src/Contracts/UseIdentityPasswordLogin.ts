import ValidationErrors from '../Types/ValidationErrors'
import RequestErrors from '../Types/RequestErrors'
import { Ref, ComputedRef } from 'vue-demi'

type UseIdentityPasswordLogin = () => {
  form: Ref<{
    email: string
    password: string
  }>;
  login: () => Promise<void>
  loading: Ref<boolean>
  validationErrors: Ref<ValidationErrors>;
  hasValidationErrors: ComputedRef<boolean>
  hasErrors: ComputedRef<boolean>
  errors: Ref<RequestErrors>;
  resetStandardErrors: () => void
  resetValidationErrors: () => void
  reset: () => void
}

export default UseIdentityPasswordLogin