import Header from "./Header";



function App() {
  return (
    <header>
      {/* {jsx 안의 주석} */}
      <Header style={{ color: 'red' }} name="장우현" age={26} />
      {/* { component 자체에는 style을 줄수가없다 } */}
      <nav>
        <ul>
          <li><a href="" style={{ color: 'red', fontSize: '40px' }}>menu01</a></li>
          <li><a href="">menu02</a></li>
          <li><a href="">menu03</a></li>
          <li><a href="">menu04</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default App;