import React from 'react'
import { Popular, New } from '../App'

export const Sort = (Component) => {
  return (props) => {
        if (props.views > 1000) {
            return (
                <Popular>
                    <Component {...props} />
                </Popular>
            )
        } else if (props.views < 100) {
            return (
                <New>
                    <Component {...props} />
                </New>
            )
        } else {
            <Component {...props} />
        }
  }
}
