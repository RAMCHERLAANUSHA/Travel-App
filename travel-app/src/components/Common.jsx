import temple from "../assets/temple.png";
import style from './Common.module.css'

export default function Common() {
  return (
    <div className={style.commonPage}>
      <img 
        src={temple} 
        alt="Temple" 
        className={style.commonPic} 
      />
    </div>
  );
}
