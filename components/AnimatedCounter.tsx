'use client'

import React from 'react'
import CountUp from 'react-countup'
import { formatAmount } from '@/lib/utils'

const AnimatedCounter = ({amount}:{amount:number}) => {
  return (
    <div>
        <CountUp 
            decimals={2}
            prefix='$'
            duration={0.5}
            end={amount}
        />
        
    </div>
  )
}

export default AnimatedCounter