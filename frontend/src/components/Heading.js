import urlSlug from 'url-slug'
import Children from 'react-children-utilities'

const Heading = ({ children, id, as: Element, ...props }) => {
  const theId = id ?? urlSlug(Children.onlyText(children))
  return (
    <Element id={theId} {...props}>{children}</Element>
  )
}

export default Heading
