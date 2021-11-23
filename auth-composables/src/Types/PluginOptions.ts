import UseIdentityPasswordRegister from '../Contracts/UseIdentityPasswordRegister'
import UseIdentityPasswordLogin from '../Contracts/UseIdentityPasswordLogin'
import UseIdentityPasswordLogout from '../Contracts/UseIdentityPasswordLogout'
import UseFetchUser from '../Contracts/UseFetchUser'
import UseAuthState from '../Contracts/UseAuthState'
import UseAuthenticatedRedirector from '../Contracts/UseAuthenticatedRedirector'
import UseUnauthenticatedRedirector from '../Contracts/UseUnauthenticatedRedirector'
import UseHandlesErrors from '../Contracts/UseHandlesErrors'

interface FeaturesOptions {
  'identityPassword:register': UseIdentityPasswordRegister
  'identityPassword:login': UseIdentityPasswordLogin
  'logout': UseIdentityPasswordLogout
  'fetchUser': UseFetchUser
  'authState': UseAuthState
  'redirector:authenticated': UseAuthenticatedRedirector
  'redirector:unauthenticated': UseUnauthenticatedRedirector
  'errorHandling': UseHandlesErrors
}

interface Provider {
  features: FeaturesOptions
}

interface Providers {
  [index: string]: Provider
}

interface PluginOptions {
  default: string
  providers: Providers
}

export default PluginOptions

export {
  PluginOptions,
  Providers,
  Provider
}