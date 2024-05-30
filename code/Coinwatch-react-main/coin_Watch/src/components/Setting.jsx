import {useNavigate} from "react-router-dom";
import {CryptoState} from "../CryptoContext.jsx";

export function Setting({toggleDarkMode ,darkMode}) {
    let navigate = useNavigate();
    const {currency, setCurrency} = CryptoState();




    const handleToggleDarkMode = (e) => {
        toggleDarkMode(e.target.checked); // Pass true if checkbox is checked, false otherwise
    };
        return (

                <div className="settings-page">
                    <section className="mb-5" style={{paddingBottom: '300px'}} id="extension-settings">
                        <div className="container-fluid">
                            <div className="section-header text-start text-uppercase mb-3">
                                <h2>Extension Settings</h2>
                                <button type="button" className="back-button" onClick={()=>navigate('/')}><i className="fa-solid fa-chevron-left"></i> Back</button>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="extension-card">
                                        <div className="settings-item-card">
                                            <div className="settings-item-key">
                                                <div className="setting-item-icon">
                                                    <i className="fa-solid fa-moon"></i>
                                                </div>
                                                <h3>
                                                    Dark Mode
                                                </h3>
                                            </div>
                                            <div className="settings-item-value">
                                                <label className="switch">
                                                    <input type="checkbox" onChange={handleToggleDarkMode} checked={darkMode}  />
                                                        <span className="slider round"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="extension-card">
                                        <div className="settings-item-card">
                                            <div className="settings-item-key">
                                                <div className="setting-item-icon">
                                                    <i className="fa-solid fa-dollar-sign"></i>
                                                </div>
                                                <h3>
                                                    Quotes Currency
                                                </h3>
                                            </div>
                                            <div className="settings-item-value">
                                                <select className="form-select quotes-currency-select" aria-label="Default select example"
                                                        value={currency}
                                                        onChange={(e) => setCurrency(e.target.value)}
                                                >
                                                    <option  value={'USD'}>USD</option>
                                                    <option value={'EUR'}>EUR</option>

                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

        );
    }

