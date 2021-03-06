import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Menu from './menu'
import MenuItem from './menuItem'
import SubMenu from './subMenu'

export const defaultMenu = () => (
  <Menu
    defaultIndex='0'
    onSelect={(index) => {
      action(`clicked ${index} item`)
    }}
  >
    <MenuItem>cool link</MenuItem>
    <MenuItem disabled>disabled</MenuItem>
    <SubMenu title='dropdowm'>
      <MenuItem>dropdwom1</MenuItem>
      <MenuItem>d2</MenuItem>
    </SubMenu>
    <MenuItem>cool link 2</MenuItem>
  </Menu>
)
export const verticalSubMenu = () => (
  <Menu
    mode='vertical'
    defaultIndex='0'
    onSelect={(index) => {
      action(`clicked ${index} item`)
    }}
  >
    <MenuItem>cool link</MenuItem>
    <MenuItem disabled>disabled</MenuItem>
    <SubMenu title='dropdowm'>
      <MenuItem>dropdwom1</MenuItem>
      <MenuItem>d2</MenuItem>
    </SubMenu>
    <MenuItem>cool link 2</MenuItem>
  </Menu>
)
storiesOf('Menu Component', module)
  .add('Menu', defaultMenu)
  .add('verticalSubMenu', verticalSubMenu)
