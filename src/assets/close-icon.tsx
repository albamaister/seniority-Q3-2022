import { SVGProps } from 'react'

const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={40}
    height={40}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.226 4.811A1 1 0 0 0 4.81 6.225L10.586 12l-5.774 5.775a1 1 0 1 0 1.414 1.414L12 13.414l5.775 5.775a1 1 0 0 0 1.414-1.414L13.415 12l5.774-5.775a1 1 0 1 0-1.414-1.414L12 10.586 6.226 4.81Z"
      fill="#000"
    />
  </svg>
)

export default CloseIcon
