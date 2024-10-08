import { motion, AnimatePresence } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { menuButtonVariants } from "./variants";
import { Link } from "react-router-dom";
import { Links } from "../links";
import "./navbar.css";

type NavbarProbs = {
  show: boolean,
  setShow: Dispatch<SetStateAction<boolean>>
}
export default function Navbar({ show, setShow }:NavbarProbs) {
  return (
    <nav className="navbar">
      <Link to="/">
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="333.000000pt"
          height="301.000000pt"
          viewBox="0 0 333.000000 301.000000"
          preserveAspectRatio="xMidYMid meet"
          className="logo"
        >
          <g
            transform="translate(0.000000,301.000000) scale(0.100000,-0.100000)"
            className="fill-primary dark:fill-dark"
            stroke="none"
          >
            <path
              d="M1212 2920 c-29 -4 -55 -10 -57 -12 -2 -2 23 -25 55 -52 32 -27 62
    -56 65 -65 7 -17 -19 -41 -44 -41 -31 0 -198 -90 -257 -139 -40 -33 -85 -85
    -133 -156 -100 -145 -158 -214 -232 -269 -79 -60 -245 -142 -318 -157 -31 -7
    -60 -16 -66 -21 -5 -4 -44 -8 -87 -8 -78 0 -79 0 -67 -22 39 -73 183 -191 307
    -253 122 -60 209 -79 357 -79 200 0 299 32 492 160 70 47 150 97 178 111 140
    72 295 111 475 120 174 8 173 9 92 -148 -34 -66 -62 -121 -62 -122 0 -2 44 19
    98 45 105 51 250 94 265 79 11 -11 -20 -55 -134 -188 l-75 -89 12 -105 c7 -57
    13 -149 14 -204 1 -232 39 -329 210 -535 38 -46 70 -92 70 -101 0 -20 -61 -76
    -97 -90 -37 -14 -142 -11 -208 6 -91 23 -174 68 -243 130 -58 53 -62 55 -62
    32 0 -34 -37 -47 -58 -21 -13 17 -13 9 -8 -69 6 -76 5 -88 -9 -94 -11 -4 -25
    4 -41 23 l-24 29 13 -30 c32 -79 97 -175 165 -247 107 -112 194 -167 338 -214
    119 -39 119 -39 284 -39 162 0 166 1 236 31 194 84 349 244 429 440 15 38 31
    78 35 89 17 40 50 162 69 250 34 155 45 283 44 502 -2 252 -19 359 -91 562
    l-26 75 -12 -49 c-7 -26 -18 -79 -24 -117 -11 -61 -14 -68 -35 -68 -21 0 -25
    7 -35 58 -27 129 -143 378 -238 510 -93 130 -322 385 -322 359 0 -5 18 -46 41
    -93 22 -47 39 -93 37 -102 -6 -30 -37 -24 -75 13 -100 97 -350 239 -537 304
    -170 60 -253 74 -461 77 -104 1 -214 -1 -243 -6z"
            />
            <path
              d="M1850 1932 c-88 -38 -228 -133 -193 -132 4 1 19 7 33 15 33 19 67 19
    78 0 6 -12 18 -14 48 -10 36 6 42 12 77 76 20 37 37 71 37 74 0 9 -13 5 -80
    -23z"
            />
            <path
              d="M2075 1780 c-33 -16 -64 -30 -70 -30 -5 0 -21 -9 -35 -20 -18 -14
    -21 -20 -9 -20 9 0 28 -9 42 -20 l26 -21 34 38 c64 70 89 103 80 103 -5 0 -35
    -13 -68 -30z"
            />
            <path
              d="M1832 1277 c-22 -12 -21 -14 43 -65 l65 -52 0 49 c0 72 -46 102 -108
    68z"
            />
          </g>
        </svg>
      </Link>
      <button className="md:hidden" onClick={() => setShow(!show)}>
        <AnimatePresence mode="wait">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            variants={menuButtonVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <path
              fill="none"
              className="stroke-primary dark:stroke-white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 17h8m-8-5h14m-8-5h8"
            />
          </motion.svg>
        </AnimatePresence>
      </button>
      <Links show={show} setShow={setShow} />
    </nav>
  );
}
