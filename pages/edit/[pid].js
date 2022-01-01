import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import { useGlobalContext } from "../../components/context";
import Vote from "../../components/pages/vote";
import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Header from "../../components/header";

const Post = () => {
  const router = useRouter();
  const { pid } = router.query;
  const { propsObj, markdown, setMarkdown, setPropsObj, title, setTitle } =
    useGlobalContext();
    const [index, setIndex] = useState(null)
  const refTitle = useRef(null);
  const refTextArea = useRef(null);
  let tempVAr = propsObj

  useEffect(() => {
    console.log(propsObj);
    const [currentRouteValues] = propsObj?.filter((props, index) => {
      
   if (props.id == pid) {
     setIndex({index: index, id:props.id});
   }
      return props.id == pid;
    });

    if (propsObj) {
      const { name, desc } = currentRouteValues;
      refTextArea.current.value = desc;
      refTitle.current.value = name;
      setTitle(name);
      setMarkdown(desc)
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const length = propsObj.length;
    tempVAr[index.index] = { name: title, desc: markdown, id: index.id };
    localStorage.setItem(
      "proposals",
      JSON.stringify(tempVAr)
    );
    setPropsObj(tempVAr);
    console.log(tempVAr)
    alert(
      "Successfully Edited Proposal \nYou can edit more Propsals in the Home or Proposals Page"
    );
    
    router.push("/");
  };
  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const obj = {
    handleChange,
    handleSubmit,
    refTextArea,
    refTitle,
    handleTitleChange,
  };
  return (
    <>
        <Head>
          <title>Edit Proposal</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header/>
      <div className={`${styles.container}`}>
        <main className={`${styles.main} `}>
          <Form {...obj} />
        </main>
      </div>
    </>
  );
};
export default Post;

const Form = ({
  handleSubmit,
  handleChange,
  handleTitleChange,
  refTextArea,
  refTitle,
}) => {
  return (
    <form className="p-0 border-2 border-gray-500 rounded outline-none min-h-min">
      <div className="bg-blue-400 px-2 text-gray-50">
        This is a Markdown Editor So any Valid MarkDown will be valid
      </div>
      <input
        onChange={handleTitleChange}
        ref={refTitle}
        type="text"
        placeholder="Title of Proposal"
        className="mb-2 border-gray-500 border-t-2 border-b-2 outline-none px-4 py-2 w-full"
      />
      <textarea
        ref={refTextArea}
        placeholder="Proposal Details"
        onChange={(e) => handleChange(e)}
        className={`m-5 w-96 h-full outline-none`}
        name="markdown"
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <input
        type="submit"
        className="w-full p-2 text-center bg-blue-800 text-white cursor-pointer"
        onClick={(e) => handleSubmit(e)}
      />
    </form>
  );
};
