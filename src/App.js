import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ImageGrid from './components/ImageGrid';
import Overview from './components/Overview';
import PropDetails from './components/PropDetails';
import RecentView from './components/RecentView';
import Similar from './components/Similar';

function App() {
  return (
    <>
      <Header />
      <div className='m-3'>
        <PropDetails />
        <ImageGrid />
        <Overview />
        <RecentView /> 
        <Similar />
      </div>
      <Footer />
    </>
  );
}

export default App;
