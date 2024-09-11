'use client'

import { Button } from '@nextui-org/react'
import React from 'react'
import TextComponent from './TextComponent'

const WelcomePage = () => {
console.log('hey brother man')

  return (
    <>
        <h1 className="text-center text-3xl mt-3">Welcome to the Blog</h1>
        <p className='text-center mb-[20%]'>Click to see anything and everything</p>
        <div className='flex justify-center'>
        <Button color="primary" variant='shadow' onClick={() => console.log('test')}>
            Button
        </Button>
        <TextComponent/>
        </div>
    </>
  )
}

export default WelcomePage