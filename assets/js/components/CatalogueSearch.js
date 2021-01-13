import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export const CatalogueSearch = React.forwardRef((props, ref) => {
  const [openModal, setOpenModal] = useState(false);

  if (!openModal) {
    return ReactDOM.createPortal(
      <a data-toggle="modal" data-backdrop="false" data-target="#searchModal" onClick={() => setOpenModal(true)}>
        <div className="form-inline pr-2 pr-lg-0" role="search">
          <div className="form-group position-relative">
            <span className="text-white mr-3 d-none d-lg-inline">CERCA</span>
            <svg className="icon">
              <use xlinkHref="/assets/svg/sprite.svg#it-search"></use>
            </svg>
          </div>
        </div>
      </a>,
      ref
    );
  }

  return ReactDOM.createPortal(
    <div role="dialog" className="modal fade show d-block">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <div className="container">
              <p className="h1 modal-title d-inline"> Title </p>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => setOpenModal(false)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
          <div className="modal-body">
            <div className="container">
              <div className="form-group">
                <div className="autocomplete">
                  <svg className="icon icon-lg" onClick={() => (location.pathname = 'it/search')}>
                    <use xlinkHref="/assets/svg/sprite.svg#it-search"></use>
                  </svg>
                  <input type="text" className="form-control" placeholder="test" aria-label="test" />
                  <div className="d-none"></div>
                </div>
                <div>
                  <a className="btn py-2 px-4 mb-2 btn-filter all active" data="all">
                    <svg className="icon">
                      <use xlinkHref="/assets/svg/sprite.svg#it-search"></use>
                    </svg>
                    Tutto
                  </a>
                  <a className="btn py-2 px-4 mb-2 btn-filter platforms" data="platforms">
                    <span className="icon icon-type-platform--gray"></span>piattaforme
                  </a>
                  <a className="btn py-2 px-4 mb-2 btn-filter software_open" data="software_open">
                    <span className="icon icon-type-generic-sw--gray"></span>open software
                  </a>
                  <a className="btn py-2 px-4 mb-2 btn-filter reuse_software" data="reuse_software">
                    <span className="icon icon-type-public-sw--gray"></span>riuso
                  </a>
                  <a className="btn py-2 px-4 mb-2 btn-filter administrations" data="administrations">
                    <svg className="icon">
                      <use xlinkHref="/assets/svg/sprite.svg#it-pa"></use>
                    </svg>
                    amministrazione
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    ref
  );
});

CatalogueSearch.displayName = 'CatalogueSearch';
