import React, { Fragment, PureComponent } from 'react'import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native'import { translate } from 'react-i18next'import Carousel, { Pagination } from 'react-native-snap-carousel'import { sp } from '../../../../utils/func'import { colors } from '../../../../styles/vars'import Loader from '../../../../components/Loader/Loader'import styles from '../WaitingAndGotAbsorbedStyles'import { IS_IOS } from '../../../../constants/common'import ImgPreviewModal from '../../../../components/ImgPreviewModal/ImgPreviewModal'const winWidth = Dimensions.get('window').width@translate()export default class SlidePictures extends PureComponent {  constructor (props) {    super(props)    this.state = {      width: 100,      activeSlide: 0,      imgForPreview: null,      handleImageLoaded: false,      handleImageErrored: false,    }  }  handleSnapToItem = (index) => this.setState({ activeSlide: index })  handleShowImgPreview = (uri) => () => this.setState({ imgForPreview: uri })  handleCloseImgPreview = () => this.setState({ imgForPreview: null })  renderItem = ({ item, index }) => {    return (      <View        style={[styles.sliderItemGradient, { paddingVertical: 10 }]}      >        {item          ? (this.blockWithImg(item, index))          : (<Text>Not found</Text>)}      </View>    )  }  handleImageLoaded = () => {    console.log('handleImageLoaded')    this.setState({      handleImageLoaded: true,    })  }  handleImageLoadStart = () => {    console.log('handleImageLoadStart')    this.setState({      handleImageLoaded: false,    })  }  handleImageErrored = () => {    console.log('handleImageErrored')    this.setState({      handleImageErrored: true,    })  }  blockWithImg = (item, index) => {    return (      <Fragment>        <View style={{          paddingBottom: 25,          width: winWidth - 40 - 25,          alignSelf: 'center',          flexDirection: 'column',          alignItems: 'center',          justifyContent: 'center',          height: 480,        }}>          {item.contentUrl && !this.state.handleImageErrored ? (            <TouchableOpacity              style={{ width: '100%', height: '100%' }}              onPress={this.handleShowImgPreview(item.contentUrl)}>              <Image                onLoadStart={this.handleImageLoadStart}                onLoad={this.handleImageLoaded}                onError={this.handleImageErrored}                style={[styles.sliderImg]}                resizeMode='stretch'                source={{ uri: item.contentUrl }}              />            </TouchableOpacity>          ) : <Text            style={styles.noImageText}>{this.state.handleImageErrored ? 'שגיאה בטעינת התמונה' : 'לא נמצאה תמונה'}</Text>}        </View>      </Fragment>    )  }  render () {    const { activeSlide, imgForPreview, handleImageLoaded } = this.state    const { inProgress, parentIsOpen, imagesArr } = this.props    let data = imagesArr || []    const slideWidth = winWidth - 22    console.log(data, inProgress)    return (      <View>        {inProgress ? (          <View            style={[styles.sliderItemGradient, { width: slideWidth, height: 480 }]}          >            <Loader              isDefault              containerStyle={{ backgroundColor: 'transparent' }}              size='small'              color={'#022258'}            />          </View>        ) : parentIsOpen && (          <Fragment>            {!handleImageLoaded && (              <Loader                isDefault                containerStyle={{                  backgroundColor: 'transparent',                  position: 'absolute',                  top: 0,                  right: 0,                  bottom: 0,                  left: 0,                  zIndex: 99999,                  width: '100%',                  height: '100%',                }}                size='small'                color={'#022258'}              />            )}            {data.length > 0 && (              <Carousel                firstItem={0}                scrollEnabled={data.length > 1}                inactiveSlideScale={1}                inactiveSlideShift={0}                inactiveSlideOpacity={IS_IOS ? 0.7 : 1}                data={data}                containerCustomStyle={[{ left: 0 }]}                renderItem={this.renderItem}                onSnapToItem={this.handleSnapToItem}                sliderWidth={winWidth}                itemWidth={slideWidth}              />            )}            {data.length === 0 && (              <Text style={{                fontSize: sp(16),                color: colors.blue7,                paddingTop: 15,              }}>{'לא נמצאה תמונה'}</Text>            )}            {imagesArr.length > 1 && (              <Pagination                dotsLength={data.length}                activeDotIndex={activeSlide}                containerStyle={styles.sliderPaginationContainer}                dotStyle={styles.sliderDot}                inactiveDotStyle={styles.sliderInactiveDot}                dotContainerStyle={styles.sliderDotContainer}                inactiveDotOpacity={1}                inactiveDotScale={1}              />            )}          </Fragment>        )}        {imgForPreview && (          <ImgPreviewModal            isOpen            image={imgForPreview}            onClose={this.handleCloseImgPreview}          />        )}      </View>    )  }}