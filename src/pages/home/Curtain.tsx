import { motion } from "framer-motion";
import { useEffect, useState } from "react";
// import {HiOutlineCursorClick} from ''

const Curtain = () => {
  const [reveal, setReveal] = useState<boolean>(false);

  const showSVG = {
    initial: { pathLength: 0, fillOpacity: 0 },
    animate: {
      pathLength: 1,
      fillOpacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 1,
        fillOpacity: {
          duration: 2,
        },
      },
    },
    text: { startOffset: "-90%" },
    textShow: { startOffset: "5%" },
  };

  useEffect(() => {
    setTimeout(() => {
      setReveal(true);
    }, 5000);
  }, []);

  return (
    <motion.div
      animate={{ y: !reveal ? "0" : "-100%" }}
      transition={{ duration: 1 }}
      className="fixed flex w-full h-full bg-white border-b-4 border-black place-content-center"
    >
      <motion.svg
        viewBox="0 0 600 600"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        variants={showSVG}
        initial="initial"
        animate="animate"
      >
        <defs>
          <linearGradient
            id="logo-gradient"
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#FFE337">
              <animate
                attributeName="stop-color"
                values="#FFE337;#FFE337; #FC9C54; #FD5E53; #4B3D60;"
                dur="2s"
                fill="freeze"
              ></animate>
            </stop>

            <stop offset="100%" stopColor="#FFE337">
              <animate
                attributeName="stop-color"
                values=" #FFE337; #FC9C54; #FD5E53; #4B3D60;#B19CD9;"
                dur="2s"
                fill="freeze"
              ></animate>
            </stop>
          </linearGradient>
        </defs>

        <g transform="translate(167,80)">
          <path
            id="team"
            fill="url(#logo-gradient)"
            onClick={() => setReveal(true)}
            className="cursor-pointer"
            //  filter="url(#f2)"
          >
            <animate
              attributeName="d"
              // transform="translate(270,70)"
              dur="1s"
              values="M200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100Z; M55.5 100C55.5 155.228 100 200 100 200C44.7715 200 0 155.228 0 100C0 44.7715 44.7715 0 100 0C100 0 55.5 44.7715 55.5 100Z"
              fill="freeze"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 100 100"
              to="230 100 100"
              dur="2s"
              fill="freeze"
            />
          </path>
        </g>

        <path
          className="border border-black"
          stroke="black"
          strokeWidth="0"
          fill="none"
          d="M180 270 Q200 70 420 120"
          id="logo-title"
        />
        <text>
          <textPath
            textLength="48%"
            lengthAdjust="spacingAndGlyphs"
            xlinkHref="#logo-title"
            fontSize="2rem"
            startOffset="-100%"
            fontFamily="Akaya Kanadaka"
            // fill="yellow"
          >
            Moonshine
            <animate
              attributeName="startOffset"
              begin="1s"
              dur="1s"
              values="-90%; 5%"
              keyTimes="0; 1"
              keySplines="0 0 .59 1; 0 0 .59 1"
              fill="freeze"
            />
            <animate
              attributeName="fill"
              begin="team.mouseenter"
              dur="0.5s"
              to="gold"
              fill="freeze"
            />
          </textPath>
        </text>
        <g className="pointer-events-none">
          <motion.path
            variants={showSVG}
            d="m430.277008,110.886002l-126.175995,233.943008l5.369995,1.533997l125.408997,-241.230011l-4.602997,5.753006z"
            stroke-width="1px"
            stroke="#7f7f7f"
            fill-rule="evenodd"
            fill="#7f7f7f"
            id="path8942"
          />

          <motion.path
            variants={showSVG}
            d="m303.717987,364.199005c-14.520996,4.014984 -30.891998,-2.908997 -43.034973,-10.52301c-9.099014,-6.13501 -27.702011,-26.792999 -16.399017,-38.40799c2.902008,-2.981995 8.497009,-5.203003 11.447006,-6.76001c28.697983,-6.471008 66.561996,2.604004 88.126999,23.205017c7.057983,6.742981 12.040009,14.983002 16.826996,23.363983c13.774994,39.360016 -26.441986,60.257996 -60.217987,54.442993l4.320984,-2.494995c33.899994,5.985992 63.958008,-10.981995 51.746002,-49.550995c-4.674988,-8.578003 -9.509003,-16.641998 -16.687012,-23.445007c-22.185974,-21.024994 -60.001984,-29.746002 -89.312988,-22.520996c0.55101,-0.464996 2.227005,-1.829987 1.653,-1.393982c-4.50499,3.416992 -6.177994,7.619995 -5.332993,13.258972c1.714996,11.443024 9.652985,20.936005 18.806,27.429016c12.191986,7.627991 29.531982,14.964996 44.059998,9.932007l-6.002014,3.464996z"
            stroke-width="1px"
            stroke="#3f007f"
            fill-rule="nonzero"
            fill="#3f007f"
            id="path11912"
          />
          <motion.path
            variants={showSVG}
            d="m382.372009,310.201996c-34.97702,-21.544983 -79.32901,-31.638 -120.100006,-31.509003c0.070984,1.10202 -13.783997,0.149994 -13.900009,5.080994c-0.035995,1.550018 3.432007,-1.453979 4.626007,-0.46698c1.382996,1.143982 0.503998,3.587982 1.166,5.255981c0.768997,1.934998 1.931,3.699005 3.079987,5.436005c7.159027,10.830017 18.372009,20.779022 29.795013,27.024017c1.536011,1.063995 2.329987,0.871002 3.785004,0.437988l-4.144012,5.752014c-1.759003,0.135986 -3.315002,-0.110016 -4.928986,-0.976013c-21.630005,-10.30899 -59.725006,-47.210999 -13.109009,-55.175995c39.992004,-0.912994 87.290009,8.619995 118.98999,34.567993l-5.259979,4.572998z"
            stroke-width="1px"
            stroke="#3f007f"
            fill-rule="nonzero"
            fill="#3f007f"
            id="path11916"
          />
          <motion.path
            variants={showSVG}
            d="m301.315002,245.817001c0.923004,-31.570007 18.375,-38.065994 48.061005,-31.694c22.501007,6.595001 46.190002,24.809998 47.260986,50.331985c0.130005,3.082001 -0.255981,8.263 -2.027008,11.009003c-4.719971,7.319 -13.230988,10.09201 -20.862,12.856018c-22.340973,3.897003 -46.554993,5.781006 -68.656982,-0.809998l2.467987,-2.476013c18.735016,12.40799 45.770996,5.588989 66.270996,3.173004c48.205017,-17.489014 8.220001,-65.901001 -24.547974,-73.981995c-21.074005,-4.518005 -51.973999,-1.688004 -42.435028,27.912994l-5.531982,3.679001z"
            stroke-width="1px"
            stroke="#3f007f"
            fill-rule="nonzero"
            fill="#3f007f"
            id="path11918"
          />
          <motion.path
            variants={showSVG}
            d="m178.440994,263.390015c10.019012,23.947998 27.363007,44.91098 47.483002,61.03598c28.518997,19.882996 64.688004,30.069 95.319992,9.912994c6.15802,-4.60498 11.196014,-10.53598 15.917023,-16.572998l5.156982,-2.298004c-7.174988,8.096008 -14.621002,16.016022 -23.410004,22.409027c-30.941986,19.496979 -66.611984,8.132996 -94.918991,-11.683014c-20.987991,-15.927002 -35.720993,-37.494995 -51.039993,-58.618011l5.491989,-4.185974z"
            stroke-width="1px"
            stroke="#3f007f"
            fill-rule="nonzero"
            fill="#3f007f"
            id="path11924"
          />

          <motion.path
            variants={showSVG}
            d="m235.718994,362.187988l94.875,10.968018l-88.843994,-0.5l45.125,19.687988l69.031006,-29.156006l-120.187012,-1z"
            stroke-width="1px"
            stroke="#000000"
            fill-rule="evenodd"
            fill="#000000"
            id="path3086"
          />
          <motion.path
            variants={showSVG}
            d="m286.484985,386.966003l0,105.466003l-23.393982,0l0,-3.835022c0,0 18.791992,0 19.941986,-11.505981c1.151001,-11.505005 0.384003,-90.125 0.384003,-90.125l3.067993,0z"
            stroke-width="1px"
            stroke="#000000"
            fill-rule="evenodd"
            fill="#000000"
            id="path5269"
          />
          <use
            xlinkHref="#path5269"
            height="1052.36"
            width="744.094"
            y="0"
            x="0"
            transform="matrix(-1 0 0 1 572.97 0)"
            id="use5997"
          />
        </g>
      </motion.svg>{" "}
    </motion.div>
  );
};

export default Curtain;
