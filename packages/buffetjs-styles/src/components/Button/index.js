/**
 *
 * Button
 *
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';
import mixins from '../../assets/styles/mixins';

const Button = styled.button`

  /*
  * Theme
  */

  // General style
  height: ${sizes.button.height.large};
  padding: 0 ${sizes.button.padding.large};
  font-weight: 500;
  font-size: 1.3rem;
  line-height: normal;
  border-radius: ${sizes.radius};
  cursor: pointer;
  outline: 0;
  background-color: ${colors.white};
  &:hover {
    ${mixins(colors.lightGreyAlpha).bshadow};
  }
  &:active {
    ${mixins(colors.lightGreyAlpha).bshadow};
  }

  // Specific style
  ${props =>
    props.color === 'primary' &&
    `
      background-color: ${colors.blue};
      color: ${colors.white};
      border: 0;
    `}

  ${props =>
    props.color === 'secondary' &&
    `
      border: 1px solid ${colors.blue};
      color: ${colors.blue};
      padding: 0 ${sizes.button.padding.small};
      height: ${sizes.button.height.small};
    `}}

  ${props =>
    props.color === 'cancel' &&
    `
      border: 1px solid ${colors.brightGrey};
      color: ${colors.brightGrey};
      background-color: transparent;
      :disabled:hover {
        box-shadow: none;
        cursor: initial;
      }
    `}}

  ${props =>
    props.color === 'delete' &&
    `
      border: 1px solid ${colors.orangeBorder};
      background-color: ${colors.orangeBkgd};
      color: ${colors.darkOrange};
      padding: 0 ${sizes.button.padding.small};
    `}

  ${props =>
    props.color === 'success' &&
    `
      border: 1px solid ${colors.green};
      background-color: ${colors.green};
      color: ${colors.white};
      :disabled {
        border: 1px solid ${colors.greyDisabledBkgd};
        background-color: ${colors.greyDisabledBkgd};
        color: ${colors.greyDisabledColor};
        &:hover {
          box-shadow: none;
          cursor: initial;
        }
      }
    `}
`;

Button.defaultProps = {
  color: 'primary',
  icon: false,
  type: 'button',
};

Button.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'cancel',
    'success',
    'delete',
  ]),
  type: PropTypes.string,
};

export default Button;
