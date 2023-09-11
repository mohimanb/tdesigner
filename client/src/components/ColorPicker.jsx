import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store';


const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (

    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
          "#000000", // Black
          "#FFFFFF", // White
          "#001F3F", // Navy
          "#AAAAAA", // Gray
          "#FF4136", // Red
          "#0074D9", // Royal Blue
          "#2ECC40", // Green
          "#FFDC00", // Yellow
          "#FF851B", // Orange
          "#B10DC9", // Purple
          "#39CCCC", // Teal
          "#3D9970", // Olive
          "#85144B", // Maroon
          "#7FDBFF", // Sky Blue
          "#01FF70"  // Lime
        ]}
        onChange={(color) => state.color = color.hex}
          />
    </div>
    

  )
}

export default ColorPicker