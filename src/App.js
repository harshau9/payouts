import Logo from "../src/components/assets/dkn-logo.png";
import {
  FaAngleDown,
  FaChevronDown,
  FaSortDown,
  FaChevronRight,
} from "react-icons/fa";
import { FiTruck } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { LuClipboardList } from "react-icons/lu";
import { IoGridOutline } from "react-icons/io5";
import { PiSpeakerHigh, PiChartBar } from "react-icons/pi";
import { MdPayments } from "react-icons/md";
import { TbDiscount2 } from "react-icons/tb";
import { LuUsers, LuPalette, LuDownload } from "react-icons/lu";
import { HiOutlineBolt } from "react-icons/hi2";
import { CiWallet } from "react-icons/ci";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import {
  RiSearchLine,
  RiMessage2Fill,
  RiArrowUpDownLine,
} from "react-icons/ri";

function App() {
  return (
    <div className="App">
      <div className="main">
        {/* SideBar */}
        <aside>
          <div className="sidebar">
            <div className="profile">
              <div className="profile-flex">
                <div className="logo">
                  <img src={Logo} alt="logo" />
                </div>
                <div className="info">
                  <h5>Nishyan</h5>
                  <p>Visit store</p>
                </div>
              </div>
              <div>
                <FaChevronDown />
              </div>
            </div>

            <ul className=".sidebar-submenu-cont">
              <li className="labelbar">
                <div className="submenu-icon">
                  <GoHome size={18} />
                </div>
                <p>Home</p>
              </li>
              <li className="labelbar">
                <div className="submenu-icon">
                  <LuClipboardList size={18} />
                </div>
                <p>Orders</p>
              </li>
              <li className="labelbar">
                <div className="submenu-icon">
                  <IoGridOutline size={18} />
                </div>
                <p>Products</p>
              </li>
              <li className="labelbar">
                <div className="submenu-icon">
                  <FiTruck size={18} />
                </div>
                <p>Delivery</p>
              </li>
              <li className="labelbar">
                <div className="submenu-icon">
                  <PiSpeakerHigh size={18} />
                </div>
                <p>Marketing</p>
              </li>
              <li className="labelbar">
                <div className="submenu-icon">
                  <PiChartBar size={18} />
                </div>
                <p>Analytics</p>
              </li>
              <li className="active-labelbar">
                <div className="submenu-icon">
                  <MdPayments size={18} />
                </div>
                <p>Payouts</p>
              </li>
              <li className="labelbar">
                <div className="submenu-icon">
                  <TbDiscount2 size={18} />
                </div>
                <p>Discounts</p>
              </li>
              <li className="labelbar">
                <div className="submenu-icon">
                  <LuUsers size={18} />
                </div>
                <p>Audience</p>
              </li>
              <li className="labelbar">
                <div className="submenu-icon">
                  <LuPalette size={18} />
                </div>
                <p>Appearance</p>
              </li>
              <li className="labelbar">
                <div className="submenu-icon">
                  <HiOutlineBolt size={18} />
                </div>
                <p>Plugins</p>
              </li>
            </ul>
            <div className="bottom-bar">
              <div className="bottom-bar-icon-cont">
                <CiWallet size={24} />
              </div>
              <div className="avail-credit">
                <h6>Available credits</h6>
                <p>222.10</p>
              </div>
            </div>
          </div>
        </aside>

        {/* MainPage */}
        <section className="navbar-section">
          <div className="navbar">
            <div className="nav-cont1">
              <div className="nav-cont1-snt">
                <div>
                  <AiOutlineQuestionCircle size={13} />
                </div>
                <p>How it works</p>
              </div>
            </div>
            <div className="nav-cont2">
              <div className="search-feature">
                <div className="box__icon">
                  <RiSearchLine size={18} />
                </div>
                <input
                  type="text"
                  placeholder="Search features, tutorials, etc."
                />
              </div>
            </div>
            <div className="nav-cont3">
              <div>
                <RiMessage2Fill size={18} />
              </div>
              <div className="chev-down">
                <FaSortDown size={24} style={{ marginBottom: "8px" }} />
              </div>
            </div>
          </div>

          <section className="main-content">
            <div className="overview-cont">
              <h2>Overview</h2>
              <div class="month">
                <p>This month</p>
                <div>
                  <FaAngleDown />
                </div>
              </div>
            </div>
            <div className="frame-container">
              <div className="blue-payment-cont">
                <div className="payment-status-cont">
                  <p>Next Payout</p>
                  <div>
                    <AiOutlineQuestionCircle size={14.5} color="#fff" />
                  </div>
                </div>
                <div className="amt-cont">
                  <p className="amt">₹2,312.23</p>
                  <div className="order-cont">
                    <p className="orders">23 orders</p>
                    <div>
                      <FaChevronRight />
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
                  <div>
                    <AiOutlineQuestionCircle size={14.5} />
                  </div>
                </div>
                <div className="amt-cont">
                  <p className="amt">₹92,312.20</p>
                  <div className="order-cont">
                    <p className="orders">13 orders</p>
                    <div>
                      <FaChevronRight />
                    </div>
                  </div>
                </div>
              </div>
              <div className="payment-cont">
                <div className="payment-status-cont">
                  <p>Amount Processed</p>
                  <div>
                    <AiOutlineQuestionCircle size={14.5} />
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
                  <RiSearchLine size={18} />
                  <input type="text" placeholder="Order ID or transaction ID" />
                </div>
                <div class="table-filters">
                  <div>
                    Sort <RiArrowUpDownLine />
                  </div>
                  <div>
                    <LuDownload />
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
                      <td class="odr-id">#281209</td>
                      <td class="odr-status">
                        <div class="done"></div>Successful
                      </td>
                      <td class="odr-txn-id">131634495747</td>
                      <td>Today, 08:45 PM</td>
                      <td>₹1,125.00</td>
                    </tr>
                    <tr>
                      <td class="odr-id">#281208</td>
                      <td class="odr-status">
                        <div class="pending"></div>Processing
                      </td>
                      <td class="odr-txn-id">131634495747</td>
                      <td>Yesterday, 03:00 PM</td>
                      <td>₹1,125.00</td>
                    </tr>
                    <tr>
                      <td class="odr-id">#281207</td>
                      <td class="odr-status">
                        <div class="done"></div>Successful
                      </td>
                      <td class="odr-txn-id">131634495747</td>
                      <td>12 Jul 2023, 03:00 PM</td>
                      <td>₹1,125.00</td>
                    </tr>
                    <tr>
                      <td class="odr-id">#281206</td>
                      <td class="odr-status">
                        <div class="done"></div>Successful
                      </td>
                      <td class="odr-txn-id">131634495747</td>
                      <td>12 Jul 2023, 03:00 PM</td>
                      <td>₹1,125.00</td>
                    </tr>
                    <tr>
                      <td class="odr-id">#281205</td>
                      <td class="odr-status">
                        <div class="done"></div>Successful
                      </td>
                      <td class="odr-txn-id">131634495747</td>
                      <td>12 Jul 2023, 03:00 PM</td>
                      <td>₹1,125.00</td>
                    </tr>
                    <tr>
                      <td class="odr-id">#281204</td>
                      <td class="odr-status">
                        <div class="done"></div>Successful
                      </td>
                      <td class="odr-txn-id">131634495747</td>
                      <td>12 Jul 2023, 03:00 PM</td>
                      <td>₹1,125.00</td>
                    </tr>
                    <tr>
                      <td class="odr-id">#281203</td>
                      <td class="odr-status">
                        <div class="done"></div>Successful
                      </td>
                      <td class="odr-txn-id">131634495747</td>
                      <td>12 Jul 2023, 03:00 PM</td>
                      <td>₹1,125.00</td>
                    </tr>
                    <tr>
                      <td class="odr-id">#281202</td>
                      <td class="odr-status">
                        <div class="done"></div>Successful
                      </td>
                      <td class="odr-txn-id">131634495747</td>
                      <td>12 Jul 2023, 03:00 PM</td>
                      <td>₹1,125.00</td>
                    </tr>
                    <tr>
                      <td class="odr-id">#281201</td>
                      <td class="odr-status">
                        <div class="done"></div>Successful
                      </td>
                      <td class="odr-txn-id">131634495747</td>
                      <td>12 Jul 2023, 03:00 PM</td>
                      <td>₹1,125.00</td>
                    </tr>
                    <tr>
                      <td class="odr-id">#281200</td>
                      <td class="odr-status">
                        <div class="done"></div>Successful
                      </td>
                      <td class="odr-txn-id">131634495747</td>
                      <td>12 Jul 2023, 03:00 PM</td>
                      <td>₹1,125.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}

export default App;
