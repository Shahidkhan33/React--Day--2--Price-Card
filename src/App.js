import './App.css';
import CardTemplate from './Components/FirstCode';

function App() {//this function will get called from index.js
  return (
    <div className='wrapper'>      
      <CardTemplate plan='FREE' price='0' private = 'text-muted' dedicated='text-muted' subdomain = 'text-muted' report = 'text-muted' />
      <CardTemplate plan='PLUS' price='9' private = 'list_checked' dedicated='list_checked' subdomain = 'list_checked' report = 'text-muted' />
      <CardTemplate plan='PRO' price='49' private = 'list_checked' dedicated='list_checked' subdomain = 'list_checked' report = 'list_checked' />
    </div>
  )
}

export default App;