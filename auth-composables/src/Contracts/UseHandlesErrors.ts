import ValidationErrors from '../Types/ValidationErrors'
import { ComputedRef, Ref } from 'vue-demi'

type UseHandlesErrors = () => {
  validationErrors: ValidationErrors
  hasValidationErrors: ComputedRef<boolean>;
  hasErrors: ComputedRef<boolean>;
  errors: Ref<{
      type: string;
      message: string;
  }[]>;
  resetStandardErrors: () => void;
  resetValidationErrors: () => void;
  reset: () => void;
  fromResponse: () => void;
}
export default UseHandlesErrors