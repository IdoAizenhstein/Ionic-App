import React, { PureComponent } from 'react'import { Image, Modal, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'import { translate } from 'react-i18next'import { colors, fonts } from '../../../styles/vars'import styles from '../BankMatchStyles'import { combineStyles as cs, getFormattedValueArray, sp } from '../../../utils/func'import commonStyles from '../../../styles/styles'import { IS_IOS } from '../../../constants/common'import { connect } from 'react-redux'import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'const inputWorkaround = (() => {  let workaroundIncrement = 0  const invisibleCharsArr = [    String.fromCharCode(28),    String.fromCharCode(29),    String.fromCharCode(30),    String.fromCharCode(31),  ]  return {    getWorkaroundChar: () => {      workaroundIncrement += 1      const mod = workaroundIncrement % invisibleCharsArr.length      return IS_IOS ? invisibleCharsArr[mod] : ''    },  }})()@connect(state => ({  searchkey: state.searchkey,}))@translate()export default class CashflowMatchPopup extends PureComponent {  constructor (props) {    super(props)    this.state = {      editSum: Array.from({ length: props.cashflowMatchPopup.table.length }, (v, k) => false),    }  }  editInput = (idx) => () => {    const editSumArr = JSON.parse(JSON.stringify(this.state.editSum))    editSumArr[idx] = true    this.setState({ editSum: editSumArr })  }  render () {    const { isRtl, closeModal, bankMatchSubmit, cashflowMatchPopup, updateStateCashflowMatchPopup, selectedAccountIds } = this.props    return (      <Modal        animationType='slide'        transparent={false}        visible>        <SafeAreaView style={{          flex: 1,          marginTop: 0,          paddingTop: 0,          position: 'relative',        }}>          <View style={{            flex: 1,            alignItems: 'center',          }}>            <View style={{              height: 60,              backgroundColor: '#002059',              width: '100%',              paddingTop: 0,              paddingLeft: 10,              paddingRight: 10,            }}>              <View style={cs(                !isRtl,                [styles.container, {                  flex: 1,                  flexDirection: 'row',                  justifyContent: 'space-between',                  alignItems: 'center',                }],                commonStyles.rowReverse,              )}>                <View>                  <TouchableOpacity onPress={closeModal}>                    <Text style={{                      fontSize: sp(16),                      color: '#ffffff',                      fontFamily: fonts.semiBold,                    }}>ביטול</Text>                  </TouchableOpacity>                </View>                <View style={{ alignItems: 'center' }}>                  <Text style={{ fontSize: sp(20), color: '#ffffff', fontFamily: fonts.semiBold }}>                    {'קביעת סכומים'}                  </Text>                </View>                <View>                  <TouchableOpacity                    onPress={bankMatchSubmit}>                    <Text style={{                      fontSize: sp(16),                      color: '#ffffff',                      fontFamily: fonts.semiBold,                    }}>התאמה</Text>                  </TouchableOpacity>                </View>              </View>            </View>            <View style={{              paddingHorizontal: 16,              flexDirection: 'column',              alignItems: 'flex-end',              justifyContent: 'center',            }}>              <View style={{                flexDirection: 'row-reverse',                paddingBottom: 7,                paddingTop: 22,              }}>                <View style={{                  maxWidth: '85%',                }}>                  <Text                    numberOfLines={1}                    ellipsizeMode='tail'                    style={{                      fontSize: sp(21),                      color: '#022258',                      fontFamily: fonts.semiBold,                    }}>                    {'תנועת הבנק: '}                    {cashflowMatchPopup.banktransRow.transDescAzonly}                    {' בסכום '}                  </Text>                </View>                <View style={{                  paddingRight: 5,                }}>                  <Text                    style={{                      fontSize: sp(21),                      color: '#022258',                      fontFamily: fonts.semiBold,                    }}>                    <Text style={[{}]}>{getFormattedValueArray(cashflowMatchPopup.banktransRow.total)[0]}</Text>                    <Text style={[{}]}>{'.'}{getFormattedValueArray(cashflowMatchPopup.banktransRow.total)[1]}</Text>                  </Text>                </View>              </View>              <Text style={{                fontSize: sp(17.5),                color: '#022258',                fontFamily: fonts.regular,              }}>                תותאם לתנועות שנבחרו ע”פ הסכום שהיה בתזרים.              </Text>              <Text style={{                fontSize: sp(17.5),                color: '#022258',                fontFamily: fonts.regular,              }}>                ניתן לשנות את הסכומים לפני ההתאמה              </Text>            </View>            <View style={{              width: '100%',              height: '100%',              marginTop: 25,              marginBottom: 40,              paddingLeft: 0,              paddingRight: 0,              flex: 1,            }}>              <KeyboardAwareScrollView>                {cashflowMatchPopup.table.map((row, idx) => {                  const editableTotal = ['CYCLIC_TRANS', 'WIRE_TRANSFER', 'OTHER', 'CHEQUE'].includes(row.targetTypeName)                  return (<View                    key={row.bankTransId + '_' + idx}                    style={{                      height: 188,                      justifyContent: 'center',                      flexDirection: 'column',                      alignItems: 'center',                      alignContent: 'center',                    }}>                    <View style={[cs(isRtl, commonStyles.row, [commonStyles.rowReverse]), {                      height: 42,                      marginBottom: 8,                      marginLeft: 16,                    }]}>                      <View style={{ flex: 1.76, alignItems: 'flex-end' }}>                        <Text style={{                          color: '#0f3860',                          fontSize: sp(13),                          lineHeight: 42,                        }}>תיאור התנועה</Text>                      </View>                      <View style={[{                        flex: 5.73,                        backgroundColor: '#f5f5f5',                        paddingHorizontal: 21,                        borderBottomRightRadius: 20,                        borderTopRightRadius: 20,                      }]}>                        <View                          style={[cs(isRtl, commonStyles.row, [commonStyles.rowReverse]), {                            flex: 1,                            flexDirection: 'row',                            justifyContent: 'flex-end',                            alignItems: 'center',                          }]}>                          <Text style={[{                            textAlign: 'right',                            color: '#d0cece',                            fontSize: sp(15),                            lineHeight: 42,                          }, commonStyles.regularFont]}>                            {row.targetName}                          </Text>                        </View>                      </View>                    </View>                    <View style={[cs(isRtl, commonStyles.row, [commonStyles.rowReverse]), {                      height: 42,                      marginBottom: 8,                      marginLeft: 16,                    }]}>                      <View style={{ flex: 1.76, alignItems: 'flex-end' }}>                        <Text style={{                          color: '#0f3860',                          fontSize: sp(13),                          lineHeight: 42,                        }}>סוג תשלום</Text>                      </View>                      <View style={[{                        flex: 5.73,                        backgroundColor: '#f5f5f5',                        paddingHorizontal: 21,                        borderBottomRightRadius: 20,                        borderTopRightRadius: 20,                      }]}>                        <View                          style={[cs(isRtl, commonStyles.row, [commonStyles.rowReverse]), {                            flex: 1,                            flexDirection: 'row-reverse',                            justifyContent: 'space-between',                            alignItems: 'center',                          }]}>                          <Text style={[{                            textAlign: 'right',                            color: '#d0cece',                            fontSize: sp(15),                            lineHeight: 42,                          }, commonStyles.regularFont]}>                            {this.props.searchkey && this.props.searchkey.length > 0 && this.props.searchkey.find((it) => it.paymentDescription === row.paymentDesc) ? this.props.searchkey.find((it) => it.paymentDescription === row.paymentDesc).name : ''} {':'}                          </Text>                          {row.isPeriodicType && (                            <Image                              resizeMode='contain'                              style={[{ alignSelf: 'center', height: 18, width: 18, opacity: 0.4 }]}                              source={require('BiziboxUI/assets/fixedMovements.png')}                            />                          )}                        </View>                      </View>                    </View>                    <View                      style={[cs(isRtl, commonStyles.row, [commonStyles.rowReverse]), {                        height: 42,                        marginLeft: 16,                        marginBottom: 25,                      }, cs(!editableTotal, { opacity: 1 }, { opacity: 0.5 })]}>                      <View style={{ flex: 1.76, alignItems: 'flex-end' }}>                        <Text style={{                          color: '#0f3860',                          fontSize: sp(13),                          lineHeight: 42,                        }}>סכום</Text>                      </View>                      <View style={{                        flex: 5.73,                        backgroundColor: '#f5f5f5',                        paddingHorizontal: 21,                        borderBottomRightRadius: 20,                        borderTopRightRadius: 20,                        borderWidth: editableTotal && ((row.userMatchTotal === null || row.userMatchTotal === '')) ? 1 : 0,                        borderColor: colors.red,                      }}>                        {this.state.editSum[idx] && (                          <TextInput                            autoCorrect={false}                            autoFocus                            editable={this.state.editSum[idx] && editableTotal}                            keyboardType={IS_IOS ? 'numbers-and-punctuation' : 'decimal-pad'}                            style={[{                              direction: 'ltr',                              textAlign: 'right',                              color: '#0f3860',                              height: 42,                              fontSize: sp(15),                              width: '100%',                            }, commonStyles.regularFont]}                            onEndEditing={(e) => {                              let dataOfRowVal = Object.assign({}, this.props.cashflowMatchPopup)                              dataOfRowVal.table[idx].userMatchTotal = e.nativeEvent.text.toString().replace(/[^\d-.]/g, '')                              if (dataOfRowVal.table[idx].userMatchTotal !== '') {                                dataOfRowVal.table[idx].userMatchTotal = Number(dataOfRowVal.table[idx].userMatchTotal)                              }                              const editSumArr = JSON.parse(JSON.stringify(this.state.editSum))                              editSumArr[idx] = false                              this.setState({ editSum: editSumArr }, () => {                                updateStateCashflowMatchPopup(dataOfRowVal)                              })                            }}                            onChangeText={(totals) => {                              if (String(totals).split('.').length > 2) {                                let dataOfRowVal = Object.assign({}, this.props.cashflowMatchPopup)                                updateStateCashflowMatchPopup(dataOfRowVal)                              } else {                                let dataOfRowVal = Object.assign({}, this.props.cashflowMatchPopup)                                dataOfRowVal.table[idx].userMatchTotal = totals.toString().replace(/[^\d-.]/g, '')                                if (dataOfRowVal.table[idx].userMatchTotal !== '') {                                  dataOfRowVal.table[idx].userMatchTotal = Number(dataOfRowVal.table[idx].userMatchTotal)                                }                                updateStateCashflowMatchPopup(dataOfRowVal)                              }                            }}                            value={row.userMatchTotal ? inputWorkaround.getWorkaroundChar() + String(row.userMatchTotal) : null}                            underlineColorAndroid='transparent'                          />                        )}                        {!this.state.editSum[idx] && (                          <TouchableOpacity                            opacity={editableTotal ? 0.7 : 1}                            style={[cs(isRtl, commonStyles.row, [commonStyles.rowReverse]), {                              flex: 1,                              justifyContent: 'flex-start',                              alignItems: 'center',                              opacity: editableTotal ? 1 : 0.3,                            }]}                            onPress={editableTotal ? this.editInput(idx) : null}>                            <Text                              style={[styles.dataValueWrapper, styles.dataValueWrapperLevel2, {                                fontSize: sp(15),                                lineHeight: 42,                                color: '#0f3860',                                direction: 'ltr',                                textAlign: 'right',                              }, commonStyles.regularFont]}                              numberOfLines={1}                              ellipsizeMode='tail'>                              <Text style={[{                                fontSize: sp(15),                                lineHeight: 42,                                color: '#0f3860',                              }, commonStyles.regularFont]}>{getFormattedValueArray(row.userMatchTotal)[0]}</Text>                              {(Number(getFormattedValueArray(row.userMatchTotal)[1]) !== 0) && (                                <Text style={[styles.fractionalPart, {                                  fontSize: sp(15),                                  lineHeight: 42,                                  color: '#0f3860',                                }, commonStyles.regularFont]}>.{getFormattedValueArray(row.userMatchTotal)[1]}</Text>                              )}                            </Text>                          </TouchableOpacity>                        )}                      </View>                    </View>                    {(cashflowMatchPopup.table.length !== idx + 1) && (                      <View style={{                        paddingHorizontal: 10,                        height: 1,                        width: '100%',                      }}>                        <View style={{                          backgroundColor: '#022258',                          height: 1,                          width: '100%',                        }} />                      </View>                    )}                  </View>)                })}              </KeyboardAwareScrollView>            </View>            {(cashflowMatchPopup.sumTotals > cashflowMatchPopup?.banktransRow.total) && (              <View style={{                position: 'absolute',                bottom: 50,                zIndex: 99,                elevation: 999,              }}>                <Text style={{                  textAlign: 'center',                  fontSize: sp(15),                  color: '#d40202',                  fontFamily: fonts.regular,                }}>                  {'שימו לב, הסכום הכולל גבוה ב'}                  {getFormattedValueArray(cashflowMatchPopup.sumTotals - cashflowMatchPopup?.banktransRow.total)[0]}{'.'}{getFormattedValueArray(cashflowMatchPopup.sumTotals - cashflowMatchPopup?.banktransRow.total)[1]}                  {selectedAccountIds[0].currency === 'ILS' ? ' ש"ח' : ''}                  {' מהסכום בבנק'}                </Text>              </View>            )}          </View>        </SafeAreaView>      </Modal>    )  }}