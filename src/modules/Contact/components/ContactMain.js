import React from "react";

const ContactMain = () => {
  return (
    <div className="bg-0 p-t-104 p-b-116">
      <div className="container">
        <div className="flex-w">
          <div className="size-210 p-lr-70 p-t-55 p-b-70 bor">
            <form>
              <h4 className="cl2 text-center p-b-30">Send Us A Message</h4>
              <div className="m-b-20 bor8 pos-parents">
                <input
                  className="size-116 p-l-62 p-r-30"
                  placeholder="Your Email Address"
                />
                <i className="fa-regular fa-envelope pos"></i>
              </div>
              <div className="bor8 m-b-30">
                <textarea
                  className="size-120 cl2 p-lr-28 p-tb-25"
                  placeholder="How Can We Help?"
                ></textarea>
              </div>
              <button className="size-121 bg3 cl0 bor1 hov-btn3 trans-04">
                Submit
              </button>
            </form>
          </div>
          <div className="size-210 bor10 flex-w  flex-col-m p-lr-93 p-tb-30 p-lr-15-lg w-full-md">
            <div className="flex-w  p-b-42 ">
              <span className="icon cl5">
                <i class="fa-solid fa-location-dot"></i>
              </span>
              <div className="size-212 p-t-2">
                <span className="mtext-110 cl2">Address</span>
                <p className="stext-115 cl6 size-213 p-t-18">
                  Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018
                  US
                </p>
              </div>
            </div>
            <div className="flex-w w-full  p-b-42 ">
              <span className="icon cl5">
                <i class="fa-solid fa-phone"></i>
              </span>
              <div className="size-212 p-t-2">
                <span className="mtext-110 cl2">Lets Talk</span>
                <p className="stext-115 cl1 size-213 p-t-18">70696413</p>
              </div>
            </div>
            <div className="w-full  flex-w">
              <span className="icon cl5">
                <i class="fa-solid fa-envelope"></i>
              </span>
              <div className="size-212 p-t-2">
                <span className="mtext-110 cl2">Sale Support</span>
                <p className="stext-115 cl1 size-213 p-t-18">
                  example@contact.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMain;
