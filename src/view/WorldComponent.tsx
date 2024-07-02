import { IWorldComponentProps } from '../types/types'

const WorldComponent = ({ title, desc }: IWorldComponentProps) => {
  return (
    <div data-testid='worldComponent'>
      <div data-testid='title'>{title}</div>
      <div data-testid='desc'>{desc}</div>
    </div>
  )
}

export default WorldComponent
