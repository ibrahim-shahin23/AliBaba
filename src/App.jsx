import './App.css'
import { BrowserRouter } from 'react-router';
import Header from './components/Header';
import RoutesList from './routes/RoutesList';
import languageContext from './context/languageContext';
import { useState, useEffect } from 'react';
function App() {

  const [language, setLanguage] = useState('en')
  const [isRTL, setIsRTL] = useState(false)

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setIsRTL(lang === "ar"); 
  };
  
  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [isRTL]);

  return (
    <BrowserRouter>
    <languageContext.Provider value = {{language,isRTL,changeLanguage}}>
      <Header/>
      <RoutesList/>
    </languageContext.Provider>
    </BrowserRouter>
  )
}
export default App
