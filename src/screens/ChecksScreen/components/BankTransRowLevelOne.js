import React, { Fragment } from 'react'
import { ActivityIndicator, Animated, Text, TouchableOpacity, View } from 'react-native'
import { translate } from 'react-i18next'
import BankTrans from './BankTrans'
import { combineStyles as cs, getFormattedValueArray } from '../../../utils/func'
import AnimatedControlledRow from '../../../components/DataRow/AnimatedControlledRow'
import commonStyles from '../../../styles/styles'
import styles, { DATA_ROW_HEIGHT } from '../ChecksStyles'
import { colors } from '../../../styles/vars'
import { dateToFromNowDaily } from '../../../utils/date'
import CategoriesModal from 'src/components/CategoriesModal/CategoriesModal'

@translate()
export default class BankTransRowLevelOne extends AnimatedControlledRow {
    static defaultProps = { onUpdateBankTrans: () => null };

    constructor (props) {
      super(props)

      this.initialHeight = DATA_ROW_HEIGHT
      this.maxHeight = this.initialHeight

      this.state = this.initialState
    }

    get initialState () {
      return {
        ...super.initialState,
        categoriesModalIsOpen: false,
        currentEditBankTrans: null,
      }
    }

    getExpandedData () {
      const { onGetBankTrans, data } = this.props
      const { inProgress } = this.state
      if (inProgress) return
      this.setState({ inProgress: true })

      onGetBankTrans(data.transDate)
        .then((bankTrans) => this.setState({ inProgress: false, expandedData: bankTrans }))
        .catch(() => this.setState({ inProgress: false }))
    }

    handleUpdateBankTrans = (newBankTrans) => {
      const { expandedData } = this.state
      const { onUpdateBankTrans } = this.props
      const oldIndex = expandedData.findIndex(t => t.bankTransId === newBankTrans.bankTransId)
      if (oldIndex < 0) return
      const newData = [...expandedData]
      newData[oldIndex] = { ...newData[oldIndex], ...newBankTrans }

      onUpdateBankTrans(newBankTrans)
      this.setState({ expandedData: newData, currentEditBankTrans: { ...newBankTrans }, categoriesModalIsOpen: false })
    };

    handleSelectCategory = (category) => {
      const { currentEditBankTrans } = this.state
      if (!currentEditBankTrans || currentEditBankTrans.transTypeId === category.transTypeId) return

      const newBankTrans = {
        ...currentEditBankTrans,
        iconType: category.iconType,
        transTypeId: category.transTypeId,
        transTypeName: category.transTypeName,
      }

      this.setState({ currentEditBankTrans: { ...newBankTrans } })
      return this.handleUpdateBankTrans(newBankTrans)
    };

    handleCloseCategoriesModal = () => {
      this.setState({ categoriesModalIsOpen: false, currentEditBankTrans: null })
    };

    handleOpenCategoriesModal = (bankTransId) => () => {
      this.setState({ categoriesModalIsOpen: true, currentEditBankTrans: bankTransId })
    };

    render () {
      const {
        isOpen,
        isRtl,
        data,
        accounts,
        t,
        onItemToggle,
        companyId,
        onRemoveBankTransCategory,
        onCreateBankTransCategory,
      } = this.props
      const { height, inProgress, expandedData, categoriesModalIsOpen, currentEditBankTrans } = this.state
      const wrapperStyles = cs(isRtl, cs(isOpen, styles.dataRow, styles.dataRowActive), commonStyles.rowReverse)
      const itraStyles = cs(data.totalCredit < 0,
        cs(isOpen, styles.dataValue, { color: colors.white }),
        { color: colors.red2 },
      )
      const colorWhite = { color: colors.white }
      const zhut = getFormattedValueArray(data.zhut)
      const hova = getFormattedValueArray(-data.hova)
      const itra = getFormattedValueArray(data.itra)

      return (
        <Fragment>
          <Animated.View style={[styles.dataRowAnimatedWrapper, { height }]}>
            <TouchableOpacity onPress={onItemToggle}>
              <View style={wrapperStyles} onLayout={this.setMinHeight}>
                <View style={[{ flex: 1 }, commonStyles.column]}>
                  <Text style={[styles.dataValueWrapper, { flex: 0 }]}>
                    <Text
                      style={cs(isOpen, [styles.dataValue, styles.zhutValue], colorWhite)}>{zhut[0]}</Text>
                    <Text style={cs(isOpen, styles.fractionalPart, colorWhite)}>.{zhut[1]}</Text>
                  </Text>
                  <Text style={cs(isOpen, styles.transData, colorWhite)}>
                    {dateToFromNowDaily(data.transDate, t)}
                  </Text>
                </View>

                <Text style={styles.dataValueWrapper}>
                  <Text
                    style={cs(isOpen, [styles.dataValue, styles.hovaValue], colorWhite)}>{hova[0]}</Text>
                  <Text style={cs(isOpen, styles.fractionalPart, colorWhite)}>.{hova[1]}</Text>
                </Text>

                <Text style={[styles.dataValueWrapper, { flex: 0.75 }]}>
                  <Text style={itraStyles}>{itra[0]}</Text>
                  <Text style={cs(isOpen, styles.fractionalPart, { color: colors.white })}>.{itra[1]}</Text>
                </Text>
              </View>
            </TouchableOpacity>

            <View onLayout={this.setMaxHeight}>
              {inProgress
                ? <ActivityIndicator style={{ padding: 10 }} />
                : (
                  <BankTrans
                    isRtl={isRtl}
                    data={expandedData}
                    accounts={accounts}
                    parentIsOpen={isOpen}
                    onUpdateBankTrans={this.handleUpdateBankTrans}
                    onEditCategory={this.handleOpenCategoriesModal}
                  />
                )}
            </View>
          </Animated.View>

          {categoriesModalIsOpen && (
            <CategoriesModal
              isOpen
              isRtl={isRtl}
              companyId={companyId}
              bankTrans={currentEditBankTrans}
              onClose={this.handleCloseCategoriesModal}
              onUpdateBankTrans={this.handleUpdateBankTrans}
              onSelectCategory={this.handleSelectCategory}
              onCreateCategory={onCreateBankTransCategory}
              onRemoveCategory={onRemoveBankTransCategory}
            />
          )}
        </Fragment>
      )
    }
}