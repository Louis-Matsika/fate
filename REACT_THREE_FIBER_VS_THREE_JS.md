# React Three Fiber vs Three.js: Main Differences

## Overview

**Three.js** is a low-level JavaScript 3D library that provides direct access to WebGL APIs through an object-oriented approach.

**React Three Fiber (R3F)** is a React renderer for Three.js that brings declarative, component-based 3D graphics to React applications.

## Key Differences

### 1. **Programming Paradigm**

#### Three.js (Imperative)
- **Imperative approach**: You directly manipulate objects and call methods
- Manual lifecycle management (create, update, dispose)
- Direct DOM manipulation for canvas elements
- Manual event handling and state management

```javascript
// Three.js - Imperative
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
```

#### React Three Fiber (Declarative)
- **Declarative approach**: Describe what you want, React handles the how
- Component-based architecture
- Automatic lifecycle management
- React hooks for state and effects
- JSX syntax for 3D scenes

```jsx
// React Three Fiber - Declarative
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';

function RotatingBox() {
  const meshRef = useRef();
  
  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });
  
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="green" />
    </mesh>
  );
}

function App() {
  return (
    <Canvas>
      <RotatingBox />
    </Canvas>
  );
}
```

### 2. **State Management**

#### Three.js
- Manual state management
- Need to track objects, update them manually
- No built-in reactivity
- Requires manual cleanup

#### React Three Fiber
- Leverages React's state management
- Reactive updates through props and state
- Automatic re-renders when state changes
- React hooks (`useState`, `useRef`, `useMemo`, etc.)

### 3. **Component Reusability**

#### Three.js
- Functions or classes for reusability
- Manual composition
- Less structured approach to code organization

#### React Three Fiber
- True component reusability
- Composition through JSX
- Props-based configuration
- Easy to create component libraries

```jsx
// R3F - Reusable component
function ColoredBox({ color, position }) {
  return (
    <mesh position={position}>
      <boxGeometry />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

// Usage
<ColoredBox color="red" position={[0, 0, 0]} />
<ColoredBox color="blue" position={[2, 0, 0]} />
```

### 4. **Performance & Optimization**

#### Three.js
- Full control over rendering loop
- Manual optimization required
- Need to manage object pooling, culling, etc.
- Direct access to Three.js internals

#### React Three Fiber
- Automatic optimization through React's reconciliation
- Built-in features like `useMemo` for expensive operations
- Automatic disposal of resources
- Can still access Three.js internals when needed
- Slightly more overhead due to React abstraction

### 5. **Learning Curve**

#### Three.js
- Steeper learning curve for React developers
- Need to understand WebGL concepts
- More boilerplate code
- Manual memory management

#### React Three Fiber
- Easier for React developers
- Familiar JSX syntax
- Less boilerplate
- Automatic resource cleanup

### 6. **Ecosystem & Libraries**

#### Three.js
- Large ecosystem of plugins and extensions
- Direct access to all Three.js features
- Many third-party libraries (OrbitControls, GLTFLoader, etc.)

#### React Three Fiber
- Growing ecosystem (`@react-three/drei`, `@react-three/postprocessing`, etc.)
- React-friendly wrappers for Three.js features
- Can still use Three.js libraries directly
- Additional React-specific helpers

### 7. **TypeScript Support**

#### Three.js
- Good TypeScript support via `@types/three`
- Type definitions available

#### React Three Fiber
- Excellent TypeScript support
- Type-safe props and refs
- Better IDE autocomplete for React developers

### 8. **Integration with React**

#### Three.js
- Requires manual integration
- Need to manage React lifecycle and Three.js lifecycle separately
- Potential memory leaks if not careful

#### React Three Fiber
- Native React integration
- Works seamlessly with React Router, Context, etc.
- Automatic cleanup on unmount
- Can use React Context for 3D state

### 9. **Code Organization**

#### Three.js
- Typically organized in functions/classes
- Scene setup often in one place
- Update loops separate from component logic

#### React Three Fiber
- Component-based organization
- Each 3D object can be its own component
- Logic co-located with rendering
- Easier to test individual components

### 10. **When to Use Each**

#### Use Three.js when:
- You need maximum performance and control
- Building a non-React application
- Working with complex, custom rendering pipelines
- You prefer imperative programming
- Building a library or framework

#### Use React Three Fiber when:
- Building a React/Next.js application
- Want declarative, component-based 3D graphics
- Need to integrate 3D with React state management
- Prefer React's development experience
- Building interactive UIs with 3D elements
- Team is already familiar with React

## Summary Table

| Aspect | Three.js | React Three Fiber |
|--------|----------|-------------------|
| **Paradigm** | Imperative | Declarative |
| **Syntax** | JavaScript API | JSX |
| **State** | Manual | React state |
| **Lifecycle** | Manual management | Automatic |
| **Reusability** | Functions/Classes | Components |
| **React Integration** | Manual | Native |
| **Learning Curve** | Steeper | Easier (for React devs) |
| **Performance** | Maximum control | Slight overhead |
| **TypeScript** | Good | Excellent |
| **Ecosystem** | Large | Growing |

## Conclusion

React Three Fiber is essentially Three.js wrapped in React, providing a declarative API while maintaining access to Three.js's power. Choose Three.js for maximum control and performance in non-React projects. Choose React Three Fiber for React applications where you want component-based, declarative 3D graphics with React's developer experience.
