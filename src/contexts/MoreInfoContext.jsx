import { createContext, useState } from "react";
import MoreInfo from "../components/UI/MoreInfo/MoreInfo";

const MoreInfoContext = createContext();

export function MoreInfoProvider({ children }) {
  const [moreInfoData, setMoreInfoData] = useState({});

  const displayMoreInfo = (itemId, itemMediaType) => {
    setMoreInfoData({
      show: true,
      itemId,
      itemMediaType,
    });
  };

  const closeMoreInfo = () => setMoreInfoData({});

  return (
    <MoreInfoContext.Provider value={{ displayMoreInfo }}>
      {"show" in moreInfoData && (
        <MoreInfo
          id={moreInfoData.itemId}
          media_type={moreInfoData.itemMediaType}
          quit={closeMoreInfo}
        />
      )}

      {children}
    </MoreInfoContext.Provider>
  );
}

export default MoreInfoContext;
