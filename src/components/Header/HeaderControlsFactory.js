import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Keyboard, Text, TouchableOpacity, View } from 'react-native'
import Icon from '../../components/Icons/Fontello'
import styles from './HeaderStyles'
import { colors, fonts } from '../../styles/vars'
import { goTo, sp } from '../../utils/func'

@connect(state => ({
  isRtl: state.isRtl,
  messagesCount: state.messagesCount,
}))
export default class HeaderControlsFactory extends PureComponent {
  get left () {
    const { navigation } = this.props
    const openedBottomSheet = navigation.getParam('openedBottomSheet')
    return (
      <View style={{
        opacity: openedBottomSheet ? 0.2 : 1,
      }}>
        {!this.props.isModal && (
          <TouchableOpacity
            style={styles.btnWrapper}
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
            onPress={this.handleOpenMenu}
          >
            <Icon name='menu' size={18} color={colors.blue4} />
          </TouchableOpacity>
        )}
        {this.props.isModal && (
          <TouchableOpacity
            style={styles.btnWrapper}
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
            onPress={this.goToLocation}>
            <Text style={{
              fontSize: sp(16),
              color: '#ffffff',
              fontFamily: fonts.semiBold,
            }}>{'ביטול'}</Text>
            {/* <Icon name='times' size={13.5} color={colors.white} /> */}
          </TouchableOpacity>
        )}
      </View>
    )
  }

  get right () {
    const { messagesCount, navigation } = this.props
    const openedBottomSheet = navigation.getParam('openedBottomSheet')
    return (
      <TouchableOpacity
        hitSlop={{ top: 20, bottom: 5, left: 20, right: 20 }}
        onPress={this.goToMessages}
        style={[styles.btnWrapper, {
          opacity: openedBottomSheet ? 0.2 : 1,
        }]}
      >
        <View style={styles.messagesCountContainer}>
          <Icon name='bell' size={22} color={colors.blue4} />

          {messagesCount ? (
            <View style={[styles.messagesCountWrapper, {
              opacity: openedBottomSheet ? 0.2 : 1,
            }]}>
              <Text style={styles.messagesCount}>{messagesCount > 99 ? '99+' : messagesCount}</Text>
            </View>
          ) : null}
        </View>
      </TouchableOpacity>
    )
  }

    goToLocation = () => {
      Keyboard.dismiss()
      goTo(this.props.navigation, this.props.navigation.state.params.go_back_key)
    };

    goToMessages = () => {
      Keyboard.dismiss()
      if (this.props.navigation.state.routeName === 'MESSAGES') {
        goTo(this.props.navigation, this.props.navigation.state.params.go_back_key)
      } else {
        goTo(this.props.navigation, 'MESSAGES')
      }
    };

    handleOpenMenu = () => {
      Keyboard.dismiss()
      this.props.navigation.openDrawer()
    };

    render () {
      const { isRtl, position } = this.props

      if (isRtl) {
        if (position === 'left') return this.right
        if (position === 'right') return this.left
      }

      if (position === 'left') return this.left
      if (position === 'right') return this.right
    }
}