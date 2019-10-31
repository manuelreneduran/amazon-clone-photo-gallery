import React from 'react';
import Item from './item.jsx'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styled from 'styled-components'

const StyledSlide = styled(Slide)`
width: 75px;
height: 75px;
border: lightgrey solid 1px;
border-radius: 3px;
&:hover {
  border: #999 solid 1px;
}
`;

const StyledCarousel = styled(CarouselProvider)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledSlider = styled(Slider)`
  width: 450px;
  height: 80px;
`;

const StyledBackBtn = styled(ButtonBack)`
outline: none;
width: 20px;
height: 20px;
background-repeat: no-repeat;
background-position: 50% 50%;
background-image: url(https://rpt14-front-end-capstone-manuel.s3.us-east-2.amazonaws.com/ebay-arrow-left.jpg);
border: none;
margin-right: 3px;
&:disabled {
  background-image: url(https://rpt14-front-end-capstone-manuel.s3.us-east-2.amazonaws.com/ebay-arrow-shaded-left.jpg);
}
`;
const StyledNxtBtn = styled(ButtonNext)`
outline: none;
width: 20px;
height: 20px;
background-repeat: no-repeat;
background-position: 50% 50%;
background-image: url(https://rpt14-front-end-capstone-manuel.s3.us-east-2.amazonaws.com/ebay-arrow-right.jpg);
border: none;
margin-left: 3px;
&:disabled {
  background-image: url(https://rpt14-front-end-capstone-manuel.s3.us-east-2.amazonaws.com/ebay-arrow-shaded-right.jpg);
}
`

class ItemGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: null
    }
  }

  componentWillMount() {
    var counter = 0;
    var gallery = this.props.galleryPictures.map(ele => {
      counter++;
      return <StyledSlide onClick={(e) => {this.props.setNewMain(e)}}
        key={counter}
        index={counter}>
        {<Item counter={counter} url={ele}/>}
      </StyledSlide>
    })
    this.setState({
      gallery
    })
  }

  render() {
    return (
      <StyledCarousel
        currentSlide={this.props.clickedSlideIndex}
        visibleSlides={6}
        step={6}
        naturalSlideWidth={30}
        naturalSlideHeight={30}
        totalSlides={this.state.gallery.length}
      >
        <StyledBackBtn></StyledBackBtn>
        <StyledSlider>
          {this.state.gallery}
        </StyledSlider>
        <StyledNxtBtn></StyledNxtBtn>
      </StyledCarousel>
    )
  }
}


export default ItemGallery;