import React from 'react'
import Course from './Course'
import Statistics from './Statistics'


const SkillTest = () => {
  return (
    <div className='p-4 flex flex-col gap-4'>
        <h1 className='text-lg'>Skill Test</h1>
        <Course></Course>
        <Statistics></Statistics>
    </div>
  )
}

export default SkillTest