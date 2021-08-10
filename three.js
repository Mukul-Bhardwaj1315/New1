const scene=new THREE.Scene()

const geometry = new THREE.BoxGeometry(1,1,1)
const material=new THREE.MeshBasicMaterial({color:0xff0000})
const mesh=new THREE.Mesh(geometry,material)
mesh.rotation.y=45
scene.add(mesh)

const sizes={width:800, height:600}
const cam=new THREE.PerspectiveCamera(75, sizes.width/sizes.height)

cam.position.z=2
//cam.rotaion.x=15
scene.add(cam)

const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
	canvas: canvas
})
renderer.setSize(sizes.width,sizes.height)

renderer.render(scene, cam)

let time = Date.now()

//Animation
const tick = () =>
{
//Time
const currentTime = Date.now()
const deltaTime = currentTime-time
time=currentTime

//Update Objects
mesh.rotation.y+=.001*deltaTime
mesh.rotation.z+=.001*deltaTime
mesh.rotation.x+=.001*deltaTime


//Render
    renderer.render(scene, cam)

    window.requestAnimationFrame(tick)
}
tick()
