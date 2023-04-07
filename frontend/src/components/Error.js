/* eslint-disable */
import useTitle from '../hooks/useTitle'

const Error = () => {
  useTitle('Page Not Found - Ricardo Chu')

  return (
    <div id="errorpage">
      <style>{`.App {background-image: url('/assets/texture-forms.png');}`}</style>
      <h1 style={{ fontWeight: '700' }}>
        Error 404! <hr />
        Page Not Found</h1>
    </div>
  )
}

export default Error
