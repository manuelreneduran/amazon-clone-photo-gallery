import React from 'react';
import $ from 'jquery';
import ItemGallery from './components/itemGallery.jsx';
import MainItem from './components/mainItem.jsx';
import styled from 'styled-components'
import { setPictures, getRandomNum, getId } from './helpers.js'

const StyledContainer = styled.div`
width: 500px;
height: 92%;
display: flex;
justify-content: center;
align-items: center;
align-content: center;
flex-direction: column;
`;

const StyledGalleryDisplay = styled.div`
width: 100%;
height: 12%;
`
class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        mainPicture: null,
        galleryPictures: null,
        originalPicture: null
      };
    }

    componentDidMount() {
      //gets current api path
      $.get('http://localhost:3003/pictures', (pictures) => {
        pictures = setPictures(pictures);
        var mainPicture = pictures.mainPicture;
        var galleryPictures = pictures.galleryPictures;
        this.setState({
          mainPicture,
          galleryPictures,
          originalPicture: mainPicture,
          clickedSlideIndex: 0,
        })
      })
    }

    setNewMainPicture(e) {
      e.persist();
      var counter = e.target.dataset.counter;
      if (counter % 6 == 0) {
        counter = counter - 6;
      } else if (counter > 6) {
        counter = counter - (counter % 6);
      } else {
        counter = 0;
      }
      this.setState({
        mainPicture: e.target.currentSrc,
        clickedSlideIndex: counter
      })
    }

    render() {
      return (
      <StyledContainer>
        <div>
          <MainItem url = {this.state.mainPicture}/>
        </div >
        <StyledGalleryDisplay >
          {this.state.galleryPictures && this.state.galleryPictures.length > 0 ?
          < ItemGallery clickedSlideIndex={this.state.clickedSlideIndex}
          setNewMain={this.setNewMainPicture.bind(this)}
          galleryPictures={this.state.galleryPictures}/>
          : null}
        </StyledGalleryDisplay >
      </StyledContainer>
        )
      }
    }

    export default App;