import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img 
              src='./tdesigner.png'
              alt="logo"
              className="w-14 h-14 object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET'S <br className ="xl:block hidden"/> DESIGN IT.
              </h1>
              </motion.div>

              <motion.div {...headContentAnimation} className="flex flex-col gap-5">
                <p className="max-w-md font-normal text-gray-600 text-base">
                    Elevate your fashion game with T-Designer's state-of-the-art 3D customization platform. <strong>Unleash your creative potential</strong> by crafting one-of-a-kind t-shirt designs that resonate with your unique style. From intricate logos to vibrant color palettes, our user-friendly interface empowers you to visualize and bring your sartorial visions to life. Experience the future of personalized fashion, today.
                </p>


                <CustomButton
                  type="filled"
                  title="Customize It"
                  handleClick={() => state.intro = false}
                  customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                />
              </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home