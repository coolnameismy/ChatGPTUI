
import {OmitIcon,UserIcon} from '../svg/svgicon'

const style1 =  {
    boxSizing: "border-box",
    display: "inline-block",
    overflow: "hidden",
    width: "initial",
    height: "initial",
    background: "none",
    opacity: 1,    // notice: in number type for numeric property
    border: "0px",
    margin: "0px",
    padding: "0px",
    position: "relative",
    maxWidth: "100%"
};
const style2 =  {
    boxSizing: "border-box",
    display: "inline-block",
    overflow: "hidden",
    width: "initial",
    height: "initial",
    background: "none",
    opacity: 1,
    border: "0px",
    margin: "0px",
    padding: "0px",
    position: "relative",
    maxWidth: "100%",
};
const style3 =  {
    display: "block",
    maxWidth: "100%",
    width: "initial",
    height: "initial",
    background: "none",
    opacity: 1,
    border: "0px",
    margin: "0px",
    padding: "0px"
};

const style4 = {
    position: "absolute",
    inset: "0px",
    boxSizing: "border-box",
    padding: "0px",
    border: "none",
    margin: "auto",
    display: "block",
    width: "0px",
    height: "0px",
    minWidth: "100%",
    maxWidth: "100%",
    minHeight: "100%",
    maxHeight: "100%"
  };

export default function UserPanel() {
    return (
        <div className="border-t border-white/20 pt-2 empty:hidden">
            <div className="group relative" data-headlessui-state="">
                <button className="flex w-full items-center gap-2.5 rounded-md px-3 py-3 text-sm transition-colors duration-200 hover:bg-gray-800 group-ui-open:bg-gray-800" id="headlessui-menu-button-:rf6:" type="button" aria-haspopup="true" aria-expanded="false" data-headlessui-state="">
                    <div className="flex-shrink-0">
                        <div className="relative flex">
                            <span style={style1}>
                                <span style={style2}>
                                    <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2728%27%20height=%2728%27/%3e" style={style3} />
                                </span>
                                <UserIcon style={style4}/>
                            </span>
                        </div>
                    </div>
                    <div className="grow overflow-hidden text-ellipsis whitespace-nowrap text-left text-white">刘大王</div>
                    <OmitIcon />
                </button>
            </div>
        </div>
    )
}
