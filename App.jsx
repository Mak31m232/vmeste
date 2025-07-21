import './App.css'
import Header from './components/layout/header'
import Video from './pages/home/video_container'

function App() {
  return (
    <>
      <Header/>
      <span className='reg_or_logIn'>Чтобы смотреть видео зарегистрируйтесь или войдите в аккаунт</span>
      <main className="main-content">
        <Video/>
        <Video/>
        <Video/>
        <Video/>
        <Video/>
        <Video/>
      </main>
      <footer className="footer">
        <div className="row_footer">
          <h2>Основатели</h2>
          <h2 className='contacts'>Контакты</h2>
        </div>
        <div className="column_footer">
          <p>Лебедев Максим</p>
          <p>Ижболдин Иван</p>
        </div>
      </footer>
    </>
  )
}

export default App