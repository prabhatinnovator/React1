import StyleRightSidePannel from "./RightPanel.module.css";
import Image1 from "../../assets/vector.png";
import Image2 from "../../assets/lock.png";
const RightPanel = () => {
  return (
    <>
      <div className={StyleRightSidePannel.rightSidePannel}>
        <div className={StyleRightSidePannel.image}>
          <img
            src={Image1}
            style={{ width: "52vw" }}
          />
          <div>
            <div className={StyleRightSidePannel.imageText1}>Pocket Notes</div>
            <div className={StyleRightSidePannel.imageText2}>
              Send and receive messages without keeping your phone online.
              <br />
              Use Pocket Notes on up to 4 linked devices and 1 mobile phone
            </div>
          </div>
          <div className={StyleRightSidePannel.endToEnd}><img src ={Image2}/> end-to-end encrypted</div>
        </div>
          </div>
    </>
    );
};

export default RightPanel;
