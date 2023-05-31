import React,{ memo, Suspense, lazy } from 'react'

// Router
import { Outlet } from 'react-router-dom'

//Chat
const Chat = lazy(() => import('../pages/chat'))

const Chatrouter = memo((props) => {
  return (
    <Suspense fallback={<div className="react-load"></div>}>
      <Chat show={props.show} />
      <Outlet />
    </Suspense>
  )
}
)

Chatrouter.displayName = "Chatrouter"
export default Chatrouter
