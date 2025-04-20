import React, { useEffect, useRef } from "react";
import Matter from "matter-js";
import "../styles/BoxMessage.css";

export default function BoxMessage() {
    const sceneRef = useRef(null);

    useEffect(() => {
        const Engine = Matter.Engine,
              Render = Matter.Render,
              Runner = Matter.Runner,
              Bodies = Matter.Bodies,
              Composite = Matter.Composite;

        const engine = Engine.create();

        const render = Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width: 800,
                height: 600,
                wireframes: false,
                background: "#f0f0f0"
            }
        });

        const boxA = Bodies.rectangle(400, 200, 80, 80);
        const boxB = Bodies.rectangle(450, 50, 80, 80);
        const ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

        Composite.add(engine.world, [boxA, boxB, ground]);

        Render.run(render);
        const runner = Runner.create();
        Runner.run(runner, engine);

        // Cleanup à la fin
        return () => {
            Render.stop(render);
            Runner.stop(runner);
            Matter.World.clear(engine.world);
            Matter.Engine.clear(engine);
            render.canvas.remove();
        };
    }, []);

    return (
        <div className="box-message">
            <div className="box-message__content">
                <p>This is a message box.</p>
                <div ref={sceneRef} />
            </div>
        </div>
    );
}
