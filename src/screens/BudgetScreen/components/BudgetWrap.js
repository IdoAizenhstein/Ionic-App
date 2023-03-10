import React, { PureComponent } from 'react'
import { translate } from 'react-i18next'
import Budget from './Budget'

@translate()
export default class BudgetWrap extends PureComponent {
  render () {
    const {
      item,
      onItemToggle,
      isOpen,
      nextDate,
      prevDate,
      accounts,
      disabledNavDatePrev,
      disabledNavDateNext,
      openActionSheet,
      showPanelOfCategories,
    } = this.props
    return (
      <Budget item={item}
        openActionSheet={openActionSheet}
        disabledNavDatePrev={disabledNavDatePrev}
        disabledNavDateNext={disabledNavDateNext}
        nextDate={nextDate}
        prevDate={prevDate}
        showPanelOfCategories={showPanelOfCategories}
        accounts={accounts}
        isOpen={isOpen}
        onItemToggle={onItemToggle}
      />
    )
  }
}