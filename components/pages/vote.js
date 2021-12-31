import styles from "../../styles/Home.module.css"
import ErrorComponent from "./error";
import MarkdownIt from "markdown-it";
import { useRef,useEffect } from "react";
const md = new MarkdownIt();


const VoteComponent = ({name, desc, id, children}) => {
  const ref = useRef(null)
  useEffect(() => {
    ref.current.innerHTML = desc
    
  }, [])
    const result = md.render(desc);
    if (!id)
   {return <>
{children}
    <ErrorComponent/>
    </>}
  return (
    <>
    {children}
    {ref && 
      <>
        <h1 className={``}>{name}</h1>
        <p ref={ref} className="text-center"> </p>
      </>}
    </>
  );
};
export default VoteComponent;
