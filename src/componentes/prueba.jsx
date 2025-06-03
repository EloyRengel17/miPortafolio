import * as THREE from 'three';
import React, { useRef, useState, Suspense } from 'react';
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLine, MeshLineMaterial } from 'meshline';
import { PerspectiveCamera, OrbitControls, RenderTexture, useTexture, Text } from '@react-three/drei';

extend({ MeshLine, MeshLineMaterial });

function BadgeTexture({ user }) {
  return (
    <>
      <color attach="background" args={['#202020']} />
      <Text position={[0, 0.5, 0]} fontSize={0.3} color="white" anchorX="center" anchorY="middle">ID CARD</Text>
      <Text position={[0, 0, 0]} fontSize={0.2} color="white" anchorX="center" anchorY="middle">Name: {user.name}</Text>
      <Text position={[0, -0.3, 0]} fontSize={0.15} color="white" anchorX="center" anchorY="middle">Role: {user.role}</Text>
    </>
  );
}

export function Band() {
  const band = useRef();
  const fixed = useRef();
  const j1 = useRef();
  const j2 = useRef();
  const j3 = useRef();
  const card = useRef();
  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const dir = new THREE.Vector3();
  const [dragged, drag] = useState(false);
  const user = { name: "Juan Pérez", role: "Developer" };
  const texture = useTexture('https://placehold.co/200x200/000000/FFFFFF?text=Background');
  const nodes = { card_geometry: new THREE.BoxGeometry(1.6, 2.25, 0.02) };
  const { width, height } = useThree((state) => state.size);
  const curve = useState(() => new THREE.CatmullRomCurve3([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0)]))[0];
  const planeWidth = 5;

  useRopeJoint(fixed, j1, { x: 1, y: 0, z: 0 }, { x: 0, y: 0, z: 1 });
  useRopeJoint(j1, j2, { x: 1, y: 0, z: 0 }, { x: 0, y: 0, z: 1 });
  useRopeJoint(j2, j3, { x: 1, y: 0, z: 0 }, { x: 0, y: 0, z: 1 });
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.45, 0]]);

  useFrame((state) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      card.current.setKinematicTranslation({ x: vec.x - dragged.x, y: vec.y - dragged.y, z: vec.z - dragged.z });
    }
    curve.points[0].copy(j3.current.translation());
    curve.points[1].copy(j2.current.translation());
    curve.points[2].copy(j1.current.translation());
    curve.points[3].copy(fixed.current.translation());
    band.current.geometry.setPoints(curve.getPoints(32));
    ang.copy(card.current.angvel());
    rot.copy(card.current.rotation());
    card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
  });

  return (
    <>
      <RigidBody ref={fixed} type="fixed">
        <BallCollider args={[0.1]} />
      </RigidBody>
      <RigidBody position={[0.5, 0, 0]} ref={j1}>
        <BallCollider args={[0.1]} />
      </RigidBody>
      <RigidBody position={[1, 0, 0]} ref={j2}>
        <BallCollider args={[0.1]} />
      </RigidBody>
      <RigidBody position={[1.5, 0, 0]} ref={j3}>
        <BallCollider args={[0.1]} />
      </RigidBody>
      <RigidBody ref={card} type={dragged ? 'kinematicPosition' : 'dynamic'}>
        <CuboidCollider args={[0.8, 1.125, 0.01]} />
        <mesh
          onPointerUp={() => drag(false)}
          onPointerDown={(e) => {
            const cardTranslation = card.current.translation();
            drag(new THREE.Vector3().copy(e.point).sub(new THREE.Vector3(cardTranslation.x, cardTranslation.y, cardTranslation.z)));
          }}
        >
          <planeGeometry args={[0.8 * 2, 1.125 * 2]} />
          <meshBasicMaterial color="white" side={THREE.DoubleSide} transparent opacity={0} />
        </mesh>
      </RigidBody>
      <PerspectiveCamera makeDefault manual aspect={1.05} position={[0.49, 0.22, 2]} />
      <mesh position={[0, 0, -1]}>
        <planeGeometry args={[planeWidth, planeWidth]} />
        <meshBasicMaterial transparent alphaMap={texture} side={THREE.BackSide} />
      </mesh>
      <mesh geometry={nodes.card_geometry}>
        <meshPhysicalMaterial
          clearcoat={1}
          clearcoatRoughness={0.15}
          iridescence={1}
          iridescenceIOR={1}
          iridescenceThicknessRange={[0, 2400]}
          metalness={0.5}
          roughness={0.3}
        >
          <RenderTexture attach="map" height={2000} width={2000}>
            <BadgeTexture user={user} />
          </RenderTexture>
        </meshPhysicalMaterial>
      </mesh>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial color="white" resolution={[width, height]} lineWidth={0.1} />
      </mesh>
    </>
  );
}

export default function ThreeDCardScene() {
  return (
    <div style={{ width: '100%', height: '500px', backgroundColor: '#1a1a1a', margin: '20px 0' }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-5, -5, -5]} intensity={0.5} />
        <OrbitControls />
        <Physics debug={false} interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
          <Suspense fallback={null}>
            <Band />
          </Suspense>
        </Physics>
      </Canvas>
    </div>
  );
} 