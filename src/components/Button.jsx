import React,{useState} from 'react';
import propTypes from 'prop-types';
import styles from '../styles/Button.module.css'
import Icon from './Icon';

const Button = (props) => {

  const [hover, setHover] = useState(false);

  const toggleHover = ()=>{
    setHover(!hover);
  }

  const {
    type,
    onClick,
    disabled,
    icon,
    label,
    children,
    btnColor = 'teal',
    labelColor,
    style
  } = props;

  const commonStyles = {
    backgroundColor : btnColor,
    color           : labelColor || 'white'
  };
  const outlineStyles = {
    border          : `1px solid ${btnColor}`,
    color           : btnColor,
    backgroundColor : 'white'
  };
  const outlineHoverStyle = {
    color           : labelColor || 'white',
    backgroundColor : btnColor
  };
  const roundedStyle = {
    backgroundColor : btnColor,
    color           : labelColor || 'white',
    borderRadius    : '25px'
  };
  const disabledStyle = {
    cursor          : 'default',
    backgroundColor : btnColor,
    color           : labelColor || 'white',
    opacity         : 0.4
  };
  const blockStyles = {
    width  : '95%',
    margin : '0 auto'
  };

  const smallBtn  = {
    width  : '20%',
    margin : '0 auto', 
  };

  const mediumBtn  = {
    width  : '60%',
    margin : '0 auto'
  };


  let btnStyle;
  switch (type) {
    case 'rounded':
        btnStyle = roundedStyle;
      break;
      case 'small':
        btnStyle = smallBtn;
      break;
      case 'medium':
        btnStyle = mediumBtn;
      break;
      case 'block':
        btnStyle = blockStyles;
      break;
      case 'outline':
        if(hover){
          btnStyle = outlineHoverStyle;
        }else{
          btnStyle = outlineStyles;
        }
      break;
  
      default:
      btnStyle = {
        backgroundColor : btnColor,
        color : labelColor || 'white',
      }
      break;
  }
 
  if(icon){
    return (
      <button
        type={type}
        onClick={!disabled ? onClick :() => {}}
        disabled={disabled}
        labelcolor={labelColor}
        className={styles.btn}
        label={label}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        style={
          disabled ?
            {...commonStyles, ...btnStyle, ...disabledStyle, ...styles}
            :
            {...commonStyles, ...btnStyle, ...style}
        }
        
      >
        <Icon

        />
        {children || label}
      </button>
    )
  }else{
    return (
      <button
        type={type}
        onClick={!disabled ? onClick :() => {}}
        disabled={disabled}
        labelcolor={labelColor}
        className={styles.btn}
        label={label}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        style={
          disabled ?
            {...commonStyles, ...btnStyle, ...disabledStyle, ...styles}
            :
            {...commonStyles, ...btnStyle, ...style}
        }
        
      >
        {children || label}
      </button>
    )
  }

}


Button.defaultProps = {
  label:'Button'
}

Button.propTypes = {
  type: propTypes.string,
  onClick: propTypes.func,
  icon: propTypes.bool,
  disable: propTypes.bool,
  color: propTypes.object,
  className: propTypes.string,
  label: propTypes.string,
  style: propTypes.object,
  onMouseEnter: propTypes.func,
  onMouseLeave: propTypes.func,
  labelcolor : propTypes.string,
};

export default Button;