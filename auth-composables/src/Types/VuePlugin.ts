import { App } from 'vue-demi'
import PluginOptions from './PluginOptions'

type VuePlugin = (app: App, options: PluginOptions) => void

export default VuePlugin

export {
  VuePlugin
}