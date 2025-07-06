<!-- ModelViewer.vue -->
<template>
  <div ref="container" class="viewer-container"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// 接收父组件传入的 URL 参数
const props=defineProps({
  modelUrl: {
    type: String,
    required: true
  }
})

const container = ref(null)

onMounted(() => {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(
      75,
      container.value.clientWidth / container.value.clientHeight,
      0.1,
      1000
  )
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(container.value.clientWidth, container.value.clientHeight)
  container.value.appendChild(renderer.domElement)

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true // 阻尼（惯性效果），需要每帧更新
  controls.dampingFactor = 0.05

  const light = new THREE.HemisphereLight(0xffffff, 0xBEF7F6)
  light.position.set(0, 20, 0)
  scene.add(light)

  // ✅ 加载模型
  const loader = new GLTFLoader()
  loader.load(props.modelUrl, (gltf) => {
    scene.add(gltf.scene)
    gltf.scene.position.set(0, 0, 0)
  })

  camera.position.set(0, 1, 5)

  const animate = () => {
    requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera)
  }

  animate()
})

</script>

<style>
.viewer-container {
  width: 100%;
  height: 500px;
  background: #000;
}
</style>
