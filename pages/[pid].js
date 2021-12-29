import { useRouter } from "next/router";
import { useGlobalContext } from "../components/context";
import Error from "../components/pages/error";
import Vote from "../components/pages/vote";
import {AiOutlineLoading3Quarters} from "react-icons/ai"
import { useEffect, useState } from "react";
const  Post = () =>{
    const [loading, setLoading] = useState(null)
    const [item, setItem] = useState(null)
    const { propsObj, setPropsObj } = useGlobalContext();
    const router = useRouter()
    const {pid} = router.query
  useEffect(()=>{
    let storage = window.localStorage.getItem("proposals")
     if(!storage){
      localStorage.setItem("proposals",JSON.stringify(Obj))
      storage = localStorage.getItem("proposals")
    }
    setPropsObj(JSON.parse(storage))
    setLoading(true)
    if(propsObj){
        setItem(true)
    }
   
},[loading])


if(!(loading && propsObj && item)){
    return <div  className="bg-indigo-500 text-gray-50 text-2xl flex align-center transition-all delay-150">
  <AiOutlineLoading3Quarters className="animate-spin text-gray-50"/>
  Loading...
</div>
}
else{ 
   const item = propsObj?.filter(({ id }) => {
     return id === pid && id;
   });
   
   if(item && item?.length === 1){
     const obj = item[0]
     return <>
      <Vote {...obj}/>
     </>
   }
   return <><Error/></>
}

  
}
export default Post