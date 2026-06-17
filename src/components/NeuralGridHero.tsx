import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ParticleData {
  velocity: THREE.Vector3;
  numConnections: number;
}

export default function NeuralGridHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const frameIdRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;
    let mouseX = -10000;
    let mouseY = -10000;

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    const cameraZ = 600;
    camera.position.z = cameraZ;

    const scene = new THREE.Scene();
    const renderer: any = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const particlesLength = 250;
    const positions = new Float32Array(particlesLength * 3);
    const particles = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particlesLength * 3);

    let linesMesh: THREE.LineSegments;
    let pointCloud: THREE.Points;
    const particlesData: ParticleData[] = [];

    const maxConnections = 3;
    const minDistance = 150;
    const r = 1200;
    const rHalf = r / 2;

    const pMaterial = new THREE.PointsMaterial({
      color: 0x4CC9F0,
      size: 6,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });

    const linesMaterial = new THREE.LineBasicMaterial({
      vertexColors: false,
      color: 0x4CC9F0,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending,
    });

    function addParticle(i: number, radius: number): THREE.Vector3 {
      const x = Math.random() * radius - radius / 2;
      const y = Math.random() * radius - radius / 2;
      const z = Math.random() * radius - radius / 2;
      particlePositions[i * 3] = x;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = z;
      particlesData.push({
        velocity: new THREE.Vector3(-1 + Math.random() * 2, -1 + Math.random() * 2, -1 + Math.random() * 2),
        numConnections: 0,
      });
      return new THREE.Vector3(x, y, z);
    }

    // Initialize particles
    for (let i = 0; i < particlesLength; i++) {
      addParticle(i, r);
    }

    // Build initial line connections
    let vertexpos = 0;
    for (let i = 0; i < particlesLength; i++) {
      for (let j = i + 1; j < particlesLength; j++) {
        const dist = addParticle(j, r).distanceTo(addParticle(i, r));
        if (dist < minDistance) {
          positions[vertexpos++] = particlePositions[i * 3];
          positions[vertexpos++] = particlePositions[i * 3 + 1];
          positions[vertexpos++] = particlePositions[i * 3 + 2];
          positions[vertexpos++] = particlePositions[j * 3];
          positions[vertexpos++] = particlePositions[j * 3 + 1];
          positions[vertexpos++] = particlePositions[j * 3 + 2];
          particlesData[i].numConnections++;
          particlesData[j].numConnections++;
          if (particlesData[i].numConnections >= maxConnections || particlesData[j].numConnections >= maxConnections) {
            break;
          }
        }
      }
    }

    particles.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    pointCloud = new THREE.Points(particles, pMaterial);
    group.add(pointCloud);

    const linesGeometry = new THREE.BufferGeometry();
    linesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial);
    group.add(linesMesh);

    // Mouse handler
    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX - windowHalfX;
      mouseY = e.clientY - windowHalfY;
    };
    document.addEventListener('mousemove', onMouseMove);

    // Resize handler
    const onResize = () => {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // Animation loop
    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate);

      let vertexpos = 0;

      // Reset connections
      for (let i = 0; i < particlesLength; i++) {
        particlesData[i].numConnections = 0;
      }

      // Rebuild connections each frame
      for (let i = 0; i < particlesLength; i++) {
        for (let j = i + 1; j < particlesLength; j++) {
          const dist = addParticle(j, r).distanceTo(addParticle(i, r));
          if (dist < minDistance) {
            const linePositions = linesMesh.geometry.attributes.position.array as Float32Array;
            linePositions[vertexpos++] = particlePositions[i * 3];
            linePositions[vertexpos++] = particlePositions[i * 3 + 1];
            linePositions[vertexpos++] = particlePositions[i * 3 + 2];
            linePositions[vertexpos++] = particlePositions[j * 3];
            linePositions[vertexpos++] = particlePositions[j * 3 + 1];
            linePositions[vertexpos++] = particlePositions[j * 3 + 2];
            particlesData[i].numConnections++;
            particlesData[j].numConnections++;
            if (particlesData[i].numConnections >= maxConnections || particlesData[j].numConnections >= maxConnections) {
              break;
            }
          }
        }
      }

      linesMesh.geometry.attributes.position.needsUpdate = true;
      linesMesh.geometry.setDrawRange(0, vertexpos / 3);

      // Update particles with mouse repulsion
      for (let i = 0; i < particlesLength; i++) {
        const ix = i * 3;
        const iy = i * 3 + 1;
        const iz = i * 3 + 2;

        const distFromMouseSq = Math.pow(mouseX - particlePositions[ix], 2) + Math.pow(mouseY - particlePositions[iy], 2);
        const maxDistSq = 10000;

        if (distFromMouseSq < maxDistSq) {
          const distFromMouse = Math.sqrt(distFromMouseSq);
          const f = (maxDistSq - distFromMouseSq) / maxDistSq;
          const repulsion = 0.5 * f;
          particlesData[i].velocity.x -= (mouseX - particlePositions[ix]) / distFromMouse * repulsion;
          particlesData[i].velocity.y -= (mouseY - particlePositions[iy]) / distFromMouse * repulsion;
        }

        particlesData[i].velocity.x *= 0.95;
        particlesData[i].velocity.y *= 0.95;
        particlePositions[ix] += particlesData[i].velocity.x * 0.3;
        particlePositions[iy] += particlesData[i].velocity.y * 0.3;

        if (particlePositions[ix] <= -rHalf || particlePositions[ix] >= rHalf) {
          particlesData[i].velocity.x *= -1;
        }
        if (particlePositions[iy] <= -rHalf || particlePositions[iy] >= rHalf) {
          particlesData[i].velocity.y *= -1;
        }
        if (particlePositions[iz] <= -rHalf || particlePositions[iz] >= rHalf) {
          particlesData[i].velocity.z *= -1;
        }
      }

      particles.attributes.position.needsUpdate = true;

      group.rotation.y += 0.001;
      group.rotation.x += 0.0005;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameIdRef.current);
      document.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    />
  );
}
