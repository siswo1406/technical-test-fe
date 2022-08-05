import { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [listBidang, setListBidang] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then(async (res) => {
        let data = await res.json();

        setListBidang(data);
      })
  }, []);

  let optionBidang = listBidang.map((bidang) => {
    return <option>{bidang}</option>;
  });

  return (
    <div className="app flex-row align-items-center background-login">
      <div className="container">
        <div className="justify-content-center row">
          <div className="col-sm-8 col-md-9">
            <div className="card-group">
              <div className="card-login-form card">
                <div className="card-body d-flex align-items-center justify-content-center p-0">
                  <form action="#">
                    <div className="logo text-center">
                      <img
                        src="/logo.ba215251.png"
                        className="logo-widya-skilloka"
                        alt="logo-widya-skilloka"
                      />
                    </div>
                    <h5>
                      <b>Data Perusahaan</b>
                    </h5>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="w-100 form-group mb-2">
                          <label htmlFor="companyName" className="input-label">
                            Nama Perusahaan
                          </label>
                          <input
                            label="Nama Perusahaan"
                            id="companyName"
                            name="companyName"
                            type="text"
                            className="form-control"

                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="w-100 form-group mb-2">
                          <label htmlFor="companyDomain" className="input-label">
                            Website Perusahaan
                          </label>
                          <input
                            label="Website Perusahaan"
                            id="companyDomain"
                            name="companyDomain"
                            type="text"
                            className="form-control"

                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <label htmlFor="badan-usaha" className="input-label">
                          Nomor Telepon Perusahaan
                        </label>
                        <div className="input-group">
                          <span className="input-group-text">+</span>
                          <input
                            pattern="[0-9]*"
                            inputMode="numeric"
                            type="text"
                            className="form-control"
                            name="companyPhone"
                            id="companyPhone"
                            placeholder="62"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <label htmlFor="badan-usaha" className="input-label">
                          Bidang Perusahaan
                        </label>
                        <select className="form-select" id="badan-usaha">
                          <option defaultValue>Pilih bidang</option>
                          {optionBidang}
                        </select>
                      </div>
                    </div>
                    <hr />
                    <h5>
                      <b>Data diri Anda</b>
                    </h5>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="w-100 form-group mb-2">
                          <label htmlFor="userFullName" className="input-label">
                            Nama Lengkap
                          </label>
                          <input
                            label="Nama Lengkap"
                            id="userFullName"
                            name="userFullName"
                            type="text"
                            className="form-control"

                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="w-100 form-group mb-2">
                          <label htmlFor="userNickName" className="input-label">
                            Nama Panggilan
                          </label>
                          <input
                            label="Nama Panggilan"
                            id="userNickName"
                            name="userNickName"
                            type="text"
                            className="form-control"

                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="w-100 form-group mb-2">
                          <label htmlFor="userEmail" className="input-label">
                            Email
                          </label>
                          <input
                            label="Email"
                            id="userEmail"
                            name="userEmail"
                            type="email"
                            className="form-control"

                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <label htmlFor="badan-usaha" className="input-label">
                          Telepon
                        </label>
                        <div className="input-group">
                          <span className="input-group-text">+</span>
                          <input
                            type="text"
                            pattern="[0-9]*"
                            inputMode="numeric"
                            className="form-control"
                            name="userPhone"
                            id="userPhone"
                            placeholder="62"
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="login-submit mt-3 btn btn-secondary"
                    >
                      Register
                    </button>
                    <div className="mt-5">
                      <a href="/#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg> Ke Halaman Login
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
