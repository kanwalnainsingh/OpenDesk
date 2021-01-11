import * as React from "react"

function CustomIcon(props) {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.625 15.25V2.75a2.5 2.5 0 012.5-2.5h3.75a2.5 2.5 0 012.5 2.5v12.5a2.5 2.5 0 01-2.5 2.5h-3.75a2.5 2.5 0 01-2.5-2.5zm1.25 0a1.25 1.25 0 001.25 1.25h3.75a1.25 1.25 0 001.25-1.25V2.75a1.25 1.25 0 00-1.25-1.25h-3.75a1.25 1.25 0 00-1.25 1.25v12.5zM1.5 17.75a.625.625 0 01-.625-.625V.875a.625.625 0 111.25 0v16.25a.625.625 0 01-.625.625zm15 0a.624.624 0 01-.625-.625V.875a.625.625 0 111.25 0v16.25a.624.624 0 01-.625.625z"
        fill={props.fill}
      />
    </svg>
  )
}

export default CustomIcon