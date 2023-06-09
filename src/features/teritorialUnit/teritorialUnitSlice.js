import {createSlice} from '@reduxjs/toolkit'

const teritorialUnitSlice = createSlice({
  name: 'teritorialUnitData',
  initialState: {
    status: 'loading',
    categoryData: '',
    groupData: '',
    subGroupData: '',
    variablesData: '',
    finalData: '',
    categoryName: '',
    groupName: '',
    subGroupName: '',
    variablesName: '',
    provinceName: '',
    finalValues: '',
    displayResultsSwitcher: true,
    autoScrollSwitcher: true,
  },
  reducers: {
    fetchTeritorialUnit: (state, {payload: data}) => {
      data === '' || data === undefined
        ? (state.status = 'error')
        : (state.status = 'success')
      state.categoryData = data
    },
    fetchTeritorialUnitGroup: (state, {payload: data}) => {
      data === '' || data === undefined
        ? (state.status = 'error')
        : (state.status = 'success')
      state.groupData = data
    },
    fetchTeritorialUnitSubGroup: (state, {payload: data}) => {
      data === '' || data === undefined
        ? (state.status = 'error')
        : (state.status = 'success')
      state.subGroupData = data
    },
    fetchTeritorialUnitVariables: (state, {payload: data}) => {
      data === '' || data === undefined
        ? (state.status = 'error')
        : (state.status = 'success')
      state.variablesData = data
    },
    fetchTeritorialUnitFinalData: (state, {payload: data}) => {
      data === '' || data === undefined
        ? (state.status = 'error')
        : (state.status = 'success')
      state.finalData = data
      let finalArray = []
      data.results.map(result => (finalArray = [...finalArray, result.values]))
      state.finalValues = finalArray
    },
    fetchTeritorialUnitError: state => {
      state.status = 'error'
    },

    setTeritorialUnitBegin: state => {
      state.categoryName = ''
      state.status = 'loading'
      state.groupData = ''
      state.subGroupData = ''
      state.variablesData = ''
      state.groupName = ''
      state.subGroupName = ''
      state.variablesName = ''
      state.finalData = ''
    },
    setTeritorialUnitCategoryName: (state, {payload: name}) => {
      state.categoryName = name
      state.status = 'loading'
      state.groupData = ''
      state.subGroupData = ''
      state.variablesData = ''
      state.groupName = ''
      state.subGroupName = ''
      state.variablesName = ''
      state.finalData = ''
    },
    setTeritorialUnitGroupName: (state, {payload: name}) => {
      state.groupName = name
      state.status = 'loading'
      state.subGroupData = ''
      state.variablesData = ''
      state.subGroupName = ''
      state.variablesName = ''
      state.finalData = ''
    },
    setTeritorialUnitSubGroupName: (state, {payload: name}) => {
      state.subGroupName = name
      state.status = 'loading'
      state.variablesData = ''
      state.variablesName = ''
      state.finalData = ''
    },
    setTeritorialUnitVariablesNames: (state, {payload: name}) => {
      state.variablesName = name
      state.status = 'loading'
      state.finalData = ''
    },
    setProvinceName: (state, {payload: name}) => {
      state.provinceName = name
    },
    setTeritorialUnitDisplayResultsSwitcher: state => {
      state.displayResultsSwitcher = !state.displayResultsSwitcher
    },
    setTeritorialUnitAutoScrollSwitcher: state => {
      state.autoScrollSwitcher = !state.autoScrollSwitcher
    },
    setTeritorialUnitError: state => {
      state.status = 'error'
    },
    setTeritorialUnitLoading: state => {
      state.status = 'loading'
    },
  },
})

export const {
  fetchTeritorialUnit,
  fetchTeritorialUnitGroup,
  fetchTeritorialUnitSubGroup,
  fetchTeritorialUnitVariables,
  fetchTeritorialUnitFinalData,
  fetchTeritorialUnitError,
  setTeritorialUnitBegin,
  setTeritorialUnitCategoryName,
  setTeritorialUnitGroupName,
  setTeritorialUnitSubGroupName,
  setTeritorialUnitVariablesNames,
  setProvinceName,
  setTeritorialUnitDisplayResultsSwitcher,
  setTeritorialUnitAutoScrollSwitcher,
  setTeritorialUnitError,
  setTeritorialUnitLoading,
} = teritorialUnitSlice.actions

export const selectTeritorialUnitState = state => state.teritorialUnit
export const selectTeritorialUnitCategoryData = state =>
  selectTeritorialUnitState(state).categoryData
export const selectTeritorialUnitGroupData = state =>
  selectTeritorialUnitState(state).groupData
export const selectTeritorialUnitSubGroupData = state =>
  selectTeritorialUnitState(state).subGroupData
export const selectTeritorialUnitVariablesData = state =>
  selectTeritorialUnitState(state).variablesData
export const selectTeritorialUnitFinalData = state =>
  selectTeritorialUnitState(state).finalData
export const selectTeritorialUnitCategoryName = state =>
  selectTeritorialUnitState(state).categoryName
export const selectTeritorialUnitGroupName = state =>
  selectTeritorialUnitState(state).groupName
export const selectTeritorialUnitSubGroupName = state =>
  selectTeritorialUnitState(state).subGroupName
export const selectTeritorialUnitVariablesName = state =>
  selectTeritorialUnitState(state).variablesName
export const selectProvinceName = state =>
  selectTeritorialUnitState(state).provinceName
export const selectTeritorialUnitFinalValues = state =>
  selectTeritorialUnitState(state).finalValues
export const selectTeritorialUnitStatus = state =>
  selectTeritorialUnitState(state).status
export const selectTeritorialUnitDisplayResultsSwitcher = state =>
  selectTeritorialUnitState(state).displayResultsSwitcher
export const selectTeritorialUnitAutoScrollSwitcher = state =>
  selectTeritorialUnitState(state).autoScrollSwitcher
export default teritorialUnitSlice.reducer
