import { createContext, useState } from "react";
import MoreInfo from "../components/UI/MoreInfo/MoreInfo";

const MoreInfoContext = createContext();

export function MoreInfoProvider(props) {

    const [moreInfoData, setMoreInfoData] = useState(false)
    
    function displayMoreInfo(itemId, itemMediaType) {
        setMoreInfoData({show: true, itemId: itemId, itemMediaType: itemMediaType})
    }

    function closeMoreInfo(D){
        setMoreInfoData(false)
    }

  return (
    <MoreInfoContext.Provider value={{moreInfoData, displayMoreInfo}}>
        {moreInfoData.show  && <MoreInfo id={moreInfoData.itemId} media_type={moreInfoData.itemMediaType} quit={closeMoreInfo} onClick={() => {console.log("Dupsko")}}/>}
      {props.children}
    </MoreInfoContext.Provider>
  );
}

export default MoreInfoContext;
