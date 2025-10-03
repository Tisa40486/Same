import { Global } from '@emotion/react'
import { globalStyle } from './styles/globalStyle'
import AppRoutes from './AppRoutes'

function App() {
    return (
        <>
            <Global styles={globalStyle} />
            <AppRoutes />
        </>
    )
}

export default App