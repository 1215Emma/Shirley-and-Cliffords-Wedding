import { useState, useEffect } from "react"
import { getSectionData } from "./Api"

export const useDynamicData = (setIsDataLoaded) => {
  const [data, setData] = useState({})
  useEffect(() => {
    const getData = async() => {
      getSectionData(setData, setIsDataLoaded)
    }
    getData()
}, [setData, setIsDataLoaded])

  return (
    data
  )
}
