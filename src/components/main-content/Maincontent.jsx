import React from "react";
import "./Maincontent.css"

function Maincontent() {
  return (
    <section className="navbar-section">
      <div className="navbar">
        <div className="nav-cont1">
          <div className="payout-title">
            <p>Payouts</p>
          </div>
          <div className="nav-cont1-snt">
            <div className="qst-icon">
              <svg
                width="12.6"
                height="12.6"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#4D4D4D"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.78076 10.1799C7.78076 10.6093 7.43261 10.9575 7.00315 10.9575C6.57369 10.9575 6.22554 10.6093 6.22554 10.1799C6.22554 9.75039 6.57369 9.40225 7.00315 9.40225C7.43261 9.40225 7.78076 9.75039 7.78076 10.1799Z"
                />
                <path
                  fill="#4D4D4D"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.13017 3.40673C6.54699 3.23408 7.00564 3.18891 7.44813 3.27692C7.89062 3.36494 8.29707 3.58219 8.61608 3.90121C8.9351 4.22023 9.15235 4.62668 9.24037 5.06917C9.32839 5.51165 9.28321 5.97031 9.11056 6.38712C8.93791 6.80394 8.64554 7.16019 8.27042 7.41084C8.02632 7.57394 7.75432 7.68756 7.46978 7.74703V7.84702C7.46978 8.10475 7.26084 8.31368 7.00311 8.31368C6.74538 8.31368 6.53644 8.10475 6.53644 7.84702V7.32861C6.53644 7.20484 6.58561 7.08614 6.67313 6.99863C6.76064 6.91111 6.87934 6.86194 7.00311 6.86194C7.26967 6.86194 7.53025 6.7829 7.75188 6.63481C7.97352 6.48671 8.14627 6.27622 8.24828 6.02995C8.35028 5.78368 8.37697 5.51269 8.32497 5.25125C8.27297 4.98981 8.14461 4.74966 7.95612 4.56117C7.76763 4.37269 7.52748 4.24433 7.26604 4.19232C7.0046 4.14032 6.73361 4.16701 6.48734 4.26902C6.24107 4.37103 6.03058 4.54377 5.88249 4.76541C5.73439 4.98705 5.65535 5.24762 5.65535 5.51418C5.65535 5.77192 5.44641 5.98085 5.18868 5.98085C4.93095 5.98085 4.72202 5.77192 4.72202 5.51418C4.72202 5.06303 4.8558 4.622 5.10645 4.24688C5.3571 3.87175 5.71336 3.57938 6.13017 3.40673Z"
                />
                <path
                  fill="#4D4D4D"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.00313 1.63255C4.0392 1.63255 1.63646 4.03529 1.63646 6.99922C1.63646 9.96315 4.0392 12.3659 7.00313 12.3659C9.96705 12.3659 12.3698 9.96315 12.3698 6.99922C12.3698 4.03529 9.96705 1.63255 7.00313 1.63255ZM0.703125 6.99922C0.703125 3.51982 3.52373 0.699219 7.00313 0.699219C10.4825 0.699219 13.3031 3.51982 13.3031 6.99922C13.3031 10.4786 10.4825 13.2992 7.00313 13.2992C3.52373 13.2992 0.703125 10.4786 0.703125 6.99922Z"
                />
              </svg>
            </div>
            <p>How it works</p>
          </div>
        </div>
        <div className="nav-cont2">
          <div className="search-feature">
            <div className="box__icon">
              <svg
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="svg-search-icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search features, tutorials, etc."
              className="fst-search"
            />
          </div>
        </div>
        <div className="nav-cont3">
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.4211 0.0237288L1.11579 3.38234C0.463158 3.49896 0 4.1287 0 4.85174V12.5019C0 13.225 0.463158 13.8547 1.11579 13.9713L2.88421 14.3212C3.6 15.6273 4.94737 17.8897 6.75789 19.7323C7.36842 20.362 8.37895 19.8022 8.25263 18.8693C8.08421 17.6331 8.12632 16.3037 8.18947 15.3707L18.4211 17.3766C19.2421 17.5398 20 16.8401 20 15.9072V1.49312C20 0.560174 19.2421 -0.139537 18.4211 0.0237288ZM6.46316 9.6331C6.46316 9.88966 6.27368 10.0996 6.04211 10.0996H4.31579C4.08421 10.0996 3.89474 9.88966 3.89474 9.6331V7.72056C3.89474 7.464 4.08421 7.25408 4.31579 7.25408H6.04211C6.27368 7.25408 6.46316 7.464 6.46316 7.72056V9.6331ZM11.2842 9.6331C11.2842 9.88966 11.0947 10.0996 10.8632 10.0996H9.13684C8.90526 10.0996 8.71579 9.88966 8.71579 9.6331V7.72056C8.71579 7.464 8.90526 7.25408 9.13684 7.25408H10.8632C11.0947 7.25408 11.2842 7.464 11.2842 7.72056V9.6331ZM16.1263 9.6331C16.1263 9.88966 15.9368 10.0996 15.7053 10.0996H13.9789C13.7474 10.0996 13.5579 9.88966 13.5579 9.6331V7.72056C13.5579 7.464 13.7474 7.25408 13.9789 7.25408H15.6842C15.9158 7.25408 16.1053 7.464 16.1053 7.72056V9.6331H16.1263Z"
                fill="#4D4D4D"
              />
            </svg>
          </div>
          <div className="chev-down">
            <svg
              width="14"
              height="9"
              viewBox="0 0 14 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.11092 8.50209C7.51563 9.15823 6.48437 9.15823 5.88908 8.50209L0.615075 2.68901C-0.259446 1.7251 0.424491 0.181107 1.72599 0.181107L12.274 0.181108C13.5755 0.181108 14.2594 1.7251 13.3849 2.68901L8.11092 8.50209Z"
                fill="#4D4D4D"
              />
            </svg>
          </div>
        </div>
      </div>

      <section className="main-content">
        <div className="overview-cont">
          <h2>Overview</h2>
          <div class="month">
            <p>This month</p>
            <div>
              <svg
                width="12"
                height="6.95"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.846847 1.22185C1.26727 0.801426 1.92516 0.763206 2.38876 1.10719L2.52157 1.22185L8 6.69974L13.4784 1.22185C13.8988 0.801426 14.5567 0.763206 15.0203 1.10719L15.1532 1.22185C15.5736 1.64227 15.6118 2.30016 15.2678 2.76376L15.1532 2.89657L8.83736 9.21236C8.41694 9.63278 7.75905 9.671 7.29545 9.32702L7.16264 9.21236L0.846847 2.89657C0.384384 2.43411 0.384384 1.68431 0.846847 1.22185Z"
                  fill="#4D4D4D"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="frame-container">
          <div className="blue-payment-cont">
            <div className="payment-status-cont">
              <p>Next Payout</p>
              <div className="qst-icon">
                <svg
                  width="12.6"
                  height="12.6"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#FFFFFF"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.78076 10.1799C7.78076 10.6093 7.43261 10.9575 7.00315 10.9575C6.57369 10.9575 6.22554 10.6093 6.22554 10.1799C6.22554 9.75039 6.57369 9.40225 7.00315 9.40225C7.43261 9.40225 7.78076 9.75039 7.78076 10.1799Z"
                  />
                  <path
                    fill="#FFFFFF"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.13017 3.40673C6.54699 3.23408 7.00564 3.18891 7.44813 3.27692C7.89062 3.36494 8.29707 3.58219 8.61608 3.90121C8.9351 4.22023 9.15235 4.62668 9.24037 5.06917C9.32839 5.51165 9.28321 5.97031 9.11056 6.38712C8.93791 6.80394 8.64554 7.16019 8.27042 7.41084C8.02632 7.57394 7.75432 7.68756 7.46978 7.74703V7.84702C7.46978 8.10475 7.26084 8.31368 7.00311 8.31368C6.74538 8.31368 6.53644 8.10475 6.53644 7.84702V7.32861C6.53644 7.20484 6.58561 7.08614 6.67313 6.99863C6.76064 6.91111 6.87934 6.86194 7.00311 6.86194C7.26967 6.86194 7.53025 6.7829 7.75188 6.63481C7.97352 6.48671 8.14627 6.27622 8.24828 6.02995C8.35028 5.78368 8.37697 5.51269 8.32497 5.25125C8.27297 4.98981 8.14461 4.74966 7.95612 4.56117C7.76763 4.37269 7.52748 4.24433 7.26604 4.19232C7.0046 4.14032 6.73361 4.16701 6.48734 4.26902C6.24107 4.37103 6.03058 4.54377 5.88249 4.76541C5.73439 4.98705 5.65535 5.24762 5.65535 5.51418C5.65535 5.77192 5.44641 5.98085 5.18868 5.98085C4.93095 5.98085 4.72202 5.77192 4.72202 5.51418C4.72202 5.06303 4.8558 4.622 5.10645 4.24688C5.3571 3.87175 5.71336 3.57938 6.13017 3.40673Z"
                  />
                  <path
                    fill="#FFFFFF"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.00313 1.63255C4.0392 1.63255 1.63646 4.03529 1.63646 6.99922C1.63646 9.96315 4.0392 12.3659 7.00313 12.3659C9.96705 12.3659 12.3698 9.96315 12.3698 6.99922C12.3698 4.03529 9.96705 1.63255 7.00313 1.63255ZM0.703125 6.99922C0.703125 3.51982 3.52373 0.699219 7.00313 0.699219C10.4825 0.699219 13.3031 3.51982 13.3031 6.99922C13.3031 10.4786 10.4825 13.2992 7.00313 13.2992C3.52373 13.2992 0.703125 10.4786 0.703125 6.99922Z"
                  />
                </svg>
              </div>
            </div>
            <div className="amt-cont">
              <p className="amt">₹2,312.23</p>
              <div className="order-cont">
                <p className="orders">23 orders</p>
                <div className="cnt-icon">
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 9 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.956956 0.292893C1.34748 -0.0976311 1.98064 -0.0976311 2.37117 0.292893L8.37117 6.29289C8.55871 6.48043 8.66406 6.73478 8.66406 7C8.66406 7.26522 8.55871 7.51957 8.37117 7.70711L2.37117 13.7071C1.98065 14.0976 1.34748 14.0976 0.956956 13.7071C0.566432 13.3166 0.566432 12.6834 0.956956 12.2929L6.24985 7L0.956956 1.70711C0.566431 1.31658 0.566431 0.683418 0.956956 0.292893Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="payday">
              <p>Next payout date:</p>
              <p className="text">Today, 04:00PM</p>
            </div>
          </div>

          <div className="payment-cont">
            <div className="payment-status-cont">
              <p>Amount Pending</p>
              <div className="qst-icon">
                <svg
                  width="12.6"
                  height="12.6"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#4D4D4D"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.78076 10.1799C7.78076 10.6093 7.43261 10.9575 7.00315 10.9575C6.57369 10.9575 6.22554 10.6093 6.22554 10.1799C6.22554 9.75039 6.57369 9.40225 7.00315 9.40225C7.43261 9.40225 7.78076 9.75039 7.78076 10.1799Z"
                  />
                  <path
                    fill="#4D4D4D"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.13017 3.40673C6.54699 3.23408 7.00564 3.18891 7.44813 3.27692C7.89062 3.36494 8.29707 3.58219 8.61608 3.90121C8.9351 4.22023 9.15235 4.62668 9.24037 5.06917C9.32839 5.51165 9.28321 5.97031 9.11056 6.38712C8.93791 6.80394 8.64554 7.16019 8.27042 7.41084C8.02632 7.57394 7.75432 7.68756 7.46978 7.74703V7.84702C7.46978 8.10475 7.26084 8.31368 7.00311 8.31368C6.74538 8.31368 6.53644 8.10475 6.53644 7.84702V7.32861C6.53644 7.20484 6.58561 7.08614 6.67313 6.99863C6.76064 6.91111 6.87934 6.86194 7.00311 6.86194C7.26967 6.86194 7.53025 6.7829 7.75188 6.63481C7.97352 6.48671 8.14627 6.27622 8.24828 6.02995C8.35028 5.78368 8.37697 5.51269 8.32497 5.25125C8.27297 4.98981 8.14461 4.74966 7.95612 4.56117C7.76763 4.37269 7.52748 4.24433 7.26604 4.19232C7.0046 4.14032 6.73361 4.16701 6.48734 4.26902C6.24107 4.37103 6.03058 4.54377 5.88249 4.76541C5.73439 4.98705 5.65535 5.24762 5.65535 5.51418C5.65535 5.77192 5.44641 5.98085 5.18868 5.98085C4.93095 5.98085 4.72202 5.77192 4.72202 5.51418C4.72202 5.06303 4.8558 4.622 5.10645 4.24688C5.3571 3.87175 5.71336 3.57938 6.13017 3.40673Z"
                  />
                  <path
                    fill="#4D4D4D"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.00313 1.63255C4.0392 1.63255 1.63646 4.03529 1.63646 6.99922C1.63646 9.96315 4.0392 12.3659 7.00313 12.3659C9.96705 12.3659 12.3698 9.96315 12.3698 6.99922C12.3698 4.03529 9.96705 1.63255 7.00313 1.63255ZM0.703125 6.99922C0.703125 3.51982 3.52373 0.699219 7.00313 0.699219C10.4825 0.699219 13.3031 3.51982 13.3031 6.99922C13.3031 10.4786 10.4825 13.2992 7.00313 13.2992C3.52373 13.2992 0.703125 10.4786 0.703125 6.99922Z"
                  />
                </svg>
              </div>
            </div>
            <div className="amt-cont">
              <p className="amt">₹92,312.20</p>
              <div className="order-cont">
                <p className="orderss">13 orders</p>
                <div className="cnt-icon">
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 9 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.956956 0.292893C1.34748 -0.0976311 1.98064 -0.0976311 2.37117 0.292893L8.37117 6.29289C8.55871 6.48043 8.66406 6.73478 8.66406 7C8.66406 7.26522 8.55871 7.51957 8.37117 7.70711L2.37117 13.7071C1.98065 14.0976 1.34748 14.0976 0.956956 13.7071C0.566432 13.3166 0.566432 12.6834 0.956956 12.2929L6.24985 7L0.956956 1.70711C0.566431 1.31658 0.566431 0.683418 0.956956 0.292893Z"
                      fill="#146EB4"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="payment-cont">
            <div className="payment-status-cont">
              <p>Amount Processed</p>
              <div className="qst-icon">
                <svg
                  width="12.6"
                  height="12.6"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#4D4D4D"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.78076 10.1799C7.78076 10.6093 7.43261 10.9575 7.00315 10.9575C6.57369 10.9575 6.22554 10.6093 6.22554 10.1799C6.22554 9.75039 6.57369 9.40225 7.00315 9.40225C7.43261 9.40225 7.78076 9.75039 7.78076 10.1799Z"
                  />
                  <path
                    fill="#4D4D4D"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.13017 3.40673C6.54699 3.23408 7.00564 3.18891 7.44813 3.27692C7.89062 3.36494 8.29707 3.58219 8.61608 3.90121C8.9351 4.22023 9.15235 4.62668 9.24037 5.06917C9.32839 5.51165 9.28321 5.97031 9.11056 6.38712C8.93791 6.80394 8.64554 7.16019 8.27042 7.41084C8.02632 7.57394 7.75432 7.68756 7.46978 7.74703V7.84702C7.46978 8.10475 7.26084 8.31368 7.00311 8.31368C6.74538 8.31368 6.53644 8.10475 6.53644 7.84702V7.32861C6.53644 7.20484 6.58561 7.08614 6.67313 6.99863C6.76064 6.91111 6.87934 6.86194 7.00311 6.86194C7.26967 6.86194 7.53025 6.7829 7.75188 6.63481C7.97352 6.48671 8.14627 6.27622 8.24828 6.02995C8.35028 5.78368 8.37697 5.51269 8.32497 5.25125C8.27297 4.98981 8.14461 4.74966 7.95612 4.56117C7.76763 4.37269 7.52748 4.24433 7.26604 4.19232C7.0046 4.14032 6.73361 4.16701 6.48734 4.26902C6.24107 4.37103 6.03058 4.54377 5.88249 4.76541C5.73439 4.98705 5.65535 5.24762 5.65535 5.51418C5.65535 5.77192 5.44641 5.98085 5.18868 5.98085C4.93095 5.98085 4.72202 5.77192 4.72202 5.51418C4.72202 5.06303 4.8558 4.622 5.10645 4.24688C5.3571 3.87175 5.71336 3.57938 6.13017 3.40673Z"
                  />
                  <path
                    fill="#4D4D4D"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.00313 1.63255C4.0392 1.63255 1.63646 4.03529 1.63646 6.99922C1.63646 9.96315 4.0392 12.3659 7.00313 12.3659C9.96705 12.3659 12.3698 9.96315 12.3698 6.99922C12.3698 4.03529 9.96705 1.63255 7.00313 1.63255ZM0.703125 6.99922C0.703125 3.51982 3.52373 0.699219 7.00313 0.699219C10.4825 0.699219 13.3031 3.51982 13.3031 6.99922C13.3031 10.4786 10.4825 13.2992 7.00313 13.2992C3.52373 13.2992 0.703125 10.4786 0.703125 6.99922Z"
                  />
                </svg>
              </div>
            </div>
            <div className="amt-cont">
              <p className="amt">₹23,92,312.19</p>
            </div>
          </div>
        </div>
      </section>

      <section class="txn-cont">
        <div class="txn-header">Transactions | This Month</div>
        <div class="txn-btns">
          <button className="payouts-btn">Payouts (22)</button>
          <button className="refunds-btn">Refunds (6)</button>
        </div>

        <div class="table-container">
          <div class="top-row">
            <div class="search-order-id">
              <svg
                width="15.45"
                height="15.19"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="svg-search-icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <input type="text" placeholder="Order ID or transaction ID" />
            </div>
            <div class="table-filters">
              <div className="sort-btn">
                Sort{" "}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.624959 7.93424C0.833239 7.72596 1.17093 7.72596 1.37921 7.93424L3.64295 10.198L5.90669 7.93424C6.11497 7.72596 6.45266 7.72596 6.66094 7.93424C6.86922 8.14252 6.86922 8.48021 6.66094 8.68849L4.02007 11.3294C3.81179 11.5376 3.47411 11.5376 3.26583 11.3294L0.624959 8.68849C0.41668 8.48021 0.41668 8.14252 0.624959 7.93424Z"
                    fill="#4D4D4D"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.6429 0.515641C3.93746 0.515641 4.17624 0.754422 4.17624 1.04897L4.17624 10.9522C4.17624 11.2468 3.93746 11.4856 3.6429 11.4856C3.34835 11.4856 3.10957 11.2468 3.10957 10.9522L3.10957 1.04897C3.10957 0.754422 3.34835 0.515641 3.6429 0.515641Z"
                    fill="#4D4D4D"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.3792 4.06695C13.1709 4.27523 12.8332 4.27523 12.6249 4.06695L10.3612 1.8032L8.09745 4.06695C7.88917 4.27523 7.55149 4.27523 7.34321 4.06695C7.13493 3.85867 7.13493 3.52098 7.34321 3.3127L9.98408 0.671834C10.1924 0.463555 10.53 0.463555 10.7383 0.671835L13.3792 3.3127C13.5875 3.52098 13.5875 3.85867 13.3792 4.06695Z"
                    fill="#4D4D4D"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.3612 11.4855C10.0667 11.4855 9.82791 11.2468 9.82791 10.9522L9.82791 1.04896C9.82791 0.75441 10.0667 0.51563 10.3612 0.51563C10.6558 0.51563 10.8946 0.75441 10.8946 1.04896L10.8946 10.9522C10.8946 11.2468 10.6558 11.4855 10.3612 11.4855Z"
                    fill="#4D4D4D"
                  />
                </svg>
              </div>
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.9993 11.9414C18.371 11.9414 18.6811 12.2102 18.7435 12.5968L18.75 12.7L18.7495 16.2321C18.7495 17.5585 17.7164 18.655 16.3813 18.7448L16.2153 18.75L3.77794 18.7499C2.44615 18.7499 1.34529 17.7208 1.25525 16.391L1.25 16.2258V12.6863C1.25 12.2749 1.58596 11.9414 2.00027 11.9414C2.37194 11.9414 2.68197 12.2102 2.74442 12.5968L2.75092 12.7L2.75044 16.2321C2.75044 16.7555 3.14596 17.2013 3.65248 17.2534L3.76695 17.2599L16.2217 17.2602C16.7449 17.2602 17.1902 16.8642 17.2423 16.3577L17.2489 16.2429L17.2492 12.6863C17.2492 12.2749 17.585 11.9414 17.9993 11.9414ZM10.0121 1.25C10.3715 1.25038 10.6815 1.51921 10.744 1.90576L10.7505 2.00892L10.7512 10.8297L13.9124 7.67494C14.1433 7.44469 14.4923 7.39342 14.7961 7.54761L14.9083 7.61495L14.9846 7.68297C15.2334 7.92976 15.2646 8.33058 15.0409 8.65049L14.9652 8.73721L10.5142 13.1745L10.4327 13.2409L10.3271 13.3035L10.2368 13.3399L10.155 13.3617L10.0754 13.374L10.0133 13.3765L9.89007 13.3697L9.78548 13.3471L9.70291 13.3166L9.6007 13.2643L9.54241 13.2224L9.4569 13.1479L5.02399 8.726C4.73169 8.43447 4.73275 7.96287 5.02636 7.67264C5.28648 7.41551 5.69029 7.38633 6.01149 7.60986L6.09848 7.68534L9.25064 10.8296L9.24964 1.9952C9.24964 1.61868 9.53272 1.30251 9.90546 1.25619L10.0121 1.25Z"
                    fill="#4D4D4D"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div class="table-header">
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Status</th>
                  <th>Transaction ID</th>
                  <th>Refund Date</th>
                  <th>Order amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="odr-id">#281209</td>
                  <td className="odr-status">
                    <div className="done"></div>Successful
                  </td>
                  <td className="odr-txn-id">131634495747</td>
                  <td className="odr-date">Today, 08:45 PM</td>
                  <td className="odr-price">₹1,125.00</td>
                </tr>
                <tr>
                  <td className="odr-id">#281208</td>
                  <td className="odr-status">
                    <div className="pending"></div>Processing
                  </td>
                  <td className="odr-txn-id">131634495746</td>
                  <td className="odr-date">Yesterday, 03:00 PM</td>
                  <td className="odr-price">₹1,365.00</td>
                </tr>
                <tr>
                  <td className="odr-id">#281207</td>
                  <td className="odr-status">
                    <div className="done"></div>Successful
                  </td>
                  <td className="odr-txn-id">131634495745</td>
                  <td className="odr-date">12 Jul 2023, 09:30 PM</td>
                  <td className="odr-price">₹4,625.00</td>
                </tr>
                <tr>
                  <td className="odr-id">#281206</td>
                  <td className="odr-status">
                    <div className="done"></div>Successful
                  </td>
                  <td className="odr-txn-id">131634495744</td>
                  <td className="odr-date">13 Jul 2023, 05:00 PM</td>
                  <td className="odr-price">₹5,768.00</td>
                </tr>
                <tr>
                  <td className="odr-id">#281205</td>
                  <td className="odr-status">
                    <div class="done"></div>Successful
                  </td>
                  <td className="odr-txn-id">131634495743</td>
                  <td className="odr-date">14 Jul 2023, 06:00 PM</td>
                  <td className="odr-price">₹2,387.00</td>
                </tr>
                <tr>
                  <td className="odr-id">#281204</td>
                  <td className="odr-status">
                    <div className="done"></div>Successful
                  </td>
                  <td className="odr-txn-id">131634495742</td>
                  <td className="odr-date">15 Jul 2023, 03:00 PM</td>
                  <td className="odr-price">₹3,788.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Maincontent;
