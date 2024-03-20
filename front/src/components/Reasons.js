import React from 'react';
import Reason from './Reason';
import logo1 from '../assets/icons/icon-chat.png';
import logo2 from '../assets/icons/icon-money.png';
import logo3 from '../assets/icons/icon-security.png';

function Reasons() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <Reason
        src={logo1}
        alt="Chat Icon"
        title="You are our #1 priority"
        subtitle="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
      />
      <Reason
        src={logo2}
        alt="Money Icon"
        title="More savings means higher rates"
        subtitle="The more you save with us, the higher your interest rate will be!"
      />
      <Reason
        src={logo3}
        alt="Security Icon"
        title="Security you can trust"
        subtitle="We use top of the line encryption to make sure your data and money is always safe."
      />
    </section>
  );
}

export default Reasons;
