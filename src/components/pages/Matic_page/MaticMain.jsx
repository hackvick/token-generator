import React from "react";
import '../Eth_page/eth_styles/main.css'
export const MaticMain = () => {
  return (
    <>
      <div className="page-content">
        <main >
          <div className="hero mb-3">
            <div className="container">
              <h1>
                <span className="sub-highlight">
                  Create Your Polygon Token
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
                  <form action="">
                    <div className="row">
                      <div className="col mt-3 mt-lg-0">
                        <div className="card">
                          <div className="card-header d-flex align-items-center">
                            <div className="mr-3" style={{zoom:1.5}}>
                              {/* <svg
                                class="icon-arrow"
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
                            <h4 class="m-0"><i class="fa-solid fa-arrow-right me-3"></i>Informations</h4>
                          </div>
                          <div class="card-body">
                            <div class="form-group">
                              <label class="form-label">
                                Token type
                                <span class="val-required">*</span>
                              </label>
                              <select class="form-select" name="tokenType">
                                <option value="1">Free</option>
                                <option value="2">Basic</option>
                                <option value="3">Custom</option>
                              </select>
                              <span class="form-text text-muted">
                                Select the base configuration of your token
                                (Free and Basic have limited configurations)
                              </span>
                            </div>
                            <div class="form-group">
                              <label class="form-label">
                                Token Name<span class="val-required">*</span>
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                placeholder="My new token"
                                name="name"
                              />
                              <span class="form-text text-muted">
                                The name of your token
                              </span>
                            </div>
                            <div class="form-group">
                              <label class="form-label">
                                Token Symbol<span class="val-required">*</span>
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                placeholder="TKN"
                                maxlength="8"
                                name="symbol"
                              />
                              <span class="form-text text-muted">
                                You token's symbol (ie MATIC)
                              </span>
                            </div>
                            <div class="form-group">
                              <label class="form-label">
                                Decimals<span class="val-required">*</span>
                              </label>
                              <input
                                type="number"
                                class="form-control"
                                placeholder="18"
                                maxlength="2"
                                disabled=""
                                name="decimals"
                              />
                              <span class="form-text text-muted">
                                The number of decimal of your token (default 18)
                              </span>
                            </div>
                          </div>
                          <div class="card mt-3">
                            <div class="card-header d-flex align-items-center">
                              <div class="mr-3" style={{zoom:1.5}}>
                                {/* <svg
                                  class="icon-arrow"
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
                              <h4 class="m-0"><i class="fa-solid fa-arrow-right me-3"></i>Supply</h4>
                            </div>
                            <div class="card-body">
                              <div class="form-group">
                                <label class="form-label">
                                  Supply type<span class="val-required">*</span>
                                </label>
                                <select
                                  class="form-select"
                                  name="supplyType"
                                  disabled=""
                                >
                                  <option value="1">Fixed</option>
                                  <option value="2">Capped</option>
                                  <option value="3">Unlimited</option>
                                </select>
                                <span class="form-text text-muted">
                                  Fixed / Capped / Unlimited
                                </span>
                              </div>
                              <div class="form-group">
                                <label class="form-label">
                                  Initial supply
                                  <span class="val-required">*</span>
                                </label>
                                <input
                                  type="number"
                                  class="form-control"
                                  placeholder="1000000"
                                  name="initialSupply"
                                />
                                <span class="form-text text-muted">
                                  The number of coins minted during the creation
                                  of the contract
                                </span>
                              </div>
                              <div class="form-group">
                                <label class="form-label">
                                  Maximum supply
                                  <span class="val-required">*</span>
                                </label>
                                <input
                                  type="number"
                                  class="form-control"
                                  placeholder="1000000"
                                  name="maxSupply"
                                  disabled=""
                                />
                                <span class="form-text text-muted">
                                  The maximum number of coins ever minted
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        
                      </div>
                      <div class="col mt-3 mt-lg-0">
                          <div class="card">
                      
                            <div class="card-header d-flex align-items-center">
                              <div class="mr-3" style={{zoom:1.5}}>
                                {/* <svg
                                  class="icon-arrow"
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
                              <h4 class="m-0"><i class="fa-solid fa-arrow-right me-3"></i>Options</h4>
                            </div>
                            <div class="card-body">
                              <div class="form-group">
                                <label class="form-check form-switch">
                                  <input
                                    name="cbConform"
                                    class="form-check-input"
                                    type="checkbox"
                                    disabled=""
                                    checked=""
                                  />
                                  <span class="form-check-label">
                                    Conforms to ERC20 protocol
                                  </span>
                                </label>
                                <span class="form-text text-muted">
                                  Your token will const all the functionalities,
                                  and conforms to ERC20 protocol
                                </span>
                              </div>
                              <div class="form-group">
                                <label class="form-check form-switch">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    disabled=""
                                    name="verified"
                                  />
                                  <span class="form-check-label">
                                    Verified on Polygonscan
                                  </span>
                                </label>
                                <span class="form-text text-muted">
                                  The source code of your contract is
                                  automatically published and verified
                                </span>
                              </div>
                              <div class="form-group">
                                <label class="form-check form-switch">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    name="removeCopyright"
                                    disabled=""
                                  />
                                  <span class="form-check-label">
                                    No copyright link
                                  </span>
                                </label>
                                <span class="form-text text-muted">
                                  A link pointing to this page will be added in
                                  the description of your contract (Free and
                                  Basic contracts only)
                                </span>
                              </div>
                              <div class="form-group">
                                <label class="form-check form-switch">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    name="isMintable"
                                    disabled=""
                                  />
                                  <span class="form-check-label">
                                    {" "}
                                    Mintable{" "}
                                  </span>
                                </label>
                                <span class="form-text text-muted">
                                  Allow the creation of new tokens in the future
                                </span>
                              </div>
                              <div class="form-group">
                                <label class="form-check form-switch">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    name="isBurnable"
                                    disabled=""
                                  />
                                  <span class="form-check-label">Burnable</span>
                                </label>
                                <span class="form-text text-muted">
                                  Allow your tokens to be burned
                                </span>
                              </div>
                              <div class="form-group">
                                <label class="form-check form-switch">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    name="isPausable"
                                    disabled=""
                                  />
                                  <span class="form-check-label">Pausable</span>
                                </label>
                                <span class="form-text text-muted">
                                  Allow your tokens to be paused
                                </span>
                              </div>
                              <div class="form-group">
                                <label class="form-check form-switch">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    name="isRecoverable"
                                    disabled=""
                                  />
                                  <span class="form-check-label">
                                    Recoverable
                                  </span>
                                </label>
                                <span class="form-text text-muted">
                                  Allow to recover any ERC20 tokens sent to your
                                  contract
                                </span>
                              </div>
                              <div class="form-group">
                                <label class="form-label">
                                  Access type<span class="val-required">*</span>
                                </label>
                                <select
                                  class="form-select"
                                  name="accessType"
                                  disabled=""
                                >
                                  <option value="2">Owner</option>
                                  <option value="3">Roles</option>
                                </select>
                                <span class="form-text text-muted">
                                  Who can administer your contract
                                </span>
                                <div class="form-info">
                                  <div class="form-text text-muted">
                                    <p>
                                      <span class="strong">Owner:</span> Your
                                      wallet address will be set as the owner of
                                      your token to perform administratives
                                      tasks (ie, mint new tokens).
                                    </p>
                                    <p>
                                      <span class="strong">Roles:</span> All
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
                      <div class="col mt-3 mt-xl-0">
                        <div class="card">
                          <div class="card-header d-flex align-items-center">
                            <div class="mr-3" style={{zoom:1.5}}>
                              {/* <svg
                                class="icon-arrow"
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
                            <h4 class="m-0"><i class="fa-solid fa-arrow-right me-3"></i>Network</h4>
                          </div>
                          <div class="card-body">
                            <div class="form-group">
                              <select class="form-select" name="chain">
                                <option value="1">Mainnet</option>
                                <option value="5">Görli</option>
                                <option value="4">Rinkeby</option>
                              </select>
                              <span class="form-text text-muted">
                                Select the network on wich you want to deploy
                                your token
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="card mt-3">
                          <div class="card-header d-flex align-items-center">
                            <div class="mr-3" style={{zoom:1.5}}>
                              {/* <svg
                                class="icon-arrow"
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
                            <h4 class="m-0"><i class="fa-solid fa-arrow-right me-3"></i>Agreement</h4>
                          </div>
                          <div class="card-body">
                            <div class="form-group">
                              <label class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  name="tosAgreement"
                                />
                                <span class="form-check-label">
                                  I have read, understood and agreed to the{" "}
                                  <span class="text-underline">
                                    Terms of Use
                                  </span>
                                  .
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div class="card mt-3">
                          <div class="card-header d-flex align-items-center">
                            <div class="mr-3" style={{zoom:1.5}}>
                              {/* <svg
                                class="icon-arrow"
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
                            <h4 class="m-0"><i class="fa-solid fa-arrow-right me-3"></i>Transaction</h4>
                          </div>
                          <div class="card-body">


                              <div className="transactionWrap">
                                <div className="Ttext">
                                 <p>Commission fee:   <i class="fa-solid fa-circle-info"></i></p>
                                </div>
                                <div className="Tbtn">
                                <span class="badge bg-success d-block p-2">
                                  150 MATIC
                                </span>
                                </div>
                              </div>
                              <div className="transactionWrap">
                                <div className="Ttext">
                                 <p>Gas fee:   <i class="fa-solid fa-circle-info"></i></p>
                                </div>
                                <div className="Tbtn">
                                <span class="badge bg-secondary d-block p-2">
                                  Variable
                                </span>
                                </div>
                              </div>



                            
                          </div>
                        </div>
                        <div class="mt-3">
                          <button
                            type="submit"
                            class="btn-lg btn-success1 w-100"
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
