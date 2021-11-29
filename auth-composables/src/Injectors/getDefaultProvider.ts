import { DefaulAuthProviderSymbol } from '../Symbols/defaultProviderSymbol'
import { inject } from 'vue'

export const getDefaultProvider = (): string => {
  const defaultAuthProvider = inject(DefaulAuthProviderSymbol)
  if (defaultAuthProvider) {
    return defaultAuthProvider
  }
  throw new Error('default auth provider key not found')
}
