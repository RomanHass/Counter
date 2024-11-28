type PropsType = {
  title: string
  disable?: boolean
  onClick: () => void
}

export const Button = ({title, disable, onClick}: PropsType) => {

  return (
    <button disabled={disable}
            onClick={onClick}>
      {title}
    </button>
  )
  
}