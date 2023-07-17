
import { ReactComponent as HideShowSVG } from "./hideshow.svg";
import { ReactComponent as AddSVG } from "./add.svg";
import { ReactComponent as ChatSVG } from "./chat.svg";
import { ReactComponent as GPT35SVG } from "./gpt35.svg";
import { ReactComponent as GPT40SVG } from "./gpt40.svg";
import { ReactComponent as SendSVG } from "./send.svg";
import { ReactComponent as OmitSVG } from "./omit.svg";

import { ReactComponent as GoodSVG } from "./good.svg";
import { ReactComponent as BadSVG } from "./bad.svg";
import { ReactComponent as ChatbotSVG } from "./chatbot.svg";
import { ReactComponent as LightningSVG } from "./lightning.svg";
import { ReactComponent as DownSVG } from "./down.svg";
import { ReactComponent as RefreshSVG } from "./refresh.svg";


import UserIconWEBP from './usericon.webp';

export function HideShowIcon() {
  return (
    <HideShowSVG />
  );
}


export function AddIcon() {
  return (
    <AddSVG />
  );
}

export function ChatIcon() {
  return (
    <ChatSVG />
  );
}

export function GPT35Icon() {
  return (
    <GPT35SVG />
  );
}

export function GPT40Icon() {
  return (
    <GPT40SVG />
  );
}


export function SendIcon() {
  return (
    <SendSVG />
  );
}

export function OmitIcon(){
  return (
    <OmitSVG />
  );
}




export function GoodIcon(){
  return (
    <GoodSVG />
  );
}

export function BadIcon(){
  return (
    <BadSVG />
  );
}

export function ChatbotIcon(){
  return (
    <ChatbotSVG />
  );
}

export function LightningIcon(){
  return (
    <LightningSVG />
  );
}
export function DownIcon(){
  return (
    <DownSVG />
  );
}
export function RefreshIcon(){
  return (
    <RefreshSVG />
  )
}
export function UserIcon(props) {
  return (
    <img src={UserIconWEBP} alt="description"  style={props.style}/>
  );
}

