import MyFooter from '@components/Footer/Footer';
import MainLayout from '@components/Layout/Layout';
import MyHeader from '@components/Header/Header';

function App() {
    return (
        <>
            <MainLayout>
                <MyHeader />
                Content
                <MyFooter />

                
            </MainLayout>
        </>
    );
}

export default App;
