import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Wrapper from "./Wrapper";

const App = () => {
    return (
        <>
            <Wrapper>
                <Header />
                <Main lee="이우현" work="술마시기" />
                <Main lee="장우현" work="노래하기" />
                <Main lee="박우현" />
                <Footer />
            </Wrapper>
        </>


    )
}

export default App;