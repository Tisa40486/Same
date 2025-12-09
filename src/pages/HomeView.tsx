import { Link } from 'react-router-dom'
import HomePage from '../components/home/HomePage'
import HeaderHomePage from '../components/home/HeaderHomePage'
import HomePost from '../components/home/HomePost'
import TagList from '../components/home/TagList'
import { theme } from '../styles/theme'

export default function HomeView() {
  return (
    <>
      <HeaderHomePage />

      <div
        style={{
          width: '100vw',
          minHeight: 'calc(100dvh - 80px)',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: theme.glass.bgHomePage,
          paddingTop: '2rem',
          overflow: 'auto',
        }}
      >

        {/* Zone principale : tags complètement à gauche */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '200px 1fr 200px', // 3 colonnes
            marginTop: '1rem',
            paddingLeft: '1rem',
          }}
        >
          {/* Colonne gauche : collée au bord */}
          <div>
            <TagList />
          </div>

          {/* Colonne centrale : contenu */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.5rem',
            }}
          >
            <HomePage />
            <HomePost />
            <Link to="/signup">Link to Signup Page</Link>
          </div>

          {/* Colonne droite (vide pour l’instant, pour futur bouton Post) */}
          <div />
        </div>
      </div>
    </>
  )
}
