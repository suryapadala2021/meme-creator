import {Component} from 'react'

import {
  MemeHeading,
  MemeContainer,
  FormContainer,
  Label,
  InputElement,
  GeneratorBtn,
  FontSelect,
  MemeBg,
  MemBgMedium,
  ParagraphEle,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topHeading: '',
    bottomHeading: '',
    fontSize: '8',
    isSubmit: false,
  }

  imageInput = event => {
    this.setState({imageUrl: event.target.value})
  }

  topHeadingInput = event => {
    this.setState({topHeading: event.target.value})
  }

  changeBottomHeading = event => {
    this.setState({bottomHeading: event.target.value})
  }

  fontInput = event => {
    this.setState({fontSize: event.target.value})
  }

  submit = event => {
    event.preventDefault()
    this.setState({isSubmit: true})
  }

  render() {
    const {imageUrl, topHeading, bottomHeading, isSubmit, fontSize} = this.state

    return (
      <MemeBg data-testid="meme">
        <MemBgMedium data-testid="meme">
          <MemeHeading main data-testid="meme">
            Meme Generator
          </MemeHeading>
          <MemeContainer
            data-testid="meme"
            bgImage={imageUrl}
            isSubmit={isSubmit}
          >
            {isSubmit && (
              <>
                <ParagraphEle data-testid="meme" fontSize={fontSize}>
                  {topHeading}
                </ParagraphEle>
                <ParagraphEle data-testid="meme" fontSize={fontSize}>
                  {bottomHeading}
                </ParagraphEle>
              </>
            )}
          </MemeContainer>
          <FormContainer onSubmit={this.submit} data-testid="meme">
            <Label data-testid="meme" htmlFor="imageInput">
              Image URL
            </Label>
            <br />
            <InputElement
              data-testid="meme"
              value={imageUrl}
              type="text"
              id="imageInput"
              onChange={this.imageInput}
            />
            <Label data-testid="meme" htmlFor="topHeading">
              Top Text
            </Label>
            <br />
            <InputElement
              data-testid="meme"
              type="text"
              id="topHeading"
              value={topHeading}
              onChange={this.topHeadingInput}
            />
            <Label data-testid="meme" htmlFor="bottomHeading">
              Bottom Text
            </Label>
            <br />
            <InputElement
              data-testid="meme"
              type="text"
              id="bottomHeading"
              value={bottomHeading}
              onChange={this.changeBottomHeading}
            />
            <Label data-testid="meme" htmlFor="selectFont">
              Font Size
            </Label>
            <br />
            <FontSelect
              data-testid="meme"
              id="selectFont"
              onChange={this.fontInput}
              value={fontSize}
            >
              {fontSizesOptionsList.map(each => (
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </FontSelect>
            <br />
            <GeneratorBtn data-testid="meme" type="submit">
              Generate
            </GeneratorBtn>
          </FormContainer>
        </MemBgMedium>
        <MemeContainer
          data-testid="meme"
          bgImage={imageUrl}
          isSubmit={isSubmit}
          large
        >
          {isSubmit && (
            <>
              <ParagraphEle data-testid="meme" fontSize={fontSize}>
                {topHeading}
              </ParagraphEle>
              <ParagraphEle data-testid="meme" fontSize={fontSize}>
                {bottomHeading}
              </ParagraphEle>
            </>
          )}
        </MemeContainer>
      </MemeBg>
    )
  }
}
export default MemeGenerator
