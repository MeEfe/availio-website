import React, { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface CursorVisualizationProps {
  isHovering: boolean;
}

function CursorVisualization({ isHovering }: CursorVisualizationProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const time = useRef(0);

  // Create particles geometry
  const particlesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(20 * 3); // 20 particles

    for (let i = 0; i < 20; i++) {
      const angle = (i / 20) * Math.PI * 2;
      const radius = 1.2 + Math.random() * 0.4;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = Math.sin(angle) * radius;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 0.2;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  // Material with your accent color - more visible
  const material = useMemo(() =>
    new THREE.MeshBasicMaterial({
      color: '#4ade80',
      transparent: true,
      opacity: 1.0
    }), []
  );

  const particlesMaterial = useMemo(() =>
    new THREE.PointsMaterial({
      color: '#4ade80',
      size: 0.25,
      transparent: true,
      opacity: 0.8
    }), []
  );

  useFrame(() => {
    if (!meshRef.current || !particlesRef.current) return;

    time.current += 0.02;

    // Animate main cursor
    meshRef.current.rotation.z = time.current;
    meshRef.current.scale.setScalar(isHovering ? 1.4 : 1);

    // Animate particles
    particlesRef.current.rotation.z = -time.current * 0.3;
  });

  return (
    <>
      {/* Main cursor shape */}
      <mesh ref={meshRef}>
        <ringGeometry args={[0.5, 0.7, 8]} />
        <primitive object={material} />
      </mesh>

      {/* Particles */}
      <points ref={particlesRef}>
        <primitive object={particlesGeometry} />
        <primitive object={particlesMaterial} />
      </points>

      {/* Center dot */}
      <mesh>
        <circleGeometry args={[0.2, 8]} />
        <meshBasicMaterial color="#4ade80" transparent opacity={1.0} />
      </mesh>
    </>
  );
}

export default function ThreeCursor() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.classList.contains('cursor-pointer') ||
        target.closest('button') !== null ||
        target.closest('a') !== null ||
        target.classList.contains('box') ||
        target.closest('.box') !== null
      );
    };

    // Hide default cursor globally
    const style = document.createElement('style');
    style.textContent = `
      * {
        cursor: none !important;
      }
      a, button, [role="button"], input, textarea, select {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.head.removeChild(style);
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed top-0 left-0 w-16 h-16 z-[60]"
      style={{
        transform: `translate3d(${mousePosition.x - 32}px, ${mousePosition.y - 32}px, 0)`,
        pointerEvents: 'none',
      }}
    >
      <Canvas
        style={{
          pointerEvents: 'none',
          width: '100%',
          height: '100%'
        }}
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance"
        }}
      >
        <CursorVisualization isHovering={isHovering} />
      </Canvas>
    </div>
  );
}