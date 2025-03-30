import React, { useEffect, useState } from 'react'

export default function useProjects() {
    const [projects,setProjects] = useState([])
    useEffect(()=>{
        fetch('/projects.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])
  return [projects]
}
