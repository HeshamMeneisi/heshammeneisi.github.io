import React from 'react';
import { Icon, Image } from 'semantic-ui-react';
import { IconSizeProp } from 'semantic-ui-react/dist/commonjs/elements/Icon/Icon';
import ColorHelper from '../helpers/ColorHelper';

interface IProps {
  name: string;
  size?: IconSizeProp;
  light?: boolean;
  color?: string;
}

function SvgIcon(props: IProps) {
  const { name, size, light, color } = props;
  // eslint-disable-next-line global-require
  const icons = require('simple-icons');
  const icoInfo = icons.get(name);
  const svg = icoInfo ? icoInfo.svg : null;
  if (svg) {
    const hsl = ColorHelper.hexToHSL(color || (light ? '#fff' : '#000'));
    const hasCol = hsl.l !== 0 && hsl.l !== 1 && hsl.s !== 0;
    hsl.h -= 60;
    hsl.s += 2;
    return (
      <Icon size={size}>
        <Image
          style={{
            filter: `invert(1) brightness(${hsl.l})
          sepia(${hasCol ? 1 : 0}) hue-rotate(${hsl.h}deg) saturate(${hsl.s})`,
          }}
          src={`data:image/svg+xml;utf8,${svg}`}
        />
      </Icon>
    );
  }
  return <Icon style={{ color }}>{name.toUpperCase()}</Icon>;
}

export default SvgIcon;
