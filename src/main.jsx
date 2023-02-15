import { render } from 'preact'

import Counter from './Counter.jsx'
import SemanticButton from './SemanticButton.jsx'

const App = () =>
  <>
    <Counter initialCount={5} />
    <SemanticButton />
  </>

render(<App />, document.body)
