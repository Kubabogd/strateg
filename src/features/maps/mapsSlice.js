import {createSlice} from '@reduxjs/toolkit'

const RegionAndProvincesMapsSlice = createSlice({
  name: 'RegionAndProvincesMaps',
  initialState: {
    selectedMap: '',
  },
  reducers: {
    setSelectedMap: (state, {payload: data}) => {
      state.selectedMap[0] === data[0]
        ? (state.selectedMap = '')
        : (state.selectedMap = data)
    },
    setSelectedMapBegin: state => {
      state.selectedMap = ''
    },
  },
})

export const {setSelectedMap, setSelectedMapBegin} =
  RegionAndProvincesMapsSlice.actions

export const selectRegionAndProvincesMapsState = state =>
  state.RegionAndProvincesMaps
export const selectRegionAndProvincesMapsSelectedMap = state =>
  selectRegionAndProvincesMapsState(state).selectedMap
export default RegionAndProvincesMapsSlice.reducer
