import { useEffect } from "react"
import { useRouter } from "next/router"
import { useAppSelector } from "@/redux/hooks"

interface WrapperAccessProps {
  children: JSX.Element
}

const WrapperAccess: React.FC<WrapperAccessProps> = ({ children }) => {
  const state = useAppSelector(state => state)
  const auth = state.auth.data?.data

  const { push } = useRouter()

  useEffect(() => {
    if (!auth) {
      push('/')
    }
  }, [auth])
  return (
    <>{children}</>
  )
}

export default WrapperAccess