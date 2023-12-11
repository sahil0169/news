
"use client"
import React from 'react'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

function api() {

  let data=""
function setData(d)
  { data = d }
  
    const searchParams = useSearchParams()
      let catFilter = "general"
  if (searchParams.get("category")!= null) {
    catFilter=searchParams.get("category")
  }

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&category='+catFilter+'&apiKey=ec4810ca37fd45728e97017e6fdba1b1')
      .then((res) => res.json())
      .then((data1) => {
        setData(data1.articles)
      })
  }, [catFilter])

    
    console.log(data)
  return (
     data 
  )
}

export default api