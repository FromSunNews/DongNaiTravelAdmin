import React, { useEffect, useState } from 'react'
import { useSearchParams, Navigate, useNavigate } from 'react-router-dom'
import LoadingSpinner from '../../components/LoadingSpinner'
import { verifyUserAPI } from '../../api'
import { toast } from 'react-toastify'
import Loader from '../../components/Loader'

function Verify() {
  let [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const {email, verifyToken} = Object.fromEntries([...searchParams])
  console.log("🚀 ~ file: Verified.js:9 ~ Verify ~ verifyToken:", verifyToken)
  console.log("🚀 ~ file: Verified.js:9 ~ Verify ~ email:", email)
  const [verified, setVerified] = useState(false)

  useEffect(() => {
    if (email && verifyToken) {
      //call api
      verifyUserAPI({email, verifyToken}).then((res) =>  {
        if (res?.isVerified)
          setVerified(true)
      }).catch((error) => {
        toast.error(error.response?.data?.errors || error?.message)
        navigate('/')
      })
    }
  }, [email, verifyToken])

  if(!email || !verifyToken) {
    return <Navigate to='*'/>
  }

  if (!verified) {
    return <LoadingSpinner/>
  } 
  
  return <Navigate to={`/reset-password?verifyEmail=${email}&verifyToken=${verifyToken}`}/>
}

export default Verify