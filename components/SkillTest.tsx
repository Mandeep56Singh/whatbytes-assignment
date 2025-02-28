import React from 'react'
import Course from './Course'
import Statistics from './Statistics'
import ComparasionGraph from './ComparasionGraph'


const SkillTest = () => {
  return (
    <div className='p-4 flex flex-col gap-4'>
        <h1 className='text-lg'>Skill Test</h1>
        <Course></Course>
        <Statistics></Statistics>
        <ComparasionGraph></ComparasionGraph>
    </div>
  )
}

export default SkillTest