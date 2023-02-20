import axios from 'axios'
import {useEffect, useState} from 'react'

export const useFetch = (url:string) => {

  const [data, setData] = useState(null)
  const [loadding, setLoadding] = useState(false)
  const [error, setError] = useState(null)

  useEffect (()=>{
    setLoadding(true)
    axios.get(url).then((response)=>{
      setData(response.data)
    })
    .catch((err)=>{setError(err)})
    .finally(()=>{
      setLoadding(false)
    })
  },[url])

  return {data, loadding, error}
}

