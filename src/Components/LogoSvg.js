import {useState, useEffect, useRef} from "react";
import { motion } from 'framer-motion/dist/framer-motion'



//library: FramerMotion
const LogoSvg = () => {


   console.log('svg')

    const letterS = {
        visible: { opacity: 1, y:0, transition:{ delay:0.3 }},
        hidden: { opacity: 1, y: 10 }
    }
    const letterK = {
        visible: { opacity: 1, y:0, transition:{ delay:0.3 }},
        hidden: { opacity: 1, y: -10 }
    }
    const letterP = {
        visible: { opacity: 1, x:0, transition:{ delay:1}},
        hidden: { opacity: 1, x: -112, staggerChildren: 0.5 }
    }
    const eeEs = {
        visible: { opacity: 1, x:0, transition:{ duration:1 }},
        hidden: { opacity: 0, x:-30, staggerChildren: 0.5 }
    }

    const lightgreen = {
        visible: { opacity: 1, x:0, transition:{ duration:0.15, delay:1.10 }},
        hidden: { opacity: 0, x: -50 }
    }

    const mildgreen = {
        visible: { opacity: 1, x:0, transition:{ duration:0.13, delay:1.05 }},
        hidden: { opacity: 0, x: -51 }
    }

    const darkgreen = {
        visible: { opacity: 1, x:0, transition:{ duration:0.11, delay:1.00 }},
        hidden: { opacity: 0, x: -52 }
    }


    return (
        <motion.div >

            {/*<?xml version="1.0" encoding="UTF-8"?>*/} {/*svg file*/}
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" contentScriptType="text/ecmascript"
                 zoomAndPan="magnify" contentStyleType="text/css" viewBox="88 125 200 145" width="340" height="165"
                 preserveAspectRatio="xMidYMid meet" version="1.0">
                <defs>
                    <filter x="0%" y="0%" width="100%" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkType="simple"
                            xlinkActuate="onLoad" height="100%" id="filter-remove-color" xlinkShow="other">
                        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" colorInterpolationFilters="sRGB"/>
                    </filter>
                    <g>
                        <g id="glyph-0-0"/>
                        <g id="glyph-0-1">
                            <path d="M 26.015625 1.828125 C 20.847656 1.828125 16.300781 0.722656 12.375 -1.484375 C 8.457031 -3.691406 5.472656 -6.8125 3.421875 -10.84375 L 10.390625 -14.265625 C 13.203125 -8.253906 18.71875 -5.25 26.9375 -5.25 C 30.894531 -5.25 34.164062 -5.972656 36.75 -7.421875 C 39.332031 -8.867188 40.625 -11.113281 40.625 -14.15625 C 40.625 -17.269531 39.578125 -19.585938 37.484375 -21.109375 C 35.398438 -22.628906 31.734375 -23.617188 26.484375 -24.078125 C 19.171875 -24.691406 13.9375 -26.328125 10.78125 -28.984375 C 7.625 -31.648438 6.046875 -35.1875 6.046875 -39.59375 C 6.046875 -44.539062 7.832031 -48.382812 11.40625 -51.125 C 14.988281 -53.863281 19.898438 -55.234375 26.140625 -55.234375 C 36.710938 -55.234375 43.898438 -51.050781 47.703125 -42.6875 L 40.75 -39.265625 C 39.445312 -42.304688 37.5625 -44.546875 35.09375 -45.984375 C 32.625 -47.429688 29.445312 -48.15625 25.5625 -48.15625 C 21.601562 -48.15625 18.578125 -47.429688 16.484375 -45.984375 C 14.398438 -44.546875 13.359375 -42.492188 13.359375 -39.828125 C 13.359375 -37.316406 14.476562 -35.28125 16.71875 -33.71875 C 18.96875 -32.164062 22.828125 -31.160156 28.296875 -30.703125 C 35.066406 -30.085938 40.109375 -28.429688 43.421875 -25.734375 C 46.734375 -23.035156 48.390625 -19.476562 48.390625 -15.0625 C 48.390625 -11.488281 47.359375 -8.425781 45.296875 -5.875 C 43.242188 -3.320312 40.503906 -1.398438 37.078125 -0.109375 C 33.660156 1.179688 29.972656 1.828125 26.015625 1.828125 Z M 26.015625 1.828125 "/>
                        </g>
                        <g id="glyph-0-2">
                            <path d="M 40.171875 0 L 21.453125 -27.5 L 14.953125 -21.234375 L 14.953125 0 L 7.1875 0 L 7.1875 -82.859375 L 14.953125 -82.859375 L 14.953125 -31.046875 L 38.34375 -53.40625 L 48.390625 -53.40625 L 26.8125 -32.640625 L 48.84375 0 Z M 40.171875 0 "/>
                        </g>
                        <g id="glyph-0-3">
                            <path d="M 33.671875 -55.234375 C 38.765625 -55.234375 43.328125 -54.015625 47.359375 -51.578125 C 51.390625 -49.148438 54.546875 -45.765625 56.828125 -41.421875 C 59.117188 -37.085938 60.265625 -32.144531 60.265625 -26.59375 C 60.265625 -21.113281 59.140625 -16.222656 56.890625 -11.921875 C 54.648438 -7.628906 51.53125 -4.265625 47.53125 -1.828125 C 43.539062 0.609375 38.992188 1.828125 33.890625 1.828125 C 30.015625 1.828125 26.457031 0.972656 23.21875 -0.734375 C 19.988281 -2.453125 17.269531 -4.867188 15.0625 -7.984375 L 15.0625 22.828125 L 7.296875 22.828125 L 7.296875 -53.40625 L 15.0625 -53.40625 L 15.0625 -45.53125 C 17.269531 -48.570312 19.96875 -50.945312 23.15625 -52.65625 C 26.351562 -54.375 29.859375 -55.234375 33.671875 -55.234375 Z M 33.890625 -5.25 C 37.472656 -5.25 40.671875 -6.160156 43.484375 -7.984375 C 46.296875 -9.816406 48.5 -12.347656 50.09375 -15.578125 C 51.695312 -18.804688 52.5 -22.476562 52.5 -26.59375 C 52.5 -30.78125 51.695312 -34.507812 50.09375 -37.78125 C 48.5 -41.050781 46.296875 -43.597656 43.484375 -45.421875 C 40.671875 -47.242188 37.472656 -48.15625 33.890625 -48.15625 C 30.242188 -48.15625 26.992188 -47.242188 24.140625 -45.421875 C 21.285156 -43.597656 19.054688 -41.050781 17.453125 -37.78125 C 15.859375 -34.507812 15.0625 -30.816406 15.0625 -26.703125 C 15.0625 -22.597656 15.859375 -18.910156 17.453125 -15.640625 C 19.054688 -12.367188 21.285156 -9.816406 24.140625 -7.984375 C 26.992188 -6.160156 30.242188 -5.25 33.890625 -5.25 Z M 33.890625 -5.25 "/>
                        </g>
                        <g id="glyph-1-0"/>
                        <g id="glyph-1-1">
                            <path d="M 30.25 -55.234375 C 35.039062 -55.234375 39.375 -54.050781 43.25 -51.6875 C 47.132812 -49.332031 50.175781 -46.117188 52.375 -42.046875 C 54.582031 -37.984375 55.6875 -33.441406 55.6875 -28.421875 C 55.6875 -26.972656 55.648438 -25.867188 55.578125 -25.109375 L 11.640625 -25.109375 C 11.941406 -19.628906 13.726562 -14.945312 17 -11.0625 C 20.269531 -7.1875 24.722656 -5.25 30.359375 -5.25 C 34.921875 -5.25 38.703125 -6.101562 41.703125 -7.8125 C 44.710938 -9.53125 47.128906 -11.910156 48.953125 -14.953125 L 55.125 -10.84375 C 52.613281 -6.882812 49.300781 -3.78125 45.1875 -1.53125 C 41.082031 0.707031 36.210938 1.828125 30.578125 1.828125 C 25.410156 1.828125 20.8125 0.609375 16.78125 -1.828125 C 12.75 -4.265625 9.585938 -7.648438 7.296875 -11.984375 C 5.015625 -16.316406 3.875 -21.222656 3.875 -26.703125 C 3.875 -32.179688 4.992188 -37.085938 7.234375 -41.421875 C 9.484375 -45.765625 12.601562 -49.148438 16.59375 -51.578125 C 20.59375 -54.015625 25.144531 -55.234375 30.25 -55.234375 Z M 47.9375 -31.5 C 47.175781 -37.050781 45.3125 -41.210938 42.34375 -43.984375 C 39.375 -46.765625 35.34375 -48.15625 30.25 -48.15625 C 25.300781 -48.15625 21.25 -46.578125 18.09375 -43.421875 C 14.9375 -40.265625 12.9375 -36.289062 12.09375 -31.5 Z M 47.9375 -31.5 "/>
                        </g>
                    </g>
                    <mask id="mask-0">
                        <g filter="url(#filter-remove-color)">
                            <rect x="-37.5" width="450" fill="rgb(0%, 0%, 0%)" y="-37.499999" height="449.999989"
                                  fillOpacity="0.498"/>
                        </g>
                    </mask>
                    <clipPath id="clip-0">
                        <rect x="0" width="61" y="0" height="151"/>
                    </clipPath>
                    <mask id="mask-1">
                        <g filter="url(#filter-remove-color)">
                            <rect x="-37.5" width="450" fill="rgb(0%, 0%, 0%)" y="-37.499999" height="449.999989"
                                  fillOpacity="0.749"/>
                        </g>
                    </mask>
                    <clipPath id="clip-1">
                        <rect x="0" width="62" y="0" height="151"/>
                    </clipPath>
                </defs>
                <motion.g initial="hidden"
                          animate="visible"
                          variants={letterS}
                          id="leter-s" fill="rgb(23.919678%, 23.919678%, 23.529053%)" fillOpacity="1">
                    <use x="55.099424" y="232.108989" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#glyph-0-1"
                         xlinkType="simple" xlinkActuate="onLoad" xlinkShow="embed"/>
                </motion.g>
                <motion.g initial="hidden"
                          animate="visible"
                          variants={letterK}
                          id="letter-k" fill="rgb(23.919678%, 23.919678%, 23.529053%)" fillOpacity="1">
                    <use x="98.809304" y="232.108989" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#glyph-0-2"
                         xlinkType="simple" xlinkActuate="onLoad" xlinkShow="embed"/>
                </motion.g>
                <motion.g initial="hidden"
                          animate="visible"
                          variants={eeEs}
                    id={'eees'}>
                <motion.g
                        initial="hidden"
                        animate="visible"
                        variants={darkgreen}
                    id="letter-e-darkgreen" fill="rgb(9.01947%, 61.569214%, 25.099182%)" fillOpacity="1">
                    <use x="201.033711" y="231.2384" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#glyph-1-1"
                         xlinkType="simple" xlinkActuate="onLoad" xlinkShow="embed"/>
                </motion.g>
                <motion.g initial="hidden"
                          animate="visible"
                          variants={lightgreen}
                    id="letter-e-lightgreen-mask" mask="url(#mask-0)">
                    <g transform="matrix(1, 0, 0, 1, 139, 112)">
                        <g id="source-5" clipPath="url(#clip-0)">
                            <g id='letter-e-lightgreen' fill="rgb(9.01947%, 61.569214%, 25.099182%)" fillOpacity="1">
                                <use x="0.44461" y="119.2384" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#glyph-1-1"
                                     xlinkType="simple" xlinkActuate="onLoad" xlinkShow="embed"/>
                            </g>
                        </g>
                    </g>
                </motion.g>
                <motion.g initial="hidden"
                        animate="visible"
                        variants={mildgreen}
                    id="letter-e-mildgreen-mask" mask="url(#mask-1)">
                    <g transform="matrix(1, 0, 0, 1, 169, 112)">
                        <g id="source-8" clipPath="url(#clip-1)">
                            <g id="letter-e-mildgreen" fill="rgb(9.01947%, 61.569214%, 25.099182%)" fillOpacity="1">
                                <use x="0.988182" y="119.2384" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#glyph-1-1"
                                     xlinkType="simple" xlinkActuate="onLoad" xlinkShow="embed"/>
                            </g>
                        </g>
                    </g>
                </motion.g>
                </motion.g>
                <motion.g initial="hidden"
                          animate="visible"
                          variants={letterP}
                    id="letter-p" fill="rgb(23.919678%, 23.919678%, 23.529053%)" fillOpacity="1">
                    <use x="255.869548" y="232.390979" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#glyph-0-3"
                         xlinkType="simple" xlinkActuate="onLoad" xlinkShow="embed"/>
                </motion.g>
            </svg>
        </motion.div>
    )
}

export default LogoSvg