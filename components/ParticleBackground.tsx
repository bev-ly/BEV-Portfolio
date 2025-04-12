"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>(0)
  const { resolvedTheme } = useTheme()
  const isDarkMode = resolvedTheme === "dark"

  // Initialize particles
  const initParticles = (width: number, height: number) => {
    const particles: Particle[] = []
    const particleCount = Math.min(Math.floor((width * height) / 10000), 100)

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      })
    }

    particlesRef.current = particles
  }

  // Update and draw particles
  const animateParticles = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const { width, height } = dimensions

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Update and draw particles
    particlesRef.current.forEach((particle, index) =>  {
      // Update position
      particle.x += particle.speedX
      particle.y += particle.speedY

      // Bounce off edges
      if (particle.x < 0 || particle.x > width) particle.speedX *= -1
      if (particle.y < 0 || particle.y > height) particle.speedY *= -1

      // Draw particle
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)

      // Set color based on theme
      if (isDarkMode) {
        ctx.fillStyle = `rgba(56, 189, 248, ${particle.opacity})`
      } else {
        ctx.fillStyle = `rgba(14, 165, 233, ${particle.opacity})`
      }

      ctx.fill()

      // Connect particles that are close to each other
      connectParticles(particlesRef.current, index, ctx)
    })

    animationRef.current = requestAnimationFrame(animateParticles)
  }

  // Draw lines between nearby particles
  const connectParticles = (particles: Particle[], index: number, ctx: CanvasRenderingContext2D) => {
    const { width, height } = dimensions
    const maxDistance = Math.min(width, height) * 0.07
  
    for (let i = index + 1; i < particles.length; i++) {
      const particle2 = particles[i]
      const dx = particles[index].x - particle2.x
      const dy = particles[index].y - particle2.y
      const distance = Math.sqrt(dx * dx + dy * dy)
  
      if (distance < maxDistance) {
        const opacity = 1 - distance / maxDistance
  
        ctx.beginPath()
        ctx.moveTo(particles[index].x, particles[index].y)
        ctx.lineTo(particle2.x, particle2.y)
  
        if (isDarkMode) {
          ctx.strokeStyle = `rgba(56, 189, 248, ${opacity * 0.2})`
        } else {
          ctx.strokeStyle = `rgba(14, 165, 233, ${opacity * 0.1})`
        }
  
        ctx.lineWidth = 1
        ctx.stroke()
      }
    }
  }

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const width = window.innerWidth
        const height = window.innerHeight
        setDimensions({ width, height })
        initParticles(width, height)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Start animation
  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      animateParticles()
    }

    return () => {
      cancelAnimationFrame(animationRef.current)
    }
  }, [dimensions, isDarkMode])

  return (
    <canvas
      ref={canvasRef}
      width={dimensions.width}
      height={dimensions.height}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  )
}

export default ParticleBackground

