import react, { useState, useEffect } from "react"
import { getSectionData } from "./Api"

export const useDynamicData = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    getSectionData(setData)
    

}, [])

  return (
    data
  )
}
