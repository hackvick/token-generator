import React from "react";
import { useState }  from "react";
import './eth_styles/main.css'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const EthMain = () => {

  const [tokenType,setTokenType] = useState()
  const [tokenName,setTokenName]=useState("")
  const [tokenSymbol,setTokenSymbol] = useState("")
  const [decimals,setDecimals] = useState(18)
  const [supplyType,setSupplyType] = useState(1000)
  const [initialSupply,setinitialSupply] = useState(1000)
  const [maximumSupply,setMaximumSupply] = useState(1000)
  const [conforms,setConforms] = useState(true)
  const [verified,setVerified] = useState(false)
  const [noCopyrightLink,setNoCopy] = useState(false)
  const [mintable,setMintable] = useState(false)
  const [burnable,setBurnable] = useState(true)
  const [burnableDisable,setBurnableDisable] = useState(true)
  const [pausable,setPausable] = useState(false)
  const [recoverable,setRecoverable] = useState(false)
  const [accessType,setAccessType] = useState("Owner")
  const [network,setNetwork] = useState("Mainnet")
  const [agreement,setAgreement] = useState()

  const [error,setError]= useState(false)


  const formHandler=(e)=>{
    e.preventDefault()
    
    console.log(agreement,"da");
    if(tokenName.length===0)
    {
      
      toast.error("Please fill your token name")
    }
    if(tokenSymbol.length===0)
    {
      
      toast.error("Please fill your token symbol")
    }
    if(maximumSupply===0){
      toast.error("Please fill the max supply")
    }
    if(agreement===false){
      toast.error("Please confirm that you have read and understood our terms of use")
    }

  }
  const tokenTypeHandler=(e)=>{
    console.log(e.target.value);
    if(e.target.value==3)
    console.log("aaja");
    setBurnableDisable(false)
    setTokenType(e.target.value)
  }
const tokenNameHandler=(e)=>{
  setTokenName(e.target.value)
}
const tokenSymbolHandler=(e)=>{
  setTokenSymbol(e.target.value)
}
const decimalsHandler=(e)=>{
  setDecimals(e.target.value)
}
const supplyTypeHandler=(e)=>{
  setSupplyType(e.target.value)
}
const initialSupplyHandler=(e)=>{
  setinitialSupply(e.target.value)
}
const maximumSupplyHandler=(e)=>{
  setMaximumSupply(e.target.value)
}
const accessTypeHandler=(e)=>{
  setAccessType(e.target.value)
}
const networkHandler=(e)=>{
  setNetwork(e.target.value)
}
const agreementHandler=(e)=>{

  console.log(e.target.value,"value");
  setAgreement(e.target.value)
}

  
  return (
    <>
    
      <div className="page-content">
        <main >
          <div className="hero mb-3">
            <div className="container">
              <h1>
                <span className="sub-highlight">
                  Create Your Ethereum Token
                </span>
              </h1>
              <p>
                Easily deploy your Smart Contract for a Standard, Capped,
                Mintable, Burnable ERC20 Token.
                <br />
                No login.No setup.No Coding required.
              </p>
            </div>
          </div>
          <section>
            <div className="container">
              <div className="configurator-container">
                <div className="configurator">
                  <form action="" onSubmit={formHandler}>
                    <div className="row">
                      <div className="col mt-3 mt-lg-0">
                        <div className="card">
                          <div className="card-header d-flex align-items-center">
                            <div className="mr-3" style={{zoom:1.5}}>
                              {/* <svg
                                className="icon-arrow"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xlink:href="http://www.w3.org/1999/xlink"
                              >
                                <g
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <polygon
                                    points="0 0 24 0 24 24 0 24"
                                    opacity="0"
                                  ></polygon>
                                  <rect
                                    opacity="0.3"
                                    transform="translate(8.500000, 12.000000) rotate(-90.000000) translate(-8.500000, -12.000000) "
                                    x="7.5"
                                    y="7.5"
                                    width="2"
                                    height="9"
                                    rx="1"
                                    fill="#383838"
                                  ></rect>
                                  <path
                                    d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                    fill="#383838"
                                    fill-rule="nonzero"
                                    transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997) "
                                  ></path>
                                </g>
                              </svg> */}
                            </div>
                            <h4 className="m-0"><i className="fa-solid fa-arrow-right me-3"></i>Informations</h4>
                          </div>
                          <div className="card-body">
                            <div className="form-group">
                              <label className="form-label">
                                Token type
                                <span className="val-required">*</span>
                              </label>
                              <select className="form-select"  name="tokenType" onChange={tokenTypeHandler}>
                                <option value="1">Free</option>
                                <option value="2">Basic</option>
                                <option value="3">Custom</option>
                              </select>
                              <span className="form-text text-muted">
                                Select the base configuration of your token
                                (Free and Basic have limited configurations)
                              </span>
                            </div>
                            <div className="form-group">
                              <label className="form-label">
                                Token Name<span className="val-required">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="My new token"
                                name="name"
                                onChange={tokenNameHandler}
                              />
                              <span className="form-text text-muted">
                                The name of your token
                              </span>
                            </div>
                            <div className="form-group">
                              <label className="form-label">
                                Token Symbol<span className="val-required">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="TKN"
                                maxLength="8"
                                name="symbol"
                                onChange={tokenSymbolHandler}
                              />
                              <span className="form-text text-muted">
                                You token's symbol (ie ETH)
                              </span>
                            </div>
                            <div className="form-group">
                              <label className="form-label">
                                Decimals<span className="val-required">*</span>
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                placeholder="18"
                                maxLength="2"
                                disabled=""
                                name="decimals"
                                onChange={decimalsHandler}
                              />
                              <span className="form-text text-muted">
                                The number of decimal of your token (default 18)
                              </span>
                            </div>
                          </div>
                          <div className="card mt-3">
                            <div className="card-header d-flex align-items-center">
                              <div className="mr-3" style={{zoom:1.5}}>
                                {/* <svg
                                  className="icon-arrow"
                                  width="24px"
                                  height="24px"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xlink:href="http://www.w3.org/1999/xlink"
                                >
                                  <g
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                  >
                                    <polygon
                                      points="0 0 24 0 24 24 0 24"
                                      opacity="0"
                                    ></polygon>
                                    <rect
                                      opacity="0.3"
                                      transform="translate(8.500000, 12.000000) rotate(-90.000000) translate(-8.500000, -12.000000) "
                                      x="7.5"
                                      y="7.5"
                                      width="2"
                                      height="9"
                                      rx="1"
                                      fill="#383838"
                                    ></rect>
                                    <path
                                      d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                      fill="#383838"
                                      fill-rule="nonzero"
                                      transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997) "
                                    ></path>
                                  </g>
                                </svg> */}
                              </div>
                              <h4 className="m-0"><i className="fa-solid fa-arrow-right me-3"></i>Supply</h4>
                            </div>
                            <div className="card-body">
                              <div className="form-group">
                                <label className="form-label">
                                  Supply type<span className="val-required">*</span>
                                </label>
                                <select
                                  className="form-select"
                                  name="supplyType"
                                  disabled=""
                                  onChange={supplyTypeHandler}
                                >
                                  <option value="1">Fixed</option>
                                  <option value="2">Capped</option>
                                  <option value="3">Unlimited</option>
                                </select>
                                <span className="form-text text-muted">
                                  Fixed / Capped / Unlimited
                                </span>
                              </div>
                              <div className="form-group">
                                <label className="form-label">
                                  Initial supply
                                  <span className="val-required">*</span>
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder="1000000"
                                  name="initialSupply"
                                  onChange={initialSupplyHandler}
                                  
                                />
                                <span className="form-text text-muted">
                                  The number of coins minted during the creation
                                  of the contract
                                </span>
                              </div>
                              <div className="form-group">
                                <label className="form-label">
                                  Maximum supply
                                  <span className="val-required">*</span>
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder="1000000"
                                  value={initialSupply}
                                  name="maxSupply"
                                  disabled=""
                                  onChange={maximumSupplyHandler}
                                />
                                <span className="form-text text-muted">
                                  The maximum number of coins ever minted
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        
                      </div>
                      <div className="col mt-3 mt-lg-0">
                          <div className="card">
                      
                            <div className="card-header d-flex align-items-center">
                              <div className="mr-3" style={{zoom:1.5}}>
                                {/* <svg
                                  className="icon-arrow"
                                  width="24px"
                                  height="24px"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xlink:href="http://www.w3.org/1999/xlink"
                                >
                                  <g
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                  >
                                    <polygon
                                      points="0 0 24 0 24 24 0 24"
                                      opacity="0"
                                    ></polygon>
                                    <rect
                                      opacity="0.3"
                                      transform="translate(8.500000, 12.000000) rotate(-90.000000) translate(-8.500000, -12.000000) "
                                      x="7.5"
                                      y="7.5"
                                      width="2"
                                      height="9"
                                      rx="1"
                                      fill="#383838"
                                    ></rect>
                                    <path
                                      d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                      fill="#383838"
                                      fill-rule="nonzero"
                                      transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997) "
                                    ></path>
                                  </g>
                                </svg> */}
                              </div>
                              <h4 className="m-0"><i className="fa-solid fa-arrow-right me-3"></i>Options</h4>
                            </div>
                            <div className="card-body">
                              <div className="form-group">
                                <label className="form-check form-switch">
                                  <input
                                    name="cbConform"
                                    className="form-check-input"
                                    type="checkbox"
                                    
                                    disabled
                                    checked
                                    
                                  />
                                  <span className="form-check-label">
                                    Conforms to ERC20 protocol
                                  </span>
                                </label>
                                <span className="form-text text-muted">
                                  Your token will const all the functionalities,
                                  and conforms to ERC20 protocol
                                </span>
                              </div>
                              <div className="form-group">
                                <label className="form-check form-switch">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    disabled
                                    checked
                                    name="verified"
                                  />
                                  <span className="form-check-label">
                                    Verified on Etherscan
                                  </span>
                                </label>
                                <span className="form-text text-muted">
                                  The source code of your contract is
                                  automatically published and verified
                                </span>
                              </div>
                              <div className="form-group">
                                <label className="form-check form-switch">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="removeCopyright"
                                    disabled=""
                                  />
                                  <span className="form-check-label">
                                    No copyright link
                                  </span>
                                </label>
                                <span className="form-text text-muted">
                                  A link pointing to this page will be added in
                                  the description of your contract (Free and
                                  Basic contracts only)
                                </span>
                              </div>
                              <div className="form-group">
                                <label className="form-check form-switch">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="isMintable"
                                    disabled=""
                                  />
                                  <span className="form-check-label">
                                    {" "}
                                    Mintable{" "}
                                  </span>
                                </label>
                                <span className="form-text text-muted">
                                  Allow the creation of new tokens in the future
                                </span>
                              </div>
                              <div className="form-group">
                                <label className="form-check form-switch">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="isBurnable"
                                    disabled="false"
                                  />
                                  <span className="form-check-label ">Burnable</span>
                                </label>
                                <span className="form-text text-muted">
                                  Allow your tokens to be burned
                                </span>
                              </div>
                              <div className="form-group">
                                <label className="form-check form-switch">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="isPausable"
                                    disabled=""
                                  />
                                  <span className="form-check-label">Pausable</span>
                                </label>
                                <span className="form-text text-muted">
                                  Allow your tokens to be paused
                                </span>
                              </div>
                              <div className="form-group">
                                <label className="form-check form-switch">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="isRecoverable"
                                    disabled=""
                                  />
                                  <span className="form-check-label">
                                    Recoverable
                                  </span>
                                </label>
                                <span className="form-text text-muted">
                                  Allow to recover any ERC20 tokens sent to your
                                  contract
                                </span>
                              </div>
                              <div className="form-group">
                                <label className="form-label">
                                  Access type<span className="val-required">*</span>
                                </label>
                                <select
                                  className="form-select"
                                  name="accessType"
                                  disabled=""
                                  onChange={accessTypeHandler}
                                >
                                  <option value="2">Owner</option>
                                  <option value="3">Roles</option>
                                </select>
                                <span className="form-text text-muted">
                                  Who can administer your contract
                                </span>
                                <div className="form-info">
                                  <div className="form-text text-muted">
                                    <p>
                                      <span className="strong">Owner:</span> Your
                                      wallet address will be set as the owner of
                                      your token to perform administratives
                                      tasks (ie, mint new tokens).
                                    </p>
                                    <p>
                                      <span className="strong">Roles:</span> All
                                      admin tasks (mint, burn, etc...) will be
                                      available to different users, based on
                                      their roles. By default, your wallet's
                                      address will be given all the roles.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      <div className="col mt-3 mt-xl-0">
                        <div className="card">
                          <div className="card-header d-flex align-items-center">
                            <div className="mr-3" style={{zoom:1.5}}>
                              {/* <svg
                                className="icon-arrow"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xlink:href="http://www.w3.org/1999/xlink"
                              >
                                <g
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <polygon
                                    points="0 0 24 0 24 24 0 24"
                                    opacity="0"
                                  ></polygon>
                                  <rect
                                    opacity="0.3"
                                    transform="translate(8.500000, 12.000000) rotate(-90.000000) translate(-8.500000, -12.000000) "
                                    x="7.5"
                                    y="7.5"
                                    width="2"
                                    height="9"
                                    rx="1"
                                    fill="#383838"
                                  ></rect>
                                  <path
                                    d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                    fill="#383838"
                                    fill-rule="nonzero"
                                    transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997) "
                                  ></path>
                                </g>
                              </svg> */}
                            </div>
                            <h4 className="m-0"><i className="fa-solid fa-arrow-right me-3"></i>Network</h4>
                          </div>
                          <div className="card-body">
                            <div className="form-group">
                              <select className="form-select" name="chain" onChange={networkHandler}>
                                <option value="1">Mainnet</option>
                                <option value="5">Görli</option>
                                <option value="4">Rinkeby</option>
                              </select>
                              <span className="form-text text-muted">
                                Select the network on wich you want to deploy
                                your token
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="card mt-3">
                          <div className="card-header d-flex align-items-center">
                            <div className="mr-3" style={{zoom:1.5}}>
                              {/* <svg
                                className="icon-arrow"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xlink:href="http://www.w3.org/1999/xlink"
                              >
                                <g
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <polygon
                                    points="0 0 24 0 24 24 0 24"
                                    opacity="0"
                                  ></polygon>
                                  <rect
                                    opacity="0.3"
                                    transform="translate(8.500000, 12.000000) rotate(-90.000000) translate(-8.500000, -12.000000) "
                                    x="7.5"
                                    y="7.5"
                                    width="2"
                                    height="9"
                                    rx="1"
                                    fill="#383838"
                                  ></rect>
                                  <path
                                    d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                    fill="#383838"
                                    fill-rule="nonzero"
                                    transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997) "
                                  ></path>
                                </g>
                              </svg> */}
                            </div>
                            <h4 className="m-0"><i className="fa-solid fa-arrow-right me-3"></i>Agreement</h4>
                          </div>
                          <div className="card-body">
                            <div className="form-group">
                              <label className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="tosAgreement"
                                  value= {agreement}
                                  onChange={agreementHandler}
                                />
                                <span className="form-check-label">
                                  I have read, understood and agreed to the{" "}
                                  <span className="text-underline">
                                    Terms of Use
                                  </span>
                                  .
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="card mt-3">
                          <div className="card-header d-flex align-items-center">
                            <div className="mr-3" style={{zoom:1.5}}>
                              {/* <svg
                                className="icon-arrow"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xlink:href="http://www.w3.org/1999/xlink"
                              >
                                <g
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <polygon
                                    points="0 0 24 0 24 24 0 24"
                                    opacity="0"
                                  ></polygon>
                                  <rect
                                    opacity="0.3"
                                    transform="translate(8.500000, 12.000000) rotate(-90.000000) translate(-8.500000, -12.000000) "
                                    x="7.5"
                                    y="7.5"
                                    width="2"
                                    height="9"
                                    rx="1"
                                    fill="#383838"
                                  ></rect>
                                  <path
                                    d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                    fill="#383838"
                                    fill-rule="nonzero"
                                    transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997) "
                                  ></path>
                                </g>
                              </svg> */}
                            </div>
                            <h4 className="m-0"><i className="fa-solid fa-arrow-right me-3"></i>Transaction</h4>
                          </div>
                          <div className="card-body">


                              <div className="transactionWrap">
                                <div className="Ttext">
                                 <p>Commission fee:   <i className="fa-solid fa-circle-info"></i></p>
                                </div>
                                <div className="Tbtn">
                                <span className="badge bg-success d-block p-2">
                                  0.075 ETH
                                </span>
                                </div>
                              </div>
                              <div className="transactionWrap">
                                <div className="Ttext">
                                 <p>Gas fee:   <i className="fa-solid fa-circle-info"></i></p>
                                </div>
                                <div className="Tbtn">
                                <span className="badge bg-secondary d-block p-2">
                                  Variable
                                </span>
                                </div>
                              </div>



                            
                          </div>
                        </div>
                        <div className="mt-3">
                          <button
                            type="submit"
                            className="btn-lg btn-success1 w-100" onClick={formHandler}
                          >
                            Confirm
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          
        </main>
      </div>



    </>
  );
};
