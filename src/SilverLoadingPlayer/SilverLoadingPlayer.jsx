import React, { Component } from "react"
import styled, { keyframes } from "styled-components"
import PropTypes from "prop-types"
import { LocationProvider } from "@reach/router"

class SilverLoadingPlayer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    try {
      return (
        <OutsideWrapper>
          <Header>
            <LoadingProfilePhoto>
             
            </LoadingProfilePhoto>
            <HeaderMetaData>
              <LoadingELement>Loading...</LoadingELement>
              <LoadingELement>Loading...</LoadingELement>
            </HeaderMetaData>
          </Header>
          <VideoContainer />

          <Footer>
            <FooterActions>
              <LoadingELement>Loading...</LoadingELement>{" "}
              <LoadingELement>Loading...</LoadingELement>
            </FooterActions>
            <StatsRow>
              <LoadingELement>Loading...</LoadingELement>
            </StatsRow>
            <VideoContentInfo>
              <LoadingELement>Loading...</LoadingELement>
            </VideoContentInfo>
            <CommentContainer>
              <CommentButton>
                <LoadingELement>Loading...</LoadingELement>
              </CommentButton>
              <CommentSection>
                <LoadingELement>Loading...</LoadingELement>
              </CommentSection>
            </CommentContainer>
          </Footer>
        </OutsideWrapper>
      )
    } catch (e) {
      if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
        console.log(e)
      }
      return null
    }
  }
}
const SwipeAnimation = keyframes`
0%{

    

background-position: -100vw 0px;
}

100%{
   
background-position: 70vw 0px;

}
`
const Fading = keyframes`
0%{

    opacity:1;
}
50%{
    opacity:0.3
}
100%{
    opacity:1.0;
}

`
const LoadingProfilePhoto = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: 44px;
  height: 44px;
  animation: ${Fading} 1.75s normal ease-in;
  animation-delay: 0.5s;
  animation-iteration-count: infinite;
  overflow: hidden;

  

  background-color: rgba(181, 181, 181, 0.8);
`
const HeaderMetaData = styled.div`
  display: flex;
  flex-direction: column;
  height: 60px;
  justify-content: space-around;
  align-items: center;
  margin-left: 16px !important;
  line-height: 20px !important;
`
const VideoContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  height: 100%;

  max-height: 427px;
  max-width: 760px;
  display: flex;
  flex-direction: row;
  align-items: center;
  vertical-align: center;
  justify-content: stretch;

  animation: ${SwipeAnimation} 1.25s normal ease-in-out;
  animation-delay: 0.5s;
  animation-iteration-count: infinite;
  overflow: hidden;
  border-radius: 0em;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(rgba(181, 181, 181, 0)),
    color-stop(30%, rgba(181, 181, 181, 0)),
    color-stop(45%, rgba(250, 250, 250, 1)),
    color-stop(50%, rgba(250, 250, 250, 1)),
    color-stop(55%, rgba(250, 250, 250, 1)),
    color-stop(70%, rgba(181, 181, 181, 0)),
    to(rgba(181, 181, 181, 0))
  );

  background: -webkit-linear-gradient(
    left,
    rgba(181, 181, 181, 0) 0%,
    rgba(181, 181, 181, 0) 30%,
    rgba(250, 250, 250, 1) 45%,
    rgba(250, 250, 250, 1) 50%,
    rgba(250, 250, 250, 1) 55%,
    rgba(181, 181, 181, 0) 70%,
    rgba(181, 181, 181, 0) 100%
  );

  background: -o-linear-gradient(
    left,
    rgba(181, 181, 181, 0) 0%,
    rgba(181, 181, 181, 0) 30%,
    rgba(250, 250, 250, 1) 45%,
    rgba(250, 250, 250, 1) 50%,
    rgba(250, 250, 250, 1) 55%,
    rgba(181, 181, 181, 0) 70%,
    rgba(181, 181, 181, 0) 100%
  );

  background: linear-gradient(
    to right,
    rgba(181, 181, 181, 0.2) 0%,
    
    rgba(250, 250, 250, 0.9) 45%,
    rgba(250, 250, 250, 0.9) 50%,
    rgba(250, 250, 250, 0.9) 55%,
   
    rgba(181, 181, 181, 0.2) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  background-color: rgba(181, 181, 181, 1);
    opacity:0.2;
  background-size: contain;
  background-repeat: no-repeat;
  background-origin: border-box;
  color: transparent;
`

const CommentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  vertical-align: baseline;

  color: rgb(153, 153, 153);
  flex-shrink: 0;

  width: 100%;
  font-size: 14px;
  line-height: 18px;
  min-height: 44px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 4px 0px 0px;
  padding: 0px 20px !important;
  border-top: 1px solid rgb(239, 239, 239);
`
const CommentButton = styled.div`
  vertical-align: middle;
  -webkit-appearance: none;
  box-sizing: border-box;
  text-align: center;
  text-transform: inherit;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
  width: auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
  font-size: 14px;

  font-weight: 500 !important;
  height: auto !important;
  background: 0px 0px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  padding: 0px 0px;
  outline: 0px !important;
  margin-left: 20px;
  margin-right: 20px;
`

const OutsideWrapper = styled.div`
  margin-bottom: 60px;
  background-color: rgb(255, 255, 255);
  margin-left: -1px;
  margin-right: -1px;
  z-index: 0;
  border-radius: 3px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(230, 230, 230);
  border-image: initial;

  min-height: 468px;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`
const Footer = styled.div`
  padding-top: 10px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  box-sizing: border-box;
  word-wrap: break-word;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  margin: 0;
`
const FooterActions = styled.div`
  min-height: 35px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px !important;
  padding-right: 20px !important;
  line-height: 24px;
  overflow: hidden;
`
const LoadingELement = styled.div`
  animation: ${Fading} 1.75s normal ease-in;
  animation-delay: 0.5s;
  animation-iteration-count: infinite;
  overflow: hidden;

  border-radius: 0.3em;

  background-color: rgba(181, 181, 181, 0.8);

  color: transparent;

  &.stretch {
    width: 100%;
  }
`

const Header = styled.div`
  height: 60px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: flex-start;
  padding: 16px 8px 16px 16px;
  border-bottom: 1px solid rgb(239, 239, 239);
`
const CommentContainer = styled.div`
  width: 100%;
  min-height: 44px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-sizing: inherit;
`
const VideoContentInfo = styled.div`
  word-wrap: break-word;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0px 20px;
  margin: 10px 0px;
  line-height: 24px;
`
const StatsRow = styled.span`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  padding-left: 20px !important;
  padding-right: 20px !important;
`
export default SilverLoadingPlayer
