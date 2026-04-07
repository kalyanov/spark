import * as THREE from "three";
export declare class SparkControls {
    fpsMovement: FpsMovement;
    pointerControls: PointerControls;
    lastTime: number;
    constructor({ canvas }: {
        canvas: HTMLCanvasElement;
    });
    update(control: THREE.Object3D, camera?: THREE.Camera): void;
}
export declare class FpsMovement {
    moveSpeed: number;
    rollSpeed: number;
    stickThreshold: number;
    rotateSpeed: number;
    keycodeMoveMapping: {
        [key: string]: THREE.Vector3;
    };
    keycodeRotateMapping: {
        [key: string]: THREE.Vector3;
    };
    gamepadMapping: {
        [button: number]: "shift" | "ctrl" | "rollLeft" | "rollRight";
    };
    capsMultiplier: number;
    shiftMultiplier: number;
    ctrlMultiplier: number;
    xr?: THREE.WebXRManager;
    enable: boolean;
    keydown: {
        [key: string]: boolean;
    };
    keycode: {
        [key: string]: boolean;
    };
    constructor({ moveSpeed, rollSpeed, stickThreshold, rotateSpeed, keycodeMoveMapping, keycodeRotateMapping, gamepadMapping, capsMultiplier, shiftMultiplier, ctrlMultiplier, xr, }?: {
        moveSpeed?: number;
        rollSpeed?: number;
        stickThreshold?: number;
        rotateSpeed?: number;
        keycodeMoveMapping?: {
            [key: string]: THREE.Vector3;
        };
        keycodeRotateMapping?: {
            [key: string]: THREE.Vector3;
        };
        gamepadMapping?: {
            [button: number]: "shift" | "ctrl" | "rollLeft" | "rollRight";
        };
        capsMultiplier?: number;
        shiftMultiplier?: number;
        ctrlMultiplier?: number;
        xr?: THREE.WebXRManager;
    });
    update(deltaTime: number, control: THREE.Object3D): void;
}
type PointerState = {
    initial: THREE.Vector2;
    last: THREE.Vector2;
    position: THREE.Vector2;
    pointerId: number;
    button?: number;
    timeStamp: DOMHighResTimeStamp;
};
export declare class PointerControls {
    canvas: HTMLCanvasElement;
    rotateSpeed: number;
    slideSpeed: number;
    scrollSpeed: number;
    swapRotateSlide: boolean;
    reverseRotate: boolean;
    reverseSlide: boolean;
    reverseSwipe: boolean;
    reverseScroll: boolean;
    moveInertia: number;
    rotateInertia: number;
    pointerRollScale: number;
    enable: boolean;
    doublePress: ({ position, intervalMs, }: {
        position: THREE.Vector2;
        intervalMs: number;
    }) => void;
    doublePressLimitMs: number;
    doublePressDistance: number;
    doublePressMoveSpeed: number;
    doublePressed?: number;
    triplePressed: boolean;
    lastUp: {
        position: THREE.Vector2;
        time: number;
    } | null;
    lastLastUp: {
        position: THREE.Vector2;
        time: number;
    } | null;
    rotating: PointerState | null;
    sliding: PointerState | null;
    lastDown: PointerState | null;
    dualPress: boolean;
    scroll: THREE.Vector3;
    rotateVelocity: THREE.Vector3;
    moveVelocity: THREE.Vector3;
    constructor({ canvas, rotateSpeed, slideSpeed, scrollSpeed, swapRotateSlide, reverseRotate, reverseSlide, reverseSwipe, reverseScroll, moveInertia, rotateInertia, pointerRollScale, doublePress, doublePressMoveSpeed, }: {
        canvas: HTMLCanvasElement;
        rotateSpeed?: number;
        slideSpeed?: number;
        scrollSpeed?: number;
        swapRotateSlide?: boolean;
        reverseRotate?: boolean;
        reverseSlide?: boolean;
        reverseSwipe?: boolean;
        reverseScroll?: boolean;
        moveInertia?: number;
        rotateInertia?: number;
        pointerRollScale?: number;
        doublePress?: ({ position, intervalMs, }: {
            position: THREE.Vector2;
            intervalMs: number;
        }) => void;
        doublePressMoveSpeed?: number;
    });
    getPointerPosition(event: PointerEvent): THREE.Vector2;
    update(deltaTime: number, control: THREE.Object3D, camera?: THREE.Camera): void;
}
export {};
