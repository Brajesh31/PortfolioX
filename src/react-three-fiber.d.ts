import * as THREE from "three";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            mesh: React.PropsWithChildren<{
                ref?: React.Ref<THREE.Mesh>;
                position?: [number, number, number];
                rotation?: [number, number, number];
            }>;
            boxGeometry: React.PropsWithChildren<{
                args?: [number, number, number];
            }>;
            meshPhongMaterial: React.PropsWithChildren<{
                color?: string | number | THREE.Color;
            }>;
        }
    }
}
