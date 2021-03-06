import React from 'react'
import Box from '../../components/elements/Box'

import { layout } from 'theme'

export const CONTAINER_SPACE = {
  mt: 3,
  mb: 4
}

export const Container = props => (
  <Box
    maxWidth={['100%', '100%', layout.small, layout.small]}
    mr='auto'
    ml='auto'
    {...CONTAINER_SPACE}
    {...props}
  />
)

export const withContainer = (
  Component,
  containerProps = {},
  childProps
) => props => (
  <Container {...containerProps}>
    <Component {...childProps} {...props} />
  </Container>
)

withContainer.Container = Container
withContainer.CONTAINER_SPACE = CONTAINER_SPACE
