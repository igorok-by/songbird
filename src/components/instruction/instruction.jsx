import React, { memo } from 'react'
import './instruction.scss'

const Instruction = () => {
  return (
    <div className="instruction">
      <p>Послушайте плеер.</p>
      <p>Выберите птицу из списка.</p>
    </div>
  )
}

export default memo(Instruction)
