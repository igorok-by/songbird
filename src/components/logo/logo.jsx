import React from 'react';
import './logo.scss';

const Logo = () => {
  return (
    <a href="#" className="logo">
      <svg
      className="logo__img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32" >
        <path d="M21.227 17.688l-2.109-.062a4.526 4.526 0 00-8.801.831l-.001.003c-1.096-.158-2.125-1.873-3.178-4.864-2.351 2.795-2.208 5.894-1.5 7.055-1.5.164-4.381-.712-5.638-1.397 2.191 4.898 5.326 7.291 8.394 7.947a7.398 7.398 0 003.484.872c.134 0 .264-.013.396-.021l-.624 1.061-1.319.432.107.326 1.278-.418.603.618.245-.239-.585-.601.709-1.203a7.444 7.444 0 001.416-.293l1.353 1.729-1.147.424.119.322 1.301-.482 1.197.535.14-.312-1.221-.548-1.403-1.792c2.791-1.023 4.803-3.661 4.889-6.785.001-.051 1.938-.126 1.938-.126l-1.957-1.381 1.914-1.631zm-4.653 1.586a1.243 1.243 0 110-2.486 1.243 1.243 0 010 2.486z"/><path d="M16.66 17.409c.025.05.044.103.044.161a.347.347 0 01-.345.346.344.344 0 01-.267-.137.62.62 0 101.188.251.62.62 0 00-.62-.621zM23.975 13.765l.004.351v3.175a.94.94 0 10.287.821h.012v-3.289l2.611-.479v2.336a.939.939 0 00-1.582.686.94.94 0 001.868.136h.011v-3.699l.018-.003-.005-.635-3.224.6zm2.912.406l-2.611.479v-.307l2.611-.483v.311zM31.996 5.771l-2.834.525.003.308v2.792a.825.825 0 00-1.391.604.827.827 0 001.644.12h.009V7.228l2.296-.421v2.055a.819.819 0 00-.564-.225.828.828 0 000 1.654.824.824 0 00.816-.707h.01V6.331L32 6.328l-.004-.557zm-.273.882l-2.297.421v-.269l2.297-.425v.273zM22.966 6.085h.011V3.193l2.295-.422v2.055a.818.818 0 00-.563-.224.828.828 0 000 1.655.826.826 0 00.817-.707h.01V2.297l.015-.003-.005-.558-2.834.525.002.308v2.792a.826.826 0 10.252.724zm.011-3.314l2.295-.425v.273l-2.295.421v-.269z"/>
      </svg>
      <p className="logo__descr"><span>Song</span>Bird</p>
    </a>
  );
};

export default Logo;