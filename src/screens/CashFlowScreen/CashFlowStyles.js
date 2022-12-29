import { Dimensions, StyleSheet } from 'react-native'
import { colors, fonts } from '../../styles/vars'
import { IS_IOS } from '../../constants/common'
import {
  HEADER_ALERT_BORDER_HEIGHT,
  HEADER_DATA_ROW_HEIGHT,
  HEADER_STICKY_BLOCK_HEIGHT,
} from '../BankAccountsScreen/BankAccountsStyles'
import { sp } from 'src/utils/func'

export const CONTAINER_PADDING = 18
export const DATA_ROW_HEIGHT = 55
export const SLIDER_HEIGHT = 200
export const SLIDER_IMG_HEIGHT = 127
const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height - 75,
}
export default StyleSheet.create({
  accountsContainer: {
    flex: 1,
    position: 'relative',
  },

  checkboxIcon: {
    fontSize: sp(18),
    color: colors.dark,
    marginLeft: 10,
    marginRight: 10,
  },

  checkboxIconRtl: {
    marginLeft: 10,
    marginRight: 10,
  },

  iconDisabled: {
    color: colors.gray2,
  },

  divider: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: colors.gray,
  },

  bankAccountBtn: {
    height: 51,
    width: 131,
  },

  bankAccountInfoText: {
    fontSize: sp(20),
    marginTop: 15,
    marginBottom: 18,
    color: colors.blue5,
    textAlign: 'center',
    fontFamily: fonts.semiBold,
  },

  dataRowAnimatedWrapper: {
    overflow: 'hidden',
    backgroundColor: 'white',
  },

  dataRowParent: {
    height: DATA_ROW_HEIGHT,
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    width: '100%',
  },

  dataRow: {
    height: DATA_ROW_HEIGHT,
    paddingHorizontal: CONTAINER_PADDING,
    paddingVertical: 10,
    flexDirection: 'row',
    width: '100%',
  },

  dataRowLevel2: {
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  dataRowLevel3: {
    height: 'auto',
    paddingTop: 0,
    paddingBottom: 14,
    paddingLeft: 0,
    borderBottomWidth: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  dataRowLevel3Text: {
    fontSize: sp(16),
    color: colors.blue7,
  },

  dataRowLevel3Wrapper: {
    backgroundColor: colors.blue9,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray8,
  },

  sliderItemWrapper: {
    position: 'relative',
    height: SLIDER_HEIGHT,
    marginHorizontal: IS_IOS ? 10 : 0,
    marginBottom: 10,
  },

  sliderItemWrapperHasImg: {
    height: SLIDER_HEIGHT + SLIDER_IMG_HEIGHT + 10,
  },

  sliderRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.blue13,
  },

  sliderRowLast: {
    borderBottomWidth: 0,
    justifyContent: 'flex-end',
  },

  sliderRowTextGroup: {
    flex: 1,
    paddingRight: 16,
  },

  sliderRowTitle: {
    fontFamily: fonts.semiBold,
    fontSize: sp(14),
    color: colors.white,
    textAlign: 'right',
  },

  sliderRowValue: {
    fontFamily: fonts.regular,
    fontSize: sp(16),
    color: colors.white,
    textAlign: 'right',
  },

  dataRowActive: {
    backgroundColor: colors.blue3,
  },

  dataRowLevel2Active: {
    backgroundColor: colors.blue9,
    borderBottomWidth: 0,
  },

  dataRowHeader: {
    height: HEADER_DATA_ROW_HEIGHT,
    paddingHorizontal: 7,
    borderBottomWidth: 0,
    paddingBottom: 0,
    marginBottom: 5,
  },

  tableHeadText: {
    flex: 1,
    fontSize: sp(16),
    textAlign: 'right',
    color: colors.blue5,
    fontFamily: fonts.light,
  },

  transData: {
    fontSize: sp(14),
    color: colors.gray6,
    textAlign: 'right',
    fontFamily: fonts.light,
  },

  tableHeadWrapper: {
    paddingHorizontal: 18,
    elevation: 5,
  },
  bankAccountHeaderShadowBgWhite: {
    backgroundColor: colors.white,
  },
  tableWrapper: {
    paddingTop: 3,
    paddingBottom: 12,
    backgroundColor: colors.white,
    width: '100%',
  },

  dataValueWrapper: {
    flex: 1,
    textAlign: 'right',
  },

  dataValueWrapperLevel2: {
    alignItems: 'center',
  },

  dataValueDescWrapperLevel2: {
    flex: 2,
  },

  dataValue: {
    flex: 1,
    textAlign: 'right',
    fontSize: sp(17),
    color: colors.blue5,
    fontFamily: fonts.semiBold,
  },
  dataDescInput: {
    flex: 1,
    height: 20,
    backgroundColor: colors.white,
    borderWidth: 0,
    borderColor: 'transparent',
    fontSize: sp(17),
    color: colors.blue5,
    fontFamily: fonts.semiBold,
    paddingVertical: 0,
  },
  dataValueDescLevel2: {
    fontFamily: fonts.regular,
  },

  zhutValue: {
    flex: 0,
    color: colors.green4,
  },

  hovaValue: {
    color: colors.red2,
  },

  fractionalPart: {
    fontSize: sp(17),
    color: colors.gray7,
    fontFamily: fonts.light,
  },

  bankAccountTitle: {
    textAlign: 'center',
    fontSize: sp(24),
    color: colors.white,
    marginBottom: 3,
    fontFamily: fonts.semiBold,
  },
  bankAccountHeaderShadowBg: {
    backgroundColor: colors.blue32,
    position: 'absolute',
    height: HEADER_STICKY_BLOCK_HEIGHT,
    width: '100%',
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: 0.5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
    zIndex: 2,
  },
  bankAccountHeaderAnimatedWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
    overflow: 'visible',
  },
  bankAccountHeaderBgWrapper: {
    position: 'relative',
    paddingTop: 10,
    backgroundColor: colors.blue32,
  },
  bankAccountHeaderWrapper: {
    paddingHorizontal: 20,
    paddingTop: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 0,
    height: HEADER_STICKY_BLOCK_HEIGHT,
    // elevation: 6,
    backgroundColor: colors.blue32,
    zIndex: 99,
  },

  dateDivider: {
    paddingHorizontal: 5,
  },

  bankAccountHeaderText: {
    fontSize: sp(16),
    color: colors.blue7,
  },
  alertBorder: {
    flex: 1,
    height: HEADER_ALERT_BORDER_HEIGHT,
    backgroundColor: colors.red2,
    zIndex: 4,
  },

  totalBalanceWrapper: {
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 5,
    marginHorizontal: 18,
  },

  totalBalanceTitle: {
    textAlign: 'center',
    color: colors.white,
    fontSize: sp(14),
    marginBottom: 2,
  },

  totalBalanceText: {
    textAlign: 'center',
    color: colors.white,
    fontFamily: fonts.semiBold,
    fontSize: sp(28),
  },

  bankAccountHeaderFakeBg: {
    backgroundColor: colors.blue6,
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: -5,
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: 0.5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },

  noTransactions: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.blue5,
  },

  headerSliderPaginationContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    width: '100%',
    bottom: -15,
    paddingVertical: 5,
    margin: 0,
  },

  sliderImg: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
  },

  noImageText: {
    color: '#022258',
    fontSize: sp(15),
    textAlign: 'center',
    alignSelf: 'center',
  },

  headerSwitchWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 5,
    marginTop: 13,
  },

  headerSwitch: {
    borderWidth: 1,
    borderColor: 'rgba(216, 216, 216, 0.3)',
  },

  headerSwitchText: {
    fontSize: sp(13),
    textAlign: 'center',
    color: colors.blue8,
  },

  titleWrapper: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    height: 28,
    shadowColor: '#dedede',
    shadowOpacity: 1,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
    borderWidth: 0,
    marginBottom: 6,
  },

  headSectionTitleContainer: {
    opacity: 0,
    elevation: 4,
    position: 'absolute',
    top: 34,
    left: 0,
    right: 0,
    width: '100%',
    justifyContent: 'center',
    zIndex: 1,
    alignItems: 'center',
  },

  headSectionTitleWrapper: {
    width: 79,
    height: 26,
    backgroundColor: colors.white,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.gray5,
  },
  headSectionTitleText: {
    textAlign: 'center',
    fontSize: sp(16),
    color: colors.blue7,
  },

  btnMatch: {
    color: colors.white,
    fontFamily: fonts.semiBold,
    fontSize: sp(16),
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
  },
  dataRowSeparator: {
    height: 1,
    flex: 1,
    marginHorizontal: CONTAINER_PADDING,
    backgroundColor: colors.gray30,
  },
  actionButtonIcon: {
    width: 20,
    height: 20,
  },
  categoryEditBtnWrapper: {
    width: 30,
    height: 30,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },

  panelContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
  },
  panel: {
    height: Screen.height + 280,
    paddingBottom: 20,
    paddingTop: 14,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    shadowOpacity: 0.4,
  },
  panelHeader: {
    height: 15,
    paddingBottom: 10,
    alignItems: 'center',
  },
  panelHandle: {
    width: 54,
    height: 5,
    borderRadius: 4,
    backgroundColor: '#cdcdcd',
  },
  panelTitle: {
    height: 28,
    color: '#022258',
    fontSize: sp(20),
    fontFamily: fonts.semiBold,
    textAlign: 'center',
  },
  panelSubtitle: {
    fontSize: sp(20),
    height: 28,
    marginBottom: 10,
    textAlign: 'center',
  },
  panelButton: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#459FED',
    alignItems: 'center',
    marginVertical: 10,
  },
  panelButtonTitle: {
    fontSize: sp(17),
    fontWeight: 'bold',
    color: 'white',
  },

  cyclicIcon: {
    width: 14,
    height: 14,
  },

  sliderItemGradient: {
    // flex: 1,
    borderRadius: 5,
    paddingHorizontal: 0,
    // height: '100%',
    borderColor: '#dbdbdc',
    borderWidth: 1,
    backgroundColor: '#ffffff',

    marginHorizontal: 6,
    marginVertical: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  sliderItemGradientNotCard: {
    flex: 1,
    paddingHorizontal: 0,
    height: '100%',
    backgroundColor: '#ffffff',
    marginHorizontal: 6,
    marginVertical: 2,
  },

  sliderPaginationContainer: {
    backgroundColor: 'transparent',
    width: '100%',
    position: 'absolute',
    bottom: -45,
  },
  sliderDot: {
    width: 15,
    height: 4,
    borderRadius: 5,
    backgroundColor: '#0addc1',
  },
  sliderInactiveDot: {
    width: 15,
    height: 4,
    backgroundColor: '#022258',
  },
  sliderDotContainer: {
    marginHorizontal: 2,
  },
})