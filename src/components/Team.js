import React from 'react'
import { useNavigate } from 'react-router-dom'

const Team = () => {
  const navigate = useNavigate()

  navigate('/Team')
  return <div>WHo we are</div>
}

export default Team
