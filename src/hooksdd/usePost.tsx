import axios from 'axios'
import {useEffect, useState} from 'react'


export const usePost = (url:string,values:any) => {

  const [data, setData] = useState(null)
  const [loadding, setLoadding] = useState(false)
  const [error, setError] = useState(null)
  const [pendding, setPendding] = useState(false)

  useEffect (()=>{
    setLoadding(true)
    axios.post(url,values).then((response)=>{
      setData(response.data)
    })
    .catch((err)=>{setError(err)})
    .finally(()=>{
      setLoadding(false)
    })
  },[url,values])

  return {data, loadding, error}
}