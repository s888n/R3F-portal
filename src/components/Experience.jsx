/* eslint-disable react/no-unknown-property */
import {
	Environment,
	MeshPortalMaterial,
	OrbitControls,
	RoundedBox,
	useTexture,
	AccumulativeShadows,
	RandomizedLight,
} from "@react-three/drei";
import * as THREE from "three";
import { Demon } from "./Demon";
export default function Experience() {
	const map = useTexture("textures/lava_world.jpg");
	return (
		<>
			<OrbitControls />
			<mesh>
				<RoundedBox args={[2, 3, 0.1]} castShadow position-y={1.5}>
					<MeshPortalMaterial>
						<ambientLight intensity={1} />
						<Environment preset="sunset" />
						{/* <pointLight position={[10, 10, 10]} /> */}
						<Demon scale={0.6} position-y={-1} />
						<mesh>
							<sphereGeometry args={[5, 64, 64]} />
							<meshStandardMaterial
								map={map}
								side={THREE.BackSide}
							/>
						</mesh>
					</MeshPortalMaterial>
				</RoundedBox>
			</mesh>
			<AccumulativeShadows
				temporal
				frames={100}
				color="orange"
				colorBlend={2}
				toneMapped={true}
				alphaTest={0.75}
				opacity={2}
				scale={12}
			>
				<RandomizedLight
					intensity={Math.PI}
					amount={8}
					radius={4}
					ambient={0.5}
					position={[5, 5, -10]}
					bias={0.001}
				/>
			</AccumulativeShadows>
		</>
	);
}
