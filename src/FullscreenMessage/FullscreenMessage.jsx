import React, { Component } from "react"
import styled, { keyframes } from "styled-components"
import PropTypes from "prop-types"
/*
    File: FullscreenMessage.jsx
    Description: Overlays an entire message over the browser window.

    Props:
    isVisible: PropTypes.bool,  Sets if the message is visible or not. 
     displayDots: PropTypes.bool, Sets whether or not to show the loading dots. 
     backgroundColor: PropTypes.string, Sets the background color

*/

class FullscreenMessage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.MessageWindow = React.createRef()
  }
  componentDidMount() {}
  componentWillUnmount() {}
  /*
  WIP Coming soon...
 SetWindowBlur = () => {
    if (this.MessageWindow.current != null) {
      console.log(this.MessageWindow.current.parentElement.style)
      this.MessageWindow.current.parentElement.style.WebkitFilter = "blur(5px)"
    }
  }


  */

  render() {
    try {
      return this.props.isVisible ? (
        <>
          <div ref={this.MessageWindow}>
            <ModelMask bColor={this.props.backgroundColor}>
              <ModalWrapper onClick={this.onMaskClick}>
                <ModalContainer>
                  <MessageText>
                    <div>{this.props.children}</div>
                  </MessageText>
                  {this.props.displayDots ? (
                    <MessageText>
                      <Blinking delay={1}>.</Blinking>
                      <Blinking delay={0.25}>.</Blinking>
                      <Blinking delay={0.5}>.</Blinking>
                    </MessageText>
                  ) : null}
                </ModalContainer>
              </ModalWrapper>
            </ModelMask>
          </div>
        </>
      ) : null
    } catch (e) {
      if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
        console.log(e)
      }
      return null
    }
  }
}
export default FullscreenMessage
FullscreenMessage.propTypes = {
  children: PropTypes.node,
  isVisible: PropTypes.bool,
  displayDots: PropTypes.bool,
  backgroundColor: PropTypes.string,
}
FullscreenMessage.defaultProps = {
  children: "",
  isVisible: false,
  displayDots: true,
  backgroundColor: "rgba(255, 255, 255, 0.9)",
}
// Styling for the Modal Components **********
const ModelMask = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.bColor};
  display: table;
  transition: opacity 0.3s ease;
` /* Animations for the container */
const fadeInEffect = keyframes`
from {
  -webkit-transform: scale3d(1.3, 1.3, 1.3);
  transform: scale3d(1.3, 1.3, 1.3);
}
`

/* This styling is for the corner buttons containing the content */

const ModalWrapper = styled.div`
  display: table-cell;
  vertical-align: middle;
`
/* This styling is for the actual border containing the content */
const ModalContainer = styled.div`
  z-index: 101;

  border-radius: 4px;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif !important;
  transition: all 0.3s ease;
  animation: ${fadeInEffect} forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  animation-duration: 0.13s;

  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const MessageText = styled.div`
  color: #000;
  opacity: 1;
  font-size: 3em;
  line-height: 1em;
`
const BlinkAnim = keyframes`
50% { color: transparent }
`
const Blinking = styled.a`
  animation: ${BlinkAnim} forwards ease-in-out;
  animation-duration: 1.2s;
  animation-delay: ${props => `` + props.delay + `s`};
  animation-iteration-count: infinite;
`
