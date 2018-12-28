import registerComponents from '../../components'
import registerPresenters from '../components'

export default (({ Vue }) => {
  registerComponents(Vue)
  registerPresenters(Vue)
})
