import styled, { css, th } from '@xstyled/styled-components'
import { Box } from '@welcome-ui/box'
import { system } from '@welcome-ui/system'
import { getVariantColor } from '@welcome-ui/utils'
import { Alert } from '@welcome-ui/alert'

export const Toast = styled(Box)(
  ({ isBottom }) => css`
    ${th('toasts.default')}
    ${isBottom ? th('toasts.bottom') : th('toasts.top')}
  `
)

export const Growl = styled.div`
  position: relative;
  max-width: 25rem;
  padding: lg;
  ${th('toasts.growls.default')};
  ${system};
`

export const Title = styled.div(
  ({ variant }) => css`
    display: flex;
    align-items: center;
    color: ${getVariantColor(variant)};
    padding-bottom: md;
    ${th('toasts.growls.title')};

    & > *:first-child {
      flex-shrink: 0;
      margin-right: sm;
    }
  `
)

export const Snackbar = styled(Alert)`
  display: flex;
  align-items: center;

  & > *:not(:only-child):not(:last-child) {
    margin-right: sm;
  }
`
