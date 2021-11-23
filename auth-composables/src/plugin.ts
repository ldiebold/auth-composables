import PluginOptions, { Provider } from './Types/PluginOptions'
import { App } from 'vue-demi'

function provideFeatures(
    provider: Provider,
    providerName = '',
    app: App
  ) {
  const features = provider.features
  const featureKeys = Object.keys(features)
  featureKeys.forEach(featureKey => {
    if(providerName) {
      app.provide(featureKey, `${providerName}:${features[featureKey]}`)
    } else {
      app.provide(featureKey, features[featureKey])
    }
  })
}

const plugin = (app: App, options: PluginOptions) => {
  const providers = Object.keys(options.providers)
  providers.forEach(providerKey => {
    provideFeatures(providers[providerKey], providerKey, app)
  })
}

export default plugin