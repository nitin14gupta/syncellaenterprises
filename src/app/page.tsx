'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import NeonHUD from '@/components/NeonHUD'
import { useProgress } from '@/components/ProgressProvider'
import FloatingCTA from '@/components/FloatingCTA'

const SpaceLanding = dynamic(() => import('@/components/r3f/SpaceLanding'), { ssr: false })
const AboutScene = dynamic(() => import('@/components/r3f/AboutScene'), { ssr: false })
const ServicesScene = dynamic(() => import('@/components/r3f/ServicesScene'), { ssr: false })
const ProductsScene = dynamic(() => import('@/components/r3f/ProductsScene'), { ssr: false })
const ContactScene = dynamic(() => import('@/components/r3f/ContactScene'), { ssr: false })
const FinalScene = dynamic(() => import('@/components/r3f/FinalScene'), { ssr: false })
const AboutOverlay = dynamic(() => import('@/components/overlays/AboutOverlay'), { ssr: false })
const ProductsOverlay = dynamic(() => import('@/components/overlays/ProductsOverlay'), { ssr: false })
const ServicesOverlay = dynamic(() => import('@/components/overlays/ServicesOverlay'), { ssr: false })
const ContactOverlay = dynamic(() => import('@/components/overlays/ContactOverlay'), { ssr: false })
const FinalOverlay = dynamic(() => import('@/components/overlays/FinalOverlay'), { ssr: false })

export default function Home() {
  const { stepIndex } = useProgress()
  const renderScene = () => {
    switch (stepIndex) {
      case 0: return <SpaceLanding />
      case 1: return <AboutScene />
      case 2: return <ServicesScene />
      case 3: return <ProductsScene />
      case 4: return <ContactScene />
      case 5: return <FinalScene />
      default: return <SpaceLanding />
    }
  }
  const renderOverlay = () => {
    switch (stepIndex) {
      case 1: return <AboutOverlay />
      case 2: return <ServicesOverlay />
      case 3: return <ProductsOverlay />
      case 4: return <ContactOverlay />
      case 5: return <FinalOverlay />
      default: return null
    }
  }
  return (
    <div className="landing-shell" data-cursor-accent="#8A2BE2">
      {renderScene()}
      {renderOverlay()}
      <NeonHUD />
      <FloatingCTA />
    </div>
  );
}
