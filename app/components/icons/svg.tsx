export type SVGComponentProps = React.SVGProps<SVGSVGElement> & {
  /**
   * Enforce width & height of svg element at once
   *
   * @default 24px
   */
  size?: React.SVGProps<SVGSVGElement>['width' | 'height']
}

export const SVGComponent: React.FC<SVGComponentProps> = ({ size, width, height, ...props }) => {
  return <svg width={size ?? width ?? 24} height={size ?? height ?? 24} viewBox="0 0 24 24" fill="currentColor" {...props} />
}

export const createSVGComponent = (initialProps: SVGComponentProps): React.FC<SVGComponentProps> => {
  return (props: SVGComponentProps) => SVGComponent({ ...initialProps, ...props })
}
