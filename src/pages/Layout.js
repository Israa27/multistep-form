import { useLocation } from 'react-router-dom';
import InfoPage from './InfoPage';
import AddOnsPage from './AddOnsPage';
import SelectPlanPage from './SelectPlanPage'
import SummaryPage from './SummaryPage'
import MenuBar from '../components/MenuBar';
import SubmitPage from './SubmitPage';
export default function Layouts() {
  const location = useLocation()
  const renderContent = (routeName) => {
    console.log(routeName)
    switch (routeName) {
      case '/':
            return <InfoPage />
      case '/add-ons':
            return <AddOnsPage />
      case '/select-plan':
            return <SelectPlanPage />
      case '/summary':
            return <SummaryPage />
      case '/thank_you':
            return <SubmitPage/>
      default:
            return <InfoPage />
     
  }};
 // const error=useSelector(state=> state.product);

  return<div className={`desktop:grid desktop:grid-cols-[400px,1fr]  
  desktop:content-start bg-white 
  mx-auto mt-6 desktop:mb-6 desktop:p-4 desktop:w-[65rem] 
  rounded-lg shadow-lg mobile:grid-cols-[1fr] mobile:w-[22rem] mobile:p-0`}>
  <MenuBar/>
  <div className='desktop:w-[40rem] desktop:ml-2 desktop:mt-[2rem] mobile:w-[3rem]'>{renderContent(location.pathname)}</div>
      
    </div>
   

    }