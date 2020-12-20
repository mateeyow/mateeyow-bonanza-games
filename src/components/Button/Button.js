import PropTypes from 'prop-types'
import './button.scss'

const Button = ({ children, className = '', variant = 'normal', ...rest }) => {
  const btnClass = variant === 'normal' ? 'btn' : 'btn-primary'

  return (
    <button className={`${btnClass} ${className}`} {...rest}>
      {children}
    </button>
  )
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'normal'])
}

export default Button
