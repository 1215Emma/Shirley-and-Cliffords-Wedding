import React, { useEffect, useRef } from 'react'
import './Canvas.css'
import { Stage, Rect, Layer, Shape, Line, Image, Animation } from 'react-konva'
import { BiRightArrow } from 'react-icons/bi'
import FlipFlops from './images/Flipflops.png'


const Canvas = ({ props }) => {

  // const canvasRef = useRef(null)
  // const contextRef = useRef(null)
  // useEffect(() => {

  //   const canvas = canvasRef.current;
  //   canvas.width = window.innerWidth;
  //   canvas.height = window.innerHeight;
  //   const ctx = canvas.getContext('2d');
  //   console.log(ctx)
  // window.addEventListener('resize', function () {
  //   canvas.width = window.innerWidth;
  //   canvas.height = window.innerHeight;
  // })

  //   ctx.fillStyle = "red";
  //   ctx.strokeStyle = "red";
  //   ctx.lineWidth = 5;
  //   ctx.beginPath();
  //   ctx.arc(450, 100, 50, 0, Math.PI * 2);
  //   ctx.fill()
  //   ctx.stroke();
  // }, [canvasRef])

  // class Projectile {
  //   constructor(x, y, radius, color, velocity) {
  //     this.x = x;
  //     this.y = y;
  //     this.radius = radius;
  //     this.color = color;
  //     this.velocity = velocity;
  //   }

  //   draw() {
  //     contextRef.current.beginPath();
  //   }
  // }
  // return (
  //   <Stage
  //     width={window.innerWidth}
  //     height={window.innerHeight * 6}
  //     className="konva-stage"
  //   >
  //     <Layer>

        {/* first */}
        {/* point 1 is top left point */}
        {/* point 2 is top right point */}
        {/* when making this double diamond shape, point 3 becomes bottom left because you flip it over itself */}
        {/* point 4 is bottom right */}

        {/* THE PATTERN IS:
        Point 1: [x: 0: y: 0]
        Point 2: [x: 200, y: 200]
        Point 3: [x: 500, y: 500]
        Point 4: [x: 700, y: 500] */}
        // <Line
        //   x={window.innerWidth / 5}
        //   points={[0, 0, 200, 0, 700, 700, 700, 500]}
        //   strokeWidth={4}
        //   closed={true}
        //   width={50}
        //   height={500}
        //   fill="orange"
        //   opacity={0.9}
        // />
        {/* THE PATTERN IS:
        Point 1: [x: 700: y: 500]
        Point 2: [x: 500, y: 500]
        Point 3: [x: 0, y: 1000]
        Point 4: [x: 0, y: 800] 
        
        What did we do? point 1 = point 4, point 2 = point 3 point 3 and 4, the y is difference of 200, the x is determinate of where the flat side is*/}
    //     <Line
    //       x={window.innerWidth / 5}
    //       points={[700, 500, 700, 700, 0, 800, 0, 1000]}
    //       strokeWidth={4}
    //       closed={true}
    //       width={50}
    //       height={500}
    //       fill="#D18716"
    //       opacity={0.9}
    //     />

    //     <Line
    //       x={window.innerWidth / 5}
    //       points={[0, 800, 0, 1000, 700, 1200, 700, 1400]}
    //       strokeWidth={4}
    //       closed={true}
    //       width={50}
    //       height={500}
    //       fill="orange"
    //       opacity={0.9}
    //     />

    //     <Line
    //       x={window.innerWidth / 5}
    //       points={[700, 1400, 700, 1200, 0, 1800, 0, 1600]}
    //       strokeWidth={4}
    //       closed={true}
    //       width={50}
    //       height={500}
    //       fill="#D18716"
    //       opacity={0.9}
    //     />
    //     <Line
    //       x={window.innerWidth / 5}
    //       points={[0, 1600, 0, 1800, 700, 2200, 700, 2400]}
    //       strokeWidth={4}
    //       closed={true}
    //       width={50}
    //       height={500}
    //       fill="orange"
    //       opacity={0.9}
    //     />
    //     <Line
    //       x={window.innerWidth / 5}
    //       points={[700, 2400, 700, 2200, 0, 3000, 0, 2800]}
    //       strokeWidth={4}
    //       closed={true}
    //       width={50}
    //       height={500}
    //       fill="#D18716"
    //       opacity={0.9}
    //     />
    //     <Line
    //       x={window.innerWidth / 5}
    //       points={[0, 2800, 0, 3000, 700, 3200, 700, 3400]}
    //       strokeWidth={4}
    //       closed={true}
    //       width={50}
    //       height={500}
    //       fill="orange"
    //       opacity={0.9}
    //     />
    //     <Line
    //       x={window.innerWidth / 5}
    //       points={[700, 3400, 700, 3200, 0, 4000, 0, 3800]}
    //       strokeWidth={4}
    //       closed={true}
    //       width={50}
    //       height={500}
    //       fill="#D18716"
    //       opacity={0.9}
    //     />
    //     <Line
    //       x={window.innerWidth / 5}
    //       points={[0, 3800, 0, 4000, 700, 4400, 700, 4600]}
    //       strokeWidth={4}
    //       closed={true}
    //       width={50}
    //       height={500}
    //       fill="orange"
    //       opacity={0.9}
    //     />
    //     <Line
    //       x={window.innerWidth / 5}
    //       points={[700, 4600, 700, 4400, 0, 5200, 0, 5000]}
    //       strokeWidth={4}
    //       closed={true}
    //       width={50}
    //       height={500}
    //       fill="#D18716"
    //       opacity={0.9}
    //     />
    //     <Line
    //       x={window.innerWidth / 5}
    //       points={[0, 5000, 0, 5200, 700, 5400, 700, 5600]}
    //       strokeWidth={4}
    //       closed={true}
    //       width={50}
    //       height={500}
    //       fill="orange"
    //       opacity={0.9}
    //     />
    //     <Line
    //       x={window.innerWidth / 5}
    //       points={[700, 5600, 700, 5400, 0, 6000, 0, 5800]}
    //       strokeWidth={4}
    //       closed={true}
    //       width={50}
    //       height={500}
    //       fill="#D18716"
    //       opacity={0.9}
    //     />
    //     <Line
    //       x={window.innerWidth / 5}
    //       points={[0, 5800, 0, 6000, 700, 6400, 700, 6600]}
    //       strokeWidth={4}
    //       closed={true}
    //       width={50}
    //       height={500}
    //       fill="orange"
    //       opacity={0.9}
    //     />
    //   </Layer>
    // </Stage>
    // THE RULE:
    // if going from left to right, you take y + 800, y + 1000
    // if going from right to left, you take x + 1200, x + 1000
 
  // );
  // return <canvas ref={canvasRef} id="canvas" {...props} />
}

export default Canvas
