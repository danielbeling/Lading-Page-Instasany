'use client'
import Image from 'next/image';
import { useEffect, useRef } from 'react';

import GridContainer from './grid';
import IconFile from '../../public/assets/icon-file.svg';
import IconHand from '../../public/assets/icon-hand.svg';
import IconHand2 from '../../public/assets/icon-hand-02.svg';
import IconMockup from '../../public/assets/mockup.svg'
import gsap from 'gsap';


export default function SectionHero() {
  const textHeroRef = useRef(null) 
  const mockupLeftRef = useRef(null)
  const mockupRighttRef = useRef(null)

  useEffect(() => {
    const textHero = textHeroRef.current
    const mLeft = mockupLeftRef.current
    const mRight = mockupRighttRef.current


    gsap.fromTo(textHero, {
      opacity: 0 ,
      y:20
    }, {
      opacity: 1,
      y: 0,
      duration: .6,
      ease: 'power4.out',
    })

    gsap.fromTo(mLeft, {
      opacity:1,
      rotate: 0
    }, {
      rotate: -10,
      duration: 1
    })
    gsap.fromTo(mRight, {
      opacity: 1,
      rotate: 0
    }, {
      rotate: 10,
      duration: 1
    })
  }, []);

  return (
    <section className='relative w-full bg-hero bg-no-repeat bg-top bg-green-primary h-section-hero overflow-hidden border-t border-t-green-border pt-16'>
      <GridContainer className='flex flex-col items-center'>
        <div className='w-full max-w-text-hero text-center opacity-0' ref={textHeroRef}>
          <h3 className='text-xl font-medium text-green-actived mb-4'>Novo curso focado em instagram</h3>
          <h1 className='text-white text-7xl font-semibold mb-8'>Destrave as suas habilidades</h1>
          <div className='flex items-center justify-center gap-10'>
            <button className='flex items-center gap-2'>
              <Image
              src={IconFile}
              alt='Icon File'
              />
              <span className='text-white font-medium'>Assinar lista de espera</span>
            </button>
            <button className='bg-green-btn py-4 px-5 rounded-full text-green-primary font-medium'>
              Começa agora
            </button>
          </div>
        </div>
        <div className='relative w-full max-w-area-icons h-28 mt-4'>
          <Image
          src={IconHand}
          alt='Icon Hand'
          className='absolute left-0 bottom-0'
          />
           <Image
          src={IconHand2}
          alt='Icon Hand'
          className='absolute top-0 right-0'
          />
        </div>
        <div className='absolute -bottom-44 w-full max-w-area-mockups flex justify-between'>
          <Image
          src={IconMockup}
          alt='Icon Mockup'
          className='relative -rotate-12 top-[1.1rem] left-[3.3rem] opacity-0'
          ref={mockupLeftRef}
          />
          <Image
          src={IconMockup}
          alt='Icon Mockup'
          className='relative rotate-12 top-[1.1rem] right-[3.3rem] opacity-0'
          ref={mockupRighttRef}
          />
        </div>
      </GridContainer>
    </section>
  )
}