import { imagePath } from './assets/ImagePath';
function App() {
  return (
    <div>
      <header>
        <div className="logo py-3">
          <img src={imagePath('./Logo.svg')} height={30} />
        </div>
      </header>
      <section>
        <div className="container-fluid">
          <div className="section-title">
            <h2>VARIETIES</h2>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="img-wrap">
                <img src={imagePath('./pizza.svg')}/>
                <div className="pizza-info">
                  <h2>Pizza is a savory dish of Italian origin</h2>
                  <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry.</h4>
                  <div className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-explore">Explore <i className="bi bi-chevron-right ms-2" /></button>
                    <div className="star-rated"><i className="bi bi-star me-2 fs-5" /> Rated</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6">
                  <div className="img-wrap">
                    <img src={imagePath('./french.svg')}/>
                    <div className="variety-info">
                      <h2>Crispy French Fries</h2>
                      <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </h4>
                      <div className="d-flex justify-content-between align-items-center">
                        <button className="btn btn-explore border-0 btn-black">Explore <i className="bi bi-chevron-right ms-2" /></button>
                        <div className="star-rated star-black"><i className="bi bi-star me-2 fs-5" />
                          Rate</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="img-wrap">
                    <img src={imagePath('./paneer.svg')}/>
                    <div className="variety-info">
                      <h2>Paneer Tikka</h2>
                      <h4>
                      </h4>
                      <div className="d-flex justify-content-between align-items-center">
                        <button className="btn btn-explore border-0 btn-black">Explore <i className="bi bi-chevron-right ms-2" /></button>
                        <div className="star-rated star-black"><i className="bi bi-star me-2 fs-5" />
                          Rate</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="img-wrap">
                    <img src={imagePath('./macroon.svg')}/>
                    <div className="variety-info bg_black">
                      <h2>Crispy French Fries</h2>
                      <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </h4>
                      <div className="d-flex justify-content-between align-items-center">
                        <button className="btn btn-explore border-0">Explore <i className="bi bi-chevron-right ms-2" /></button>
                        <div className="star-rated"><i className="bi bi-star me-2 fs-5" />
                          Rate</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="img-wrap">
                    <img src={imagePath('./doughnut.svg')}/>
                    <div className="variety-info">
                      <h2>Crispy French Fries</h2>
                      <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </h4>
                      <div className="d-flex justify-content-between align-items-center">
                        <button className="btn btn-explore border-0 btn-black">Explore <i className="bi bi-chevron-right ms-2" /></button>
                        <div className="star-rated star-black"><i className="bi bi-star me-2 fs-5" />
                          Rate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 px-5">
              <h2 className="variety-type">Indian Cuisine</h2>
              <h5 className="variety-detail">Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h5>
            </div>
            <div className="col-lg-4 px-5">
              <h2 className="variety-type">American Cuisine</h2>
              <h5 className="variety-detail">Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard.</h5>
            </div>
            <div className="col-lg-4 px-5">
              <h2 className="variety-type">Chinese Cuisine</h2>
              <h5 className="variety-detail">Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h5>
            </div>
          </div>
        </div>
      </section>
      <section className="p-0">
        <div className="section-title">
          <h2>TOP CHEFS</h2>
        </div>
        <div className="top-chef-bg">
          <div className=" container">
            <div className="row">
              <div className="col-lg-4 text-center mt-2">
                <img src={imagePath('./eileen.svg')}/>
                <h2 className="section-name">Eileen Johnson</h2>
                <h4 className="section-desc">Executive Chef, USA</h4>
              </div>
              <div className="col-lg-4 text-center">
                <div className="card">
                  <div className="card-body">
                    <img src={imagePath('./robert.svg')} />
                    <h2 className="section-name name-black">Eileen Johnson</h2>
                    <h4 className="section-desc desc-black">Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 text-center mt-2">
                <img src={imagePath('./amandaa.svg')} />
                <h2 className="section-name">Amanda Dority</h2>
                <h4 className="section-desc">Sous Chef, India</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="food-guide-bg">
        <div className="container-fluid">
          <div className="section-title mt-4">
            <h2>FOOD GUIDE</h2>
          </div>
          <div className="row food-padding">
            <div className="col-lg-4 px-5">
              <div className="text-center food-margin">
                <span className="img-cricle">
                  <img src={imagePath('./vegetable.svg')} />
                </span>
                <h2 className="section-name name-black">VEGETABLES</h2>
                <h4 className="section-desc desc-black">Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                  industry. Lorem Ipsum has been the industry's standard.</h4>
              </div>
              <div className="text-center mb-4">
                <span className="img-cricle">
                  <img src={imagePath('./apple.svg')} />
                </span>
                <h2 className="section-name name-black">FRUITS</h2>
                <h4 className="section-desc desc-black">Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                  industry. Lorem Ipsum has been the industry's standard.</h4>
              </div>
            </div>
            <div className="col-lg-4 px-3">
            </div>
            <div className="col-lg-4 px-5">
              <div className="text-center food-margin">
                <span className="img-cricle">
                  <img src={imagePath('./grains.svg')} />
                </span>
                <h2 className="section-name name-black">WHOLE GRAINS</h2>
                <h4 className="section-desc desc-black">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
              </div>
              <div className="text-center mb-4">
                <span className="img-cricle">
                  <img src={imagePath('./protein.svg')} />
                </span>
                <h2 className="section-name name-black">HEALTHY PROTEIN</h2>
                <h4 className="section-desc desc-black">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default App;
