import React from 'react'
import { useNavigate } from "react-router-dom";

function ImportWalletLayout() {
  let navigate = useNavigate();
  let path = `/import-wallet`;
  navigate(path);
}

function CreateWalletLayout() {
  let navigate = useNavigate();
  let path = `create-wallet`;
  navigate(path);
}

export default function PageSelectAction() {
  return (
    <div>
      <button onClick={ImportWalletLayout}>Import wallet</button>
      <button onClick={CreateWalletLayout}>Create a wallet</button>
    </div>
  )
}

