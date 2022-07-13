import React from 'react'
import { useNavigate } from "react-router-dom";



const Text = () => {
  return (
    <>
      <div>Hi</div>
    </>)
}
export default function PageSelectLayout() {
  let navigate = useNavigate();

  function handleToCreatePassword() {
    let path = `../create-password`;
    navigate(path);
  }
  function ImportWalletLayout() {
    let path = `/import-wallet`;
    navigate(path);
  }


  return (
    <div>
      <button onClick={ImportWalletLayout}>Import wallet</button>
      <button onClick={handleToCreatePassword}>Create a wallet</button>
      <Text />
    </div>
  )
}

